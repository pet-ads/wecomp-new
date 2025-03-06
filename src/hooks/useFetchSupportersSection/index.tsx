import { SupportersScetionProps } from "../../types/supporters";

import supporters from "../../../public/data/supporters.json";

export default function useFetchSupportersSection(): SupportersScetionProps {
  return supporters;
}
