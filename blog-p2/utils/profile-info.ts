import { PropsCardCuriosidades } from "components/Card";
import Sobral from "/public/images/sobral.svg";

export type PropsProfileCard = {
  nome: string;
  image: any;
  description: {
    local: string;
    job: string;
    registered: string;
    socialmedia: {
      in: string;
      git: string;
    };
  };
};

export const ProfileInfo: PropsProfileCard = {
  nome: "Gabriel Sobral",
  image: Sobral,
  description: {
    job: "Senior Software Engineer Developer",
    local: "São Paulo - Brazil",
    registered: "27 de jun. de 2021",
    socialmedia: {
      git: "https://www.github.com/",
      in: "https://www.linkedin.com/in/gabriel-sobral-programmer/",
    },
  },
};
