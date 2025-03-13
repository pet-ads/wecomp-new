import { SupportersScetionProps } from "../../components/sections/Supporters/types";

import supporters from "../../data/supporters.json";

export default function useFetchSupportersSection(): SupportersScetionProps {
  return supporters;
}
