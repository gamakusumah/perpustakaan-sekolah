import Sidebar from "@/components/Sidebar";
import "../globals.css";
import { Inter, Poppins } from "next/font/google";
import { AuthProvider } from "../Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Perpustakaan Sekolah",
  description: "Website Perpustakaan Sekolah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}, ${poppins.variable}`}>
        <div className="flex">
          <AuthProvider>
            <Sidebar>{children}</Sidebar>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
