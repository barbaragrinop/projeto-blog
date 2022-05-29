import Image from "next/image";
import Link from "next/link";
import { ButtonBlue } from "components/Button";
import { ProfileInfo as PI } from "utils/profile-info";
import Linkedin from "/public/icons/in.svg";
import Git from "/public/icons/git.svg";

export type PropsCardCuriosidades = {
  image: any;
  title: string;
  description: string;
  url: string;
};

export function Card() {
  return <></>;
}

export function CardCuriosidades({
  description,
  image,
  title,
  url,
}: PropsCardCuriosidades) {
  return (
    <Link href={url}>
      <div className="card rounded-lg  w-[219px] h-[243px] hover:h-auto hover:scale-[1.1] hover:pb-2 duration-300 transition ease-in-out relative  overflow-hidden shadow-lg shadow-black/20 pb-2">
        <Image src={image} alt={"Imagem de ilustração"} />
        <div className="flex flex-col px-2 ">
          <span className="break-words py-1 text-[14px] font-medium">
            {title}
          </span>
          <span className=" break-words text-[12px]">{description}</span>
        </div>
        <span></span>
      </div>
    </Link>
  );
}

export function CardProfile() {
  return (
    <div className="card rounded-lg bg-[#D9D9D9] w-[297px] h-auto pb-4 relative shadow-lg overflow-hidden shadow-black/20 ">
      <div className="bg-[#121320] w-full h-[100px] flex justify-center ">
        <div className="mt-8 ">
          <Image src={PI.image} alt={"Imagem de alguém"} />
        </div>
      </div>
      <div className="flex flex-col px-2 mt-14 items-center justify-center">
        <span className="break-words py-1 text-[14px] font-medium">
          {PI.nome}
        </span>
        <ButtonBlue>Seguir</ButtonBlue>
      </div>
      <div className="flex flex-col gap-2 justify-start px-6">
        <div className="flex flex-col justify-start text-sm">
          <span className="font-semibold -mb-1">Localização</span>
          <span>{PI.description.local}</span>
        </div>
        <div className="flex flex-col justify-start text-sm">
          <span className="font-semibold -mb-1">Trabalho</span>
          <span>{PI.description.job}</span>
        </div>
        <div className="flex flex-col justify-start text-sm">
          <span className="font-semibold -mb-1">Registrado em</span>
          <span>{PI.description.registered}</span>
        </div>
        <div className="flex flex-col justify-start text-sm">
          <span className="font-semibold -mb-1">Redes Sociais</span>

          <div className="flex gap-2 mt-1">
            <Link href={PI.description.socialmedia.git}>
              <Image src={Git} alt="Icone Github" className="cursor-pointer" />
            </Link>
            <Link href={PI.description.socialmedia.in}>
              <Image
                src={Linkedin}
                alt="Icone Linkedin"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      <span></span>
    </div>
  );
}

export type PropsPostsProfile = {
  title: string;
  description: string;
  url: string;
};

export function CardPostsProfile({
  title,
  description,
  url,
}: PropsPostsProfile) {
  return (
    <div className="card p-3 overflow-hidden rounded-lg w-[251.07px] h-[130px] shadow-lg shadow-black/20">
      <Link href={url}>
        <div className="flex flex-col pb-2 text-break">
          <span className="font-medium">{title}</span>
          <span className="text-sm">{description}</span>
        </div>
      </Link>
    </div>
  );
}
