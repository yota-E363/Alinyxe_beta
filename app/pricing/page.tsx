"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}