"use client";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="flex justify-center py-3 m-auto text-lg text-left">
      <input
        type="text"
        className="rounded  mr-3 w-74 p-2 w-[450px]"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="py-2 text-white bg-red-600 rounded px-9"
        onClick={() => {
          if (location === "banana") return;
          router.push("/search");
        }}
      >
        Let's go
      </button>
    </div>
  );
};
export default SearchBar;
