// Types
import { ProgrammingProps } from "../components/sections/Programming/types";

export const groupProgramming = (
  data: ProgrammingProps[]
): ProgrammingProps[] => {
  const groups = data.reduce(
    (acc, prog) => {
      if (prog.typeEvent === "Opening") {
        acc.opening = prog;
        return acc;
      }

      const baseKey =
        prog.typeEvent === "Talk"
          ? "talks"
          : prog.typeEvent === "Course"
          ? "courses"
          : null;

      if (!baseKey) return acc;

      const statusKey =
        prog.status === "Available"
          ? "WithVacancies"
          : prog.status === "LastVacancies"
          ? "LastVacancies"
          : "WithoutVacancies";

      acc[`${baseKey}${statusKey}`].push(prog);
      return acc;
    },
    {
      opening: null as ProgrammingProps | null,
      talksWithVacancies: [] as ProgrammingProps[],
      talksLastVacancies: [] as ProgrammingProps[],
      talksWithoutVacancies: [] as ProgrammingProps[],
      coursesWithVacancies: [] as ProgrammingProps[],
      coursesLastVacancies: [] as ProgrammingProps[],
      coursesWithoutVacancies: [] as ProgrammingProps[],
    }
  );

  return [
    ...(groups.opening ? [groups.opening] : []),
    ...groups.talksWithVacancies,
    ...groups.talksLastVacancies,
    ...groups.talksWithoutVacancies,
    ...groups.coursesWithVacancies,
    ...groups.coursesLastVacancies,
    ...groups.coursesWithoutVacancies,
  ];
};

export default groupProgramming;
