import React from "react";

import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className={inter.className}>
        <Navbar />
        <div className="content-wrap">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
