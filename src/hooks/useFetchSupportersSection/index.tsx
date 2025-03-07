import { SupportersScetionProps } from "../../types/Supporters";

import supporters from "../../../public/data/supporters.json";

export default function useFetchSupportersSection(): SupportersScetionProps {
  return supporters;
}
