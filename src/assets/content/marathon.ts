import finalPhase from "../images/InterIf.jpeg";

interface MarathonProps {
  definition: {
    full: string;
    simplified: string;
  };
  link: string;
  path: string;
}

export const marathonContent: MarathonProps = {
  definition: {
    full: "O InterIF é uma ação que visa contribuir com a aprendizagem por meio de uma competição de programação de computadores destinada aos estudantes regularmente matriculados nos cursos do Instituto Federal de São Paulo, realizada anualmente em duas etapas, sendo que a final de 2025 será em São Carlos.",
    simplified:
      "O InterIF é uma competição de programação para estudantes do IFSP, realizada anualmente em duas etapas. A final de 2025 será em São Carlos.",
  },
  link: "https://ifsp.edu.br/interif",
  path: finalPhase,
};

export default marathonContent;
