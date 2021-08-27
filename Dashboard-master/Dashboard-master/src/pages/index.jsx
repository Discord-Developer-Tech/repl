import React from "react";

import Layout from "../components/Layout";
import Introduction from "../containers/Introduction";
import Section from "../containers/Section";
import Features from "../containers/Features";

export default function Index() {
  return (
    <>
      <Layout>
        <Introduction />
        <Section />
        <Features />
      </Layout>
    </>
  );
}
