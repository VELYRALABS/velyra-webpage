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
  return (
    !!process.env.ADMIN_PASSWORD &&
    cookies["careers_session"] === process.env.ADMIN_PASSWORD
  );
}
