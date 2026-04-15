import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ContactProvider } from "./context/ContactContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Assignment7",
  description: "Created By Apurba Ovi",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="w-11/12 mx-auto text-center flex flex-col min-h-screen">

        {/* ✅ Always Top */}
        <NavBar />

        {/* ✅ Dynamic Content */}
        <main className="flex-1">
          <ContactProvider>
            {children}
            <ToastContainer />
          </ContactProvider>
        </main>

        {/* ✅ Always Bottom */}
        <Footer />

      </body>
    </html>
  );
}
