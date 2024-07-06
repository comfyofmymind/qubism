import React from "react";
import Slide from "./_components/Slide";
import StBoard from "./_components/StBoard";
import Footer from "./_components/Footer";
import { Provider } from "jotai";

export default function page() {
  return (
    <>
      <Slide />
      <Provider>
        <StBoard />
      </Provider>
      <Footer />
    </>
  );
}
