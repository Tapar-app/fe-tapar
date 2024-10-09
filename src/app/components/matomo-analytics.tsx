"use client";

import React, { ReactNode, useEffect } from "react";

// Extend the Window interface to include _paq
declare global {
  interface Window {
    _paq: any[];
  }
}

const isServer = typeof window === "undefined";

// Function to initialize Matomo script
function initializeMatomo() {
  if (!isServer) {
    const _paq = (window._paq = window._paq || []);
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    const u = "//matomo.tapar.az/";
    _paq.push(["setTrackerUrl", `${u}matomo.php`]);
    _paq.push(["setSiteId", "1"]);

    const d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = `${u}matomo.js`;
    if (s?.parentNode) {
      s.parentNode.insertBefore(g, s);
    }
  }
}

let initialized = false;

function getMatomo() {
  if (!isServer && !initialized) {
    initializeMatomo();
    initialized = true;
  }
}

interface MatomoProps {
  children: ReactNode;
}

export default function MatomoAnalytics({ children }: MatomoProps) {
  useEffect(() => {
    getMatomo();
  }, []);

  return <>{children}</>;
}
