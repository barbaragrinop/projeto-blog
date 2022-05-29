import Menina from "/public/images/menina.svg";
import Codigo from "/public/images/codigo.svg";
import Will from "/public/images/will-smith.svg";

type PropsInvite = {
  imagem: any;
  title: string;
  description: string;
  url: string;
};

export const Invite: PropsInvite[] = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt eos impedit ut assumenda doloremque quam mollitia tempora, ducimus ea, corporis perferendis dolorem ad minima.",
    imagem: Menina,
    title: "qualquer coisa",
    url: "essa aqui mesmo",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt eos impedit ut assumenda doloremque quam mollitia tempora, ducimus ea, corporis perferendis dolorem ad minima.",
    imagem: Codigo,
    title: "qualquer coisa",
    url: "essa aqui mesmo",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt eos impedit ut assumenda doloremque quam mollitia tempora, ducimus ea, corporis perferendis dolorem ad minima.",
    imagem: Will,
    title: "qualquer coisa",
    url: "essa aqui mesmo",
  },
];
