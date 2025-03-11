import { SupportersScetionProps } from "../../types/supporters";

import supporters from "../../data/supporters.json";

export default function useFetchSupportersSection(): SupportersScetionProps {
  return supporters;
}
