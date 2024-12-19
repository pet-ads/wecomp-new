// External library
import { useState, useEffect, useRef } from "react";
import { IoMenuOutline } from "react-icons/io5";

// Components
import DropDownMenu from "../subcomponent/DropDown";

// Types
import { NavListProps } from "../../../types/Navigation";

// Styles
import { SandWichIcon } from "./styles";

export default function MenuMobile({ links }: NavListProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SandWichIcon ref={menuRef}>
      <IoMenuOutline size="3rem" color="white" onClick={handleOpenMenu} />
      {openMenu && <DropDownMenu links={links} />}
    </SandWichIcon>
  );
}
