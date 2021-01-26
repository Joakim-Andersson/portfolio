import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Content from "../animate/Content"


export default function Item({item}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <h1 className="skills__style"> {item.style} </h1>
      <motion.div layout />
      <AnimatePresence>{isOpen && <Content  item={item} />}</AnimatePresence>
    </motion.li>
  );
}