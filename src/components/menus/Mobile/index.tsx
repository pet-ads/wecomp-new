import { useState, useEffect } from "react";

import DropDownMenu from "../subcomponent/DropDown";

import { NavListProps } from "../types";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import { SandWichIcon, WrapperIcon } from "./styles";

export default function MenuMobile({ links }: NavListProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { sections } = useSectionRefs();

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sections.DropDownMenu.current &&
      !sections.DropDownMenu.current.contains(event.target as Node)
    ) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <SandWichIcon ref={sections.DropDownMenu}>
      <WrapperIcon onClick={handleOpenMenu} />
      <DropDownMenu links={links} isOpen={openMenu} />
    </SandWichIcon>
  );
}
