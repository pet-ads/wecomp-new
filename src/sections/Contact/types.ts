export interface ContactProps {
  id: string | number;
  username: string;
  contactUrl: string;
  iconPath: string;
  iconAlt: string;
}

export interface ContactSectionsProps {
  socialMediaLinks: ContactProps[];
}
