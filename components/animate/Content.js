import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"


export default function Content({ item }) {
  return (
    <motion.div className="skills__item-contentbox"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="skills__item-language">
        <Image
          src={"/icons/" + item.one + ".png"}
          alt={item.one + " logo"}
          width={50}
          height={50}
        />
        <p className="skills__item-content"> {item.one} </p>
      </div>

      <div className="skills__item-language">
        <Image
          src={"/icons/" + item.two + ".png"}
          alt={item.two + " logo"}
          width={50}
          height={50}
        />
        <p className="skills__item-content"> {item.two} </p>
      </div>

      <div className="skills__item-language">
        <Image
          src={"/icons/" + item.three + ".png"}
          alt={item.three + " logo"}
          width={50}
          height={50}
        />
        <p className="skills__item-content"> {item.three} </p>
      </div>

      <div className="skills__item-language">
        <Image
          src={"/icons/" + item.four + ".png"}
          alt={item.four + " logo"}
          width={50}
          height={50}
        />
        <p className="skills__item-content"> {item.four} </p>
      </div>

      <div className="skills__item-language">
        <Image
          src={"/icons/" + item.five + ".png"}
          alt={item.five + " logo"}
          width={50}
          height={50}
        />
        <p className="skills__item-content"> {item.five} </p>
      </div>

    </motion.div>
  );
}