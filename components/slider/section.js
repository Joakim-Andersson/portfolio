import React from "react";

const Section = ({ children }) => {
  return (
    <section
      style={{
        margin: "10px 0 10px 0"
      }}
    >
      {children}
    </section>
  );
};

export default Section;
