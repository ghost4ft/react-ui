import Image from "next/image";
import React from "react";

export default function CategoryItem({ title, time, level, author }) {
  return (
    <div
      className="size-80 flex flex-col items-center border border-slate-400 
         rounded-2xl py-2 px-4 m-4"
    >
      <Image src={"globe.svg"} width={50} height={50} alt={title} />
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-bold">{title}</h2>
        <p> duration : {time}</p>
        <p>level : {level}</p>
        <p>author : {author}</p>
      </div>
    </div>
  );
}
