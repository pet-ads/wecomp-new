export interface ProgrammingProps {
    id: string | number;
    name: string;
    image: string;
    imageDescription: string;
    bio: string;
    author: string;
    date: string;
    time: string;
    link: string;
    active: boolean;
    vacancies: string | number;
    location: string;
    description: string;
}

export interface ProgrammingSectionProps {
    eventProgramming: ProgrammingProps[];
}
