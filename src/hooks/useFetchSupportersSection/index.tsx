import { SupportersScetionProps } from "../../types/Supporters";

import Supporters from "../../data/supporters.json";

export default function useFetchSupportersSection(): SupportersScetionProps {
  return Supporters;
}