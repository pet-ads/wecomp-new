import { ContactSectionsProps } from "../../../components/sections/Contact/types";

import contact from "../../../data/contacts.json";

export default function useContactSectionData(): ContactSectionsProps {
  return { socialMediaLinks: contact.socialMediaLinks };
}
