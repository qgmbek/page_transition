'use client';

import React from "react";
// import { AnimatePresence } from "framer-motion";

// Pages
import Land from "./land";

// Components
import Header from "./header";

//Styles
import "./App.scss";
import "./globals.css";

export default function Home() {
    const imageDetails = {
      width: 524,
      height: 550,
    };
  
    return (
      <>
          <Header />
          <Land imageDetails={imageDetails} />
      </>
    );
}