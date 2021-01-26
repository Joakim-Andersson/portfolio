import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Item from "../animate/Item"

export default function App() {

  const items = [
    {style: "Frontend", one: "React", two: "CSS", three: "HTML", "four": "Webpack", "five":"Redux" },
    {style: "Backend", one: "REST", two: "NodeJS", three: "MongoDB", "four": "PostgreSQL", "five": "ExpressJS"},
    {style: "Tools", one: "Figma", two: "Photoshop", three: "Git", "four": "Heroku", "five": "VSC"}
  ];

  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map((item) => (
          <Item key={item} item={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}