"use client";

export default function Search({ onSearch, lastSearch }) {
  return (
    <div className="container mx-auto my-4 flex items-center justify-center">
      <input
        type="text"
        placeholder="Search..."
        value={lastSearch}
        onChange={onSearch}
        className="w-full max-w-md border border-slate-400 rounded-2xl py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
      />
    </div>
  );
}