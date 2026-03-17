"use client";

import { useEffect, useState } from "react";
import CRMPortfolio from "@/components/CRMPortfolio";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Remove any extension-added classes during hydration
    document.body.className = "antialiased";

    // Get initial hash
    setCurrentHash(window.location.hash);

    // Listen for hash changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // If hash is #crm, show CRM portfolio page
  if (currentHash === "#crm") {
    return <div className="antialiased"><CRMPortfolio /></div>;
  }

  return <div className="antialiased">{children}</div>;
}
