import { ReactNode } from "react";

export default function Layout({ children,isPending }: { children: ReactNode ,isPending:boolean}) {
  if(isPending){
    <div>Loading</div>
  }  
  return (
    <div className="">
      <section className={`bg-slate-300 text-center ${isPending && "bg-red-400"}`}>Music Browse</section>
      <main>{children}</main>
    </div>
  );
}