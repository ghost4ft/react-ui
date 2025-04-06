import CategoryItem from "./common/CategoryItem";
import React from "react";

export default function Categories({ data }) {
  return (
    <div className="w-full px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}