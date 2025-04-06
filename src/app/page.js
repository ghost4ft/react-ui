"use client"
import Search from "@/components/Search";
import Categories from "@/components/Categories";
import Api from "@/utils/db";
import { useState } from "react";

export default function Home() {
  const db = Api
  const [search, setSearch] = useState("")
  const onListener = (e) => {
    setSearch(e.target.value);
  }
  const filteredData = db.filter((item) =>
    (item.title.toLowerCase().includes(search.toLowerCase()))
  )
  return (
    <div className="container mx-auto px-4 flex flex-col h-screen items-center justify-around">
      <Search onSearch={onListener} />
      <Categories key={db.id} data={filteredData} />
    </div>
  );
}
