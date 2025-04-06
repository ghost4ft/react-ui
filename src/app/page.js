"use client";

import { useCallback } from "react";
import Search from "@/components/Search";
import Categories from "@/components/Categories";
import Api from "@/utils/db";
import useStorage from "@/hooks/useStorage";

export default function Home() {
  const db = Api;
  const [search, setSearch] = useStorage("search", "");

  const onListener = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  const filteredData = db.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 flex flex-col min-h-screen items-center gap-8 py-6">
      <Search onSearch={onListener} lastSearch={search} />
      {filteredData.length === 0 ? (
        <p className="text-slate-500 text-center">Nothing to show😕</p>
      ) : (
        <Categories data={filteredData} />
      )}
    </div>
  );
}