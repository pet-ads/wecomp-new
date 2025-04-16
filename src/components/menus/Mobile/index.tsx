import { useState, useEffect, useRef } from "react";

import DropDownMenu from "../subcomponent/DropDown";

import { NavListProps } from "../types";

import { SandWichIcon, WrapperIcon } from "./styles";

export default function MenuMobile({ links }: NavListProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const DropDownMenuComponent = useRef<HTMLDivElement>(null);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      DropDownMenuComponent.current &&
      !DropDownMenuComponent.current.contains(event.target as Node)
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
    <SandWichIcon ref={DropDownMenuComponent}>
      <WrapperIcon onClick={handleOpenMenu} />
      <DropDownMenu links={links} isOpen={openMenu} />
    </SandWichIcon>
  );
}
