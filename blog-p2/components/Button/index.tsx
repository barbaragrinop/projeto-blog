import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, ...props }: Props) {
  return (
    <button
      className="px-5 py-1 my-1 text-white bg-transparent border-2 rounded-lg flex items-center"
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonBlue({ children, ...props }: Props) {
  return (
    <button
      className="px-5 py-1 my-1 text-white flex text-center bg-[#4463D0] border-2 rounded-lg items-center justify-center w-[252px] h-[37px] "
      {...props}
    >
      {children}
    </button>
  );
}
