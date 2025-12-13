"use client";

import { Phone } from "lucide-react";
import { useState } from "react";

export default function FloatingCallButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "+1-310-893-9219";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-8 right-8 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Call us"
    >
      <div className="relative">
        {/* Phone number tooltip */}
        <div
          className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#25375d] text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <span className="font-semibold">{phoneNumber}</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-[#25375d]" />
        </div>

        {/* Call button */}
        <div className="bg-gradient-to-br from-[#25375d] to-[#1a2744] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 cursor-pointer">
          <Phone className={`w-7 h-7 transition-transform duration-300 ${isHovered ? "animate-bounce" : ""}`} />
        </div>

        {/* Pulse animation rings */}
        <div className="absolute inset-0 rounded-full bg-[#25375d] animate-ping opacity-20" />
        <div className="absolute inset-0 rounded-full bg-[#25375d] animate-pulse opacity-30" />
      </div>
    </a>
  );
}
