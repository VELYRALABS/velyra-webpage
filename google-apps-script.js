// ============================================================
// VeLYRA Careers - Google Apps Script
// 1. Paste this entire file into your Apps Script editor
// 2. Replace the three IDs below with your actual values
// 3. Save and deploy as Web App:
//    - Execute as: Me
//    - Who has access: Anyone
// 4. Copy the deployed URL → set as CAREERS_SHEET_URL in .env.local
// ============================================================

var JOBS_SHEET_ID = "YOUR_JOBS_SHEET_ID";         // Sheet ID from the Jobs spreadsheet URL
var APPS_SHEET_ID = "YOUR_APPLICATIONS_SHEET_ID"; // Sheet ID from the Applications spreadsheet URL
var RESUME_FOLDER_ID = "YOUR_DRIVE_FOLDER_ID";    // Google Drive folder ID for storing uploaded resumes

// ------ Entry Point ------

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    switch (data.action) {
      case "getJobs":          return respond(getJobs(data));
      case "createJob":        return respond(createJob(data));
      case "updateJob":        return respond(updateJob(data));
      case "deleteJob":        return respond(deleteJob(data));
      case "submitApplication":return respond(submitApplication(data));
      default:                 return respond({ error: "Unknown action" });
    }
  } catch (err) {
    return respond({ error: err.toString() });
  }
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ------ Jobs ------

function getJobs(data) {
  var sheet = SpreadsheetApp.openById(JOBS_SHEET_ID).getSheets()[0];
  var rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) return [];

  var jobs = rows.slice(1).map(function(row) {
    return {
      id:             String(row[0]),
      title:          String(row[1]),
      type:           String(row[2]),
      location:       String(row[3]),
      timing:         String(row[4]),
      about:          String(row[5]),
      responsibilities: String(row[6]),
      qualifications: String(row[7]),
      idealCandidate: String(row[8]),
      compensation:   String(row[9]),
      deadline:       String(row[10]),
      status:         String(row[11]),
      postedAt:       String(row[12]),
    };
  }).filter(function(j) { return j.id; });

  if (data.publicOnly) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    jobs = jobs.filter(function(j) {
      return j.status === "active" && new Date(j.deadline) >= today;
    });
  }

  return jobs;
}

function createJob(data) {
  var sheet = SpreadsheetApp.openById(JOBS_SHEET_ID).getSheets()[0];
  var id = "JOB-" + Date.now();
  var now = new Date().toISOString();

  sheet.appendRow([
    id,
    data.title,
    data.type,
    data.location,
    data.timing          || "",
    data.about           || "",
    data.responsibilities|| "",
    data.qualifications  || "",
    data.idealCandidate  || "",
    data.compensation    || "",
    data.deadline,
    "active",
    now,
  ]);

  return { success: true, id: id };
}

function updateJob(data) {
  var sheet = SpreadsheetApp.openById(JOBS_SHEET_ID).getSheets()[0];
  var rows = sheet.getDataRange().getValues();

  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.id)) {
      if (data.status    !== undefined) sheet.getRange(i + 1, 12).setValue(data.status);
      if (data.title     !== undefined) sheet.getRange(i + 1, 2).setValue(data.title);
      if (data.deadline  !== undefined) sheet.getRange(i + 1, 11).setValue(data.deadline);
      return { success: true };
    }
  }
  return { error: "Job not found" };
}

function deleteJob(data) {
  var sheet = SpreadsheetApp.openById(JOBS_SHEET_ID).getSheets()[0];
  var rows = sheet.getDataRange().getValues();

  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0]) === String(data.id)) {
      sheet.deleteRow(i + 1);
      return { success: true };
    }
  }
  return { error: "Job not found" };
}

// ------ Applications ------

function submitApplication(data) {
  var sheet = SpreadsheetApp.openById(APPS_SHEET_ID).getSheets()[0];
  var id = "APP-" + Date.now();
  var now = new Date().toISOString();

  var resumeLink = data.resumeLink || "";

  // If a file was uploaded (base64), save it to Drive
  if (data.fileData && RESUME_FOLDER_ID !== "YOUR_DRIVE_FOLDER_ID") {
    try {
      var folder  = DriveApp.getFolderById(RESUME_FOLDER_ID);
      var decoded = Utilities.base64Decode(data.fileData);
      var blob    = Utilities.newBlob(decoded, data.mimeType || "application/pdf", data.fileName || "resume.pdf");
      var file    = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      resumeLink  = file.getUrl();
    } catch (err) {
      resumeLink = "Upload error: " + err.toString();
    }
  }

  sheet.appendRow([
    id,
    data.jobId,
    data.jobName,
    data.name,
    data.email,
    data.phone      || "",
    data.linkedin,
    data.github,
    data.portfolio  || "",
    data.otherLinks || "",
    resumeLink,
    now,
  ]);

  return { success: true };
}
