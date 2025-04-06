import Image from "next/image";

export default function CategoryItem({ title, time, level, author }) {
  return (
    <div
      className="w-full max-w-xs mx-auto flex flex-col items-center border border-slate-300 
        rounded-2xl p-4 shadow-md bg-white transition hover:scale-105 hover:shadow-xl"
    >
      <Image src="/globe.svg" width={50} height={50} alt="Category Icon" />
      <div className="flex flex-col items-center gap-1 mt-4 text-center">
        <h2 className="font-bold text-lg text-slate-800">{title}</h2>
        <p className="text-sm text-slate-600">⏱ Duration: {time}</p>
        <p className="text-sm text-slate-600">📘 Level: {level}</p>
        <p className="text-sm text-slate-600">✍️ Author: {author}</p>
      </div>
    </div>
  );
}