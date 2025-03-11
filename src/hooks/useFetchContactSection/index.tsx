import { ContactSectionsProps } from "../../types/Contact";

import contact from "../../../public/data/contacts.json";

export default function useFetchContactSection(): ContactSectionsProps {
  return { socialMedias: contact.socialMedias };
}
