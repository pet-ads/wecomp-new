import { ProgrammingProps } from "../../components/sections/Programming/types";

//import minister from "../images/ministrante.svg"
import onovolav from "../images/organizationLogo/onovolab.svg"
import amdocs from "../images/organizationLogo/amdocs.svg"
import GabrielZutiao from "../images/lecturers/GabrielZutiao.svg"
import CarlaoPereira from "../images/lecturers/CarlaoPereira.svg"
//import Pet from "../images/organizationLogo/petLogo.svg"
import LauraLuchiari from "../images/lecturers/LauraLuchiari.svg"
//import DP_LC from "../images/lecturers/DP_LC.svg"
import LeonardoCerminaro from "../images/lecturers/LC.svg"
import kakautech from "../images/organizationLogo/KakauTech.svg"




export const programmingContent: ProgrammingProps[] = [
   {
    name: "Abertura oficial",
    image: onovolav,
    imageDescription: "OnovoLab",
    bio: "",
    author: "ONOVOLAB",
    date: "03/10",
    time: "19h - 22h",
    link: "",
    vacancies: 240,
    location: "ONOVOLAB",
    description:
      "A abertura oficial da VI Wecomp acontecerá no ONOVOLAB e contará com a presença de empresas parceiras, uma mesa redonda com o tema 'IA generativa, mercado de trabalho e a carreira dos (novos) desenvolvedores' e uma confraternização. Não perca!",
    typeEvent: "Opening",
    classification: "Free",
    status: "Available",
  },
  {
    name: "Da Ideia à Solução: Caminhos Reais na Entrega e Suporte de Tecnologia",
    image: amdocs,
    imageDescription: "Henrique Trimidi, Giovana Garcia, Ricardo Ortega e Misia Meyknecht",
    bio: "Henrique Trimidi: Domain Solution Expert; Com 12 anos de experiência na Amdocs, Henrique construiu uma carreira sólida na indústria de telecomunicações, atuando desde Desenvolvedor Júnior até Gerente de Desenvolvimento. Ex-aluno do IFSP, ele é especialista em soluções tecnológicas, com profundo conhecimento em desenvolvimento de software e uma visão estratégica voltada para inovação e eficiência em projetos complexos.\n\nGiovana Garcia: SW Developer; Graduanda em Análise e Desenvolvimento de Sistemas em São Carlos, iniciou sua trajetória acadêmica na UFSCar, na área de Ciências Sociais. Com o tempo, sua afinidade com tecnologia a levou a migrar para Análise e Desenvolvimento de Sistemas, onde vem se desenvolvendo como profissional da área. Recentemente contratada pela Amdocs, ela dá início à sua jornada no desenvolvimento de software.\n\nRicardo Ortega: Site Lead; Com 33 anos de trajetória na área de Tecnologia da Informação, Ricardo acumula 27 anos de atuação como executivo em empresas nacionais e multinacionais, como Amdocs do Brasil, Elevadores Otis e Cromos Tintas Gráficas. Especialista em telecomunicações, possui sólida experiência em todo o ciclo de vida de projetos e suporte a sistemas, contribuindo diretamente para a entrega de soluções eficientes e sustentáveis para diversos clientes.\n\nMisia Meyknecht: TA Team Lead; Com 15 anos de experiência em recrutamento e seleção, atuou em empresas dos setores de marketing, tecnologia (software) e financeiro. Há 8 anos na Amdocs, onde lidera iniciativas estratégicas de aquisição de talentos para América Latina, com foco em atrair perfis alinhados à cultura organizacional e às necessidades do negócio.",
    author: "Henrique Trimidi, Giovana Garcia, Ricardo Ortega e Misia Meyknecht",
    date: "06/10",
    time: "19h00-21h00",
    link: "",
    vacancies: 110,
    location: "IFSP - C103",
    description:
      "Esta sessão interativa reúne profissionais de diferentes áreas para compartilhar suas trajetórias e experiências na entrega de soluções, suporte a sistemas e interação com usuários. O painel abordará como uma ideia nasce a partir da necessidade do cliente, os passos até sua implementação técnica e o papel essencial das áreas de suporte e operações.",
    typeEvent: "Talk",
    classification: "Free",
    status: "Available",
  },
  {
    name: "A Solução Começa na Orelha",
    image: kakautech,
    imageDescription: "Henrique Trimidi, Giovana Garcia, Ricardo Ortega e Misia Meyknecht",
    bio: "Paulo Pedroso é pai do Pedro Henrique e do João Guilherme, e essa é a informação mais importante que precisam saber sobre ele. Sócio-fundador, atua como CTO na Kakau Tech desde 2022. Com mais de 30 anos no mercado, é apaixonado por tecnologia. Ele também é um músico muito talentoso, segundo ele mesmo e mais ninguém...",
    author: "Paulo Pedroso",
    date: "08/10",
    time: "19h00-21h00",
    link: "",
    vacancies: 110,
    location: "IFSP - C103",
    description:
      "Esta palestra apresenta a Kakau Tech, uma empresa especializada em integrar a tecnologia digital aos negócios. Na Kakau Tech, o foco está em compreender profundamente os desafios dos clientes para oferecer soluções realmente relevantes. Este bate-papo busca mostrar que a tecnologia deve servir ao propósito de resolver problemas reais, e que o sucesso está em propor soluções simples e eficazes – em vez de apostar em ferramentas sofisticadas que não se conectam com as necessidades do cliente. Os participantes perceberão que a escuta ativa, aliada à identificação de oportunidades e à definição de estratégias de inovação, agrega valor prático, com exemplos do cotidiano empresarial e experiências do mercado.",
    typeEvent: "Talk",
    classification: "Free",
    status: "Available",
  },
  {
    name: "Desenvolvendo um aplicativo multiplataforma com Expo, Google Maps e Redux.",
    image: GabrielZutiao,
    imageDescription: "Gabriel Zutião",
    bio: "Gabriel Zutião é mestre em Ciência da Computação e Matemática Computacional pela USP e egresso do IFSP São Carlos. Com mais de seis anos de experiência na área, atua como desenvolvedor full-stack na Dimastec e possui experiência em React, React Native e Spring Boot, além de um grande interesse por sistemas operacionais alternativos.",
    author: "Gabriel Zutião",
    date: "06/10",
    time: "14h00 - 17h30",
    link: "",
    vacancies: 30,
    location: "IFSP - C107",
    description:
      "Neste minicurso vamos explorar a utilização das bibliotecas react-native-maps e Redux em um aplicativo React Native gerenciado pela plataforma Expo. Faremos um app que acompanha o progresso de uma caminhada/trilha e mostra informações úteis para o usuário.",
    typeEvent: "Course",
    classification: "Intermediary",
    status: "Available",
  },
  {
    name: "Como sobreviver no terminal do Linux",
    image: CarlaoPereira,
    imageDescription: "Carlão Pereira",
    bio: "Carlão é professor efetivo do IFSP (campus São Carlos), desde 2012. Possui doutorado em Geografia pela UNESP, no qual desenvolveu um software para produção e análise de informações geográficas com o auxílio de técnicas de computação inteligente (lógica Nebulosa e redes neurais artificiais). É mestre pela Escola Nacional de Ciências Estatísticas e Tecnólogo em Processamento de Dados pela Universidade Veiga de Almeida. Usuário de Linux desde 2005, colaborador e disseminador da filosofia do Software Livre. Vascaíno sofredor.",
    author: "Carlão Pereira",
    date: "08/10",
    time: "08h00 - 11h30",
    link: "",
    vacancies: 30,
    location: "IFSP - C107",
    description:
      "Este mini-curso apresentará uma breve história da filosofia do Software Livre e do surgimento do sistema operacional Linux, focando em seguida nos principais comandos para dominar o terminal e executar tarefas com agilidade e eficiência. Desde comandos básicos de navegação até operações mais avançadas, serão exploradas ferramentas essenciais para gestão de arquivos, instalação de programas, gerenciamento de processos, entre outros, de uma forma totalmente prática.",
    typeEvent: "Course",
    classification: "Free",
    status: "Available",
  },
  {
    name: "Programação Rústica: desbravando o Rust do zero",
    image: CarlaoPereira,
    imageDescription: "Carlão Pereira",
    bio: "Carlão é professor efetivo do IFSP (campus São Carlos), desde 2012. Possui doutorado em Geografia pela UNESP, no qual desenvolveu um software para produção e análise de informações geográficas com o auxílio de técnicas de computação inteligente (lógica Nebulosa e redes neurais artificiais). É mestre pela Escola Nacional de Ciências Estatísticas e Tecnólogo em Processamento de Dados pela Universidade Veiga de Almeida. Usuário de Linux desde 2005, colaborador e disseminador da filosofia do Software Livre. Vascaíno sofredor.",
    author: "Carlão Pereira",
    date: "09/10",
    time: "08h00 - 11h30",
    link: "",
    vacancies: 30,
    location: "IFSP - C107",
    description:
      "Rust é uma linguagem de programação moderna que vem ganhando destaque por unir alto desempenho, segurança de memória e um ecossistema em constante crescimento. Utilizada em grandes projetos de software e cada vez mais presente no mercado, ela se destaca como uma alternativa poderosa a linguagens tradicionais como C e C++. Nesta minicurso, vamos explorar os conceitos básicos da linguagem, entender sua proposta e dar os primeiros passos no desenvolvimento com Rust.",
    typeEvent: "Course",
    classification: "Basic",
    status: "Available",
  },
  /*{
    name: "Git e GitHub: do mínimo que você precisa saber ao deploy no Vercel",
    image: Pet,
    imageDescription: "Lucas Oliveira",
    bio: "Lucas é um cientista da computação que se diverte projetando e desenvolvendo software há 20 anos. É professor do IFSP São Carlos desde 2015 e atual tutor do PET/ADS. Erick Santinon, Guilherme Mendes e Matheus Pacífico são alunos do curso de ADS do IFSP e bolsistas do grupo PET/ADS.",
    author: "Lucas Oliveira",
    date: "08/10",
    time: "14h00 - 17h30",
    link: "",
    vacancies: 30,
    location: "IFSP - C107",
    description:
      "Neste minicurso, você aprenderá os conceitos básicos do Git, capacitando-o a usar essa ferramenta no dia a dia. Também será apresentada uma visão geral do GitHub e como integrá-lo ao Vercel para realizar deploys automáticos de páginas web.",
    typeEvent: "Course",
    classification: "Free",
    status: "Available",
  },*/
  {
    name: "Introdução à automação de testes com Playwright",
    image: LeonardoCerminaro,
    imageDescription: "Leonardo Cerminaro",
    bio: "Leonardo é profissional de QA com sólida experiência em liderança de equipes e automação de testes. Atua em projetos internacionais, com foco em qualidade, processos ágeis e melhoria contínua há 7 anos, atualmente QA Lead na Riot Games.",
    author: "Leonardo Cerminaro",
    date: "06/10",
    time: "08h00 - 11h30",
    link: "",
    vacancies: 20,
    location: "IFSP - C107",
    description:
      "Aprenda os fundamentos da automação de testes com Playwright em um minicurso prático, explorando conceitos, exemplos e primeiros scripts.",
    typeEvent: "Course",
    classification: "Basic",
    status: "Available",
  },
  /*{
    name: "Desenvolvimento de Aplicações Híbridas com Capacitor",
    image: DP_LC,
    imageDescription: "Diego Pagotto e Luiz Chiquetano",
    bio: "Diego Pagotto é desenvolvedor P&D Júnior na Xmobots e atua com RTA, SpringBoot, React, PostgreSQL, Go e Python.\nLuiz Chiquetano é desenvolvedor P&D Júnior na Xmobots e trabalha com RTA, React, Typescript, Java e Kotlin. Ambos são egressos do curso de ADS do IFSP São Carlos.",
    author: "Diego Pagotto e Luiz Chiquetano",
    date: "A definir",
    time: "",
    link: "",
    vacancies: 30,
    location: "IFSP",
    description:
      "Neste minicurso, vamos explorar o Capacitor como ponte entre tecnologias web e recursos nativos de dispositivos móveis. Serão abordados os conceitos principais e exemplos práticos para o desenvolvimento de aplicações híbridas com foco em produtividade e compatibilidade entre plataformas.",
    typeEvent: "Course",
    classification: "Intermediary",
    status: "Available",
  },*/
  {
    name: "Criando um chat de mensagens com React, TypeScript e WebSocket",
    image: LauraLuchiari,
    imageDescription: "Laura Luchiari",
    bio: "Laura Luchiari é uma desenvolvedora front-end formada em 2024 no curso de ADS pelo IFSP São Carlos. Além de gostar de estudar e implementar aplicações agradáveis e focadas na experiência do usuário, seus hobbies incluem desenhar, pintar, ler e jogar nas horas vagas.",
    author: "Laura Luchiari",
    date: "09/10",
    time: "14h00 - 17h30",
    link: "",
    vacancies: 20,
    location: "IFSP - C107",
    description:
      "Neste minicurso, vamos desenvolver juntos uma aplicação de chat em tempo real usando React com TypeScript e WebSocket. O back-end já estará pronto, então o foco será na construção do front-end: implementação da interface, conexão e troca de mensagens entre usuários. Além disso, vamos abordar boas práticas de organização de código, assim como dicas e pontos importantes para quem deseja se aprimorar no desenvolvimento do dia a dia.",
    typeEvent: "Course",
    classification: "Intermediary",
    status: "Available",
  },
  
];

export default programmingContent;
