// ============================================================
// VeLYRA Careers - Google Apps Script
// 1. Paste this entire file into your Apps Script editor
// 2. Replace the three IDs below with your actual values
// 3. Save and deploy as Web App:
//    - Execute as: Me
//    - Who has access: Anyone
//    - After future edits: Deploy > Manage deployments > Edit > New version
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
      id:               cellToString(row[0]),
      title:            cellToString(row[1]),
      type:             cellToString(row[2]),
      location:         cellToString(row[3]),
      timing:           cellToString(row[4]),
      about:            cellToString(row[5]),
      responsibilities: cellToString(row[6]),
      qualifications:   cellToString(row[7]),
      idealCandidate:   cellToString(row[8]),
      compensation:     cellToString(row[9]),
      deadline:         cellToString(row[10]),
      status:           cellToString(row[11]).toLowerCase(),
      postedAt:         cellToString(row[12]),
    };
  }).filter(function(j) { return j.id; });

  if (data.publicOnly) {
    jobs = jobs.filter(function(j) {
      return j.status === "active" && isDeadlineOpen(j.deadline);
    });
  }

  return jobs;
}

function cellToString(value) {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString();
  return String(value).trim();
}

function isDeadlineOpen(deadline) {
  if (!deadline) return true;

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var deadlineDate = new Date(deadline);
  if (isNaN(deadlineDate.getTime())) return true;
  deadlineDate.setHours(0, 0, 0, 0);

  return deadlineDate >= today;
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
