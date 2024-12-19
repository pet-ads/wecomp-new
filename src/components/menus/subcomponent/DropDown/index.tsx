// Types
import { NavListProps } from "../../../../types/Navigation"
import { DropDownLink, DropDownList, DropDownRow } from "./styles"

// Styles



export default function DropDownMenu({links} : NavListProps){
  return (
      <DropDownList>
          {links.map((link, index) => (
              <DropDownRow key={index}>
                  <DropDownLink href={link.url}>{link.text}</DropDownLink>
              </DropDownRow>
          ))}
    </DropDownList>
  )
}
