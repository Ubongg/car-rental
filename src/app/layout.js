import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import StyledComponentsRegistry from "./registry";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yubo Rental",
  description: "car rental app created with reactjs and nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="container">
            <StyledComponentsRegistry>
              <Navbar />
              {children}
              <Footer />
            </StyledComponentsRegistry>
          </div>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
