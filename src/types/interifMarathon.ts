export interface InterIfMarathonProps {
    interIfMarathon: Event[];
}

interface Event {
    title: string;
    definition: string;
    schedule: Schedule[];
} 

interface Schedule {
    time: string;
    activity: string;
}
