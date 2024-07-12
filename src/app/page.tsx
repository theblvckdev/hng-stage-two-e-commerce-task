import FlashSales from "@/components/flash_sales";
import Hero from "@/components/hero";
import Header from "@/components/ui/header";
import Navbar from "@/components/ui/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Hero />
        <FlashSales />
      </main>
    </>
  );
};

export default Home;
