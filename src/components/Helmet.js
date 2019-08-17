import React from "react";
import {Helmet} from "react-helmet";

export default ({ title = "AI on the Beach" }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="canonical" href="https://github.com/ai-on-the-beach" />
  </Helmet>
);
