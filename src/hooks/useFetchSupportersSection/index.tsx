// Types
import { SupportersScetionProps } from "../../types/supporters";

// JSON 
import supporters from "../../../public/data/supporters.json";

export default function useFetchSupportersSection(): SupportersScetionProps {
    return supporters;
}