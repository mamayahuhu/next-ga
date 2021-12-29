import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect } from "react";
import * as gtag from "./gtag";
import { NextGAScript } from "./nextGAScript";

const GAContext = createContext({});

const GAProvider: React.FC = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView({ page_path: url });
    };
    console.log("GA Provider");
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <GAContext.Provider value={{}}>{children}</GAContext.Provider>;
};

const useGA = () => useContext(GAContext);
export { NextGAScript, GAProvider, useGA, gtag };
