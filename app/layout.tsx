// app/layout.tsx
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css"; // Your Tailwind CSS file

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF9F6] text-[#1A1A2E] pt-[80px]">
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}