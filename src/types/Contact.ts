export interface ContactProps {
  id: string | number;
  socialMediaName: string;
  url: string;
  icon: string;
  alt: string;
}

export interface ContactSectionsProps {
  socialMedias: ContactProps[];
}
