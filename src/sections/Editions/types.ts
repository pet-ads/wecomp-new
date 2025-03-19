export interface EditionProps {
  logoPath: string;
  altText: string;
  edition: string;
  website: string;
}

export interface EditionSectionProps {
  previousEditions: EditionProps[];
}
