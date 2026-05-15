export function isAdminAuthenticated(req: Request): boolean {
  const cookie = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookie
      .split("; ")
      .filter(Boolean)
      .map((c) => {
        const [k, ...v] = c.split("=");
        return [k.trim(), v.join("=")];
      })
  );
  const sessionValue = cookies["careers_session"];
  return (
    !!process.env.ADMIN_PASSWORD &&
    !!sessionValue &&
    decodeURIComponent(sessionValue) === process.env.ADMIN_PASSWORD
  );
}
