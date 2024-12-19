// External library
import { motion } from "framer-motion";

// Types
import { NavListProps } from "../../../../types/Navigation"

// Styles
import { DropDownLink, DropDownList, DropDownRow } from "./styles";



export default function DropDownMenu({links} : NavListProps){
  return (
    <DropDownList
      as={motion.ul}
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      exit={{ opacity: 1, x: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {links.map((link, index) => (
        <DropDownRow key={index}
          as={motion.li}
          initial={{ opacity: 0, scale: 0 }}
          animate={{opacity: 1, scale: 1}}
        >
          <DropDownLink
            as={motion.a}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={link.url}
          >
            {link.text}
          </DropDownLink>
        </DropDownRow>
      ))}
    </DropDownList>
  );
}
