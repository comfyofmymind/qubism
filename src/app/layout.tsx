import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qubism",
  description: "Qubism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body className={inter.className}>
        <div className="flex justify-center items-center h-screen m-0 bg-gray-200">
          <div className="w-[390px] h-[692px] flex flex-col justify-center items-center mx-auto bg-white border-2 border-gray-300 rounded-2xl shadow-lg relative overflow-hidden">
            {/* <Header /> */}
            <div className="flex justify-center items-center h-full custom-scrollbar">
              <div className="w-full h-full">{children}</div>
            </div>
            {/* <Move /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
