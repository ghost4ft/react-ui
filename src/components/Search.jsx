"use client";
export default function Search({ onSearch, lastSearch }) {
  return (
    <div className="container mx-auto my-4 flex flex-row items-center justify-center">
      <input
        type="text"
        placeholder="Search..."
        value={lastSearch}
        onChange={(e) => {
          onSearch(e);
        }}
        className="w-200 border border-slate-400 rounded-2xl py-2 px-4"
      />
    </div>
  );
}
