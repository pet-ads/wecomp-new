
// External library
import { useState } from 'react'
import { IoMenuOutline, IoClose } from "react-icons/io5";

// Components
import DropDownMenu from "../subcomponent/DropDown";

// Types
import { NavListProps } from '../../../types/Navigation'

// Styles
import { SandWichIcon } from "./styles";

export default function MenuMobile({ links }: NavListProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(prev => !prev);
  };

  return (
    <SandWichIcon>
      <IoMenuOutline size="3rem" color="white" onClick={handleOpenMenu} />
      {openMenu && <DropDownMenu links={links}/>}
    </SandWichIcon>
  );
}
