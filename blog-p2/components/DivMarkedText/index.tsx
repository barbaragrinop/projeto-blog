type PropsBookMark = {
  texto: any;
};

export function TextBookMark({ texto }: PropsBookMark) {
  return (
    <div className="flex flex-row relative p-3 bg-zinc-200 my-4">
      <div className="absolute top-0 left-0 bg-[#27C080] w-2 h-full" />
      <div className="pl-3 text-xl">{texto}</div>
    </div>
  );
}
