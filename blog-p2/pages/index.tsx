import {
  CardCuriosidades,
  CardPostsProfile,
  CardProfile,
} from "components/Card";
import { TextBookMark } from "components/DivMarkedText";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Invite } from "utils/invite";
import { Header } from "../components/Header";
import IconHome from "/public/icons/home.svg";
import SmartHome from "/public/images/imagem-iot.svg";
import { ProfileInfo as PI } from "utils/profile-info";
import { PostsUserOn } from "utils/posts-user-on";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="bg-banner h-[300px] flex flex-col justify-center gap-5 pl-28  text-white tracking-wider">
        <span className="text-5xl ">Internet das Coisas</span>
        <span className="text-3xl font-extralight">É como nós pensamos?</span>
      </div>
      <div className="bg-circles bg-cover bg-repeat-y min-h-screen text-[#373737]">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 flex py-1 gap-3 mx-12 text-sm">
            <Link href={""}>
              <Image src={IconHome} className="cursor-pointer" />
            </Link>
            <span>|</span>
            <Link href={""}>Artigos</Link>
            <span>|</span>
            <Link href={""}>Internet das Coisas</Link>
          </div>
          <div className="col-span-12 mx-12 rounded-lg ">
            <div className="grid grid-cols-12 gap-4 py-4 px-12 bg-[#F1F1F1]">
              <div className="col-span-12 flex gap-7 text-[#373737] text-xs pb-2 pt-2">
                <span>5min de leitura</span>
                <span>19/05/2022 - às 19:32</span>
              </div>
              <div className="col-span-8">
                <div className="break-words flex flex-col gap-7">
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi debitis corporis nobis voluptatibus veritatis dolorem
                    impedit quos non hic minus minima autem velit vero culpa,
                    quo eos? Ipsam sit nulla modi numquam animi minima quam
                    possimus culpa quibusdam aliquid, provident, expedita
                    quaerat. Unde voluptates dolorum corrupti excepturi
                    architecto optio quos repellendus possimus! Natus illum ea
                    hic possimus, quas numquam deserunt dolor obcaecati, quae in
                    molestias soluta alias quaerat culpa magni, asperiores eius
                    id suscipit. Praesentium, quis? Rerum officiis iure dicta
                    eaque eius natus iusto, nam labore dolore necessitatibus,
                    eos cupiditate!
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi debitis corporis nobis voluptatibus veritatis dolorem
                    impedit quos non hic minus minima autem velit vero culpa,
                    quo eos? Ipsam sit nulla modi numquam animi minima quam
                    possimus culpa quibusdam aliquid, provident, expedita
                    quaerat. Unde voluptates dolorum corrupti excepturi
                    architecto optio quos repellendus possimus! Natus illum ea
                    hic possimus, quas numquam deserunt dolor obcaecati, quae in
                    molestias soluta alias quaerat culpa magni, asperiores eius
                    id suscipit. Praesentium, quis? Rerum officiis iure dicta
                    eaque eius natus iusto, nam labore dolore necessitatibus,
                    eos cupiditate!
                  </span>
                </div>
                <TextBookMark texto={"Aqui vai um texto color sit amet"} />
                <div className="break-words flex flex-col gap-7">
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi debitis corporis nobis voluptatibus veritatis dolorem
                    impedit quos non hic minus minima autem velit vero culpa,
                    quo eos? Ipsam sit nulla modi numquam animi minima quam
                    possimus culpa quibusdam aliquid, provident, expedita
                    quaerat. Unde voluptates dolorum corrupti excepturi
                    architecto optio quos repellendus possimus! Natus illum ea
                    hic possimus, quas numquam deserunt dolor obcaecati, quae in
                    molestias soluta alias quaerat culpa magni, asperiores eius
                    id suscipit. Praesentium, quis? Rerum officiis iure dicta
                    eaque eius natus iusto, nam labore dolore necessitatibus,
                    eos cupiditate!
                  </span>
                </div>
                <div className="flex justify-center py-4">
                  <Image src={SmartHome} alt={"Foto de uma casa inteligente"} />
                </div>
                <TextBookMark texto={"Aqui vai um texto color sit amet"} />
                <div className="break-words flex flex-col gap-7">
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Animi debitis corporis nobis voluptatibus veritatis dolorem
                    impedit quos non hic minus minima autem velit vero culpa,
                    quo eos? Ipsam sit nulla modi numquam animi minima quam
                    possimus culpa quibusdam aliquid, provident, expedita
                    quaerat. Unde voluptates dolorum corrupti excepturi
                    architecto optio quos repellendus possimus! Natus illum ea
                    hic possimus, quas numquam deserunt dolor obcaecati, quae in
                    molestias soluta alias quaerat culpa magni, asperiores eius
                    id suscipit. Praesentium, quis? Rerum officiis iure dicta
                    eaque eius natus iusto, nam labore dolore necessitatibus,
                    eos cupiditate!
                  </span>
                </div>
                <TextBookMark texto={"Talvez você goste"} />
                <div className="py-3 flex flex-row justify-around gap-10 mb-10 ">
                  {Invite.map(({ description, imagem, title, url }, index) => {
                    return (
                      <CardCuriosidades
                        description={description}
                        image={imagem}
                        title={title}
                        url={url}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="col-span-4 ">
                <div className="mb-4">
                  <CardProfile />
                </div>
                <div className="mb-4">
                  <div className="card w-[297px] h-[350px] shadow-lg shadow-black/20 rounded-lg ">
                    <div className="bg-[#27C080] w-full flex items-center px-3 h-[51px] rounded-tr-lg rounded-tl-lg">
                      <span className="text-white font-medium text-lg tracking-tight">
                        Mais posts de {PI.nome}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 mt-2">
                      {PostsUserOn.map(({ title, description, url }, index) => (
                        <CardPostsProfile
                          description={description}
                          url={url}
                          title={title}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-10 w-full" />
      <div className="bg-zinc-800 h-10 w-full" />
      <footer className="bg-zinc-500 flex items-center justify-center p-2 text-white text-sm">
        © Todos os direitos reservados
      </footer>
    </>
  );
};

export default Home;
