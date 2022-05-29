import { Button } from "components/Button";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/icons/logo.svg";
import NewAccount from "/public/icons/add-user.svg";
import LogIn from "/public/icons/sign-in.svg";

export function Header() {
  return (
    <header className="bg-[#0F0F0F] px-10 py-3 grid grid-cols-12 gap-2 text-sm">
      <div className="col-span-6 flex items-center">
        <Image src={Logo} alt="Logo do Site" />
      </div>
      <div className="col-span-6 flex justify-end ">
        <div className=" flex items-center mr-6  h-full text-white ">
          <Link href={""}>Entre em contato</Link>
        </div>
        <div className="px-4 flex items-center h-full text-white">
          <Button>
            <div className="flex gap-3">
              <Image src={NewAccount} alt="Logo do Site" width={20} />
              <span>Criar nova conta</span>
            </div>
          </Button>
        </div>
        <div className="px-4 flex items-center h-full text-white">
          <Button>
            <div className="flex gap-3">
              <Image src={LogIn} alt="Logo do Site" width={20} />
              <span>Entrar</span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
