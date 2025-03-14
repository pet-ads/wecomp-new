import { ContactSectionsProps } from "../../components/sections/Contact/types";

import contact from "./../../data/contacts.json";

export default function useFetchContactSection(): ContactSectionsProps {
  return { socialMediaLinks: contact.socialMediaLinks };
}
