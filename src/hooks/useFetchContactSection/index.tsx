import { ContactSectionsProps } from "../../types/Contact";

import contact from "./../../data/contacts.json";

export default function useFetchContactSection(): ContactSectionsProps {
  return { socialMedias: contact.socialMedias };
}
