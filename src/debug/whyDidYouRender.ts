// Use for tracking unnecessary re-renders in React components during development

import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";

if (import.meta.env.DEV) {
  whyDidYouRender(React, {
    trackAllPureComponents: false,
    trackHooks: true,
  });
}
