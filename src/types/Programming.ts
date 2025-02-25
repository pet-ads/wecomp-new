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
    vacancies: string | number;
    location: string;
    status: string;
    classification: string;
    description: string;
    programmingIcon: string;
}

export interface ProgrammingSectionProps {
    eventProgramming: ProgrammingProps[];
}
