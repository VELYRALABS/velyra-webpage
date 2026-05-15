import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const url = process.env.CAREERS_SHEET_URL;
  if (!url) return NextResponse.json({ error: "Server configuration error" }, { status: 500 });

  try {
    const contentType = req.headers.get("content-type") || "";

    let applicationData: Record<string, string> = {};
    let fileData: string | null = null;
    let fileName: string | null = null;
    let mimeType: string | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();

      applicationData = {
        jobId:      formData.get("jobId")     as string,
        jobName:    formData.get("jobName")   as string,
        name:       formData.get("name")      as string,
        email:      formData.get("email")     as string,
        phone:      (formData.get("phone")    as string) || "",
        linkedin:   formData.get("linkedin")  as string,
        github:     formData.get("github")    as string,
        portfolio:  (formData.get("portfolio")  as string) || "",
        otherLinks: (formData.get("otherLinks") as string) || "",
        resumeLink: (formData.get("resumeLink") as string) || "",
      };

      const file = formData.get("resume") as File | null;
      if (file && file.size > 0) {
        if (file.size > 5 * 1024 * 1024) {
          return NextResponse.json({ error: "File size exceeds 5MB" }, { status: 400 });
        }
        const buffer = await file.arrayBuffer();
        fileData = Buffer.from(buffer).toString("base64");
        fileName = file.name;
        mimeType = file.type;
      }
    } else {
      applicationData = await req.json();
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "submitApplication",
        ...applicationData,
        ...(fileData ? { fileData, fileName, mimeType } : {}),
      }),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
