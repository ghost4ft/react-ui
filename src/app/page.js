"use client"
import Search from "@/components/Search";
import Categories from "@/components/Categories";
import Api from "@/utils/db";
import { useEffect, useState } from "react";

export default function Home() {
  const db = Api;
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSearch = localStorage.getItem("search");
      if (savedSearch) {
        setSearch(savedSearch);
      }
    }
  }, []);

  // Save search to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("search", search);
    }
  }, [search]);

  const onListener = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = db.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 flex flex-col h-screen items-center justify-around">
      <Search onSearch={onListener} lastSearch={search} />
      <Categories key={db.id} data={filteredData} />
    </div>
  );
}