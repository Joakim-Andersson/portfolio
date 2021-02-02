import UAParser from "ua-parser-js";
import React, { Fragment } from "react";
import WithScrollbar from "../slider/WithScrollbar";
import Section from "../slider/Section";

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Slider = ({ deviceType }) => {
  return (
    <Fragment>
      <Section>
        <WithScrollbar />
      </Section>
    </Fragment>
  );
};
Slider.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default Slider;
