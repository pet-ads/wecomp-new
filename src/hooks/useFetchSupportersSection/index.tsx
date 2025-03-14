import { SupportersScetionProps } from "../../components/sections/Supporters/types";

import Supporters from "../../data/supporters.json";

export default function useFetchSupportersSection(): SupportersScetionProps {
  return Supporters;
}