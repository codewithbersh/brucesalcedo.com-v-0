"use client";

import { useEffect } from "react";

export const MouseFlow = () => {
  useEffect(() => {
    window._mfq = window._mfq || [];
    (function () {
      var mf = document.createElement("script");
      mf.type = "text/javascript";
      mf.defer = true;
      mf.src =
        "//cdn.mouseflow.com/projects/0c7cceb2-431f-4179-8d03-f76348714add.js";
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();
  }, []);
  return <></>;
};
