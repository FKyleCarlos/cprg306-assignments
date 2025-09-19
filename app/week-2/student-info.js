import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 sm:items-start font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>Student Name: Kyle Carlos</p>
      <p>GitHub Repo: <Link className="underline" href="https://github.com/FKyleCarlos/cprg306-assignments">Click Here!</Link></p>
    </div>
  );
}
