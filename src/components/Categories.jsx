import CategoryItem from "./common/CategoryItem";
import React from "react";

export default function Categories({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center">
      {data.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}
