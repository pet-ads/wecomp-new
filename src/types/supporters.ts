export interface SupportersProps {
    id: string | number;
    nameSupporter: string;
    logoAlternativeText: string;
    logoPath: string;
}

export interface SupportersScetionProps {
    supporters: SupportersProps[];
}
