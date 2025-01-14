// JSON 
import supporters from "../../../public/data/supporters.json";
import { SupportersScetionProps } from "../../types/supporters";

export default function useFetchSupportersSection() {
    const supportersInformation: SupportersScetionProps = supporters.eventSupporters

    return{supportersInformation};
}