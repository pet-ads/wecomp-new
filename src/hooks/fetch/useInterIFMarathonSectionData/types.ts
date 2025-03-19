export interface InterIfMarathonProps {
    interIfMarathon: Event[];
}

export interface Event {
    title: string;
    definition: string;
    schedule: Schedule[];
    link: string;
} 

interface Schedule {
    time: string;
    activity: string;
}

