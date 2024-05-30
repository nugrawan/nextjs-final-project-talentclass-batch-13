import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="p-5 border-b-2 border-white w-full fixed bg-primary text-bg">
      <nav className="w-full flex justify-between px-20">
        <h1 className="text-2xl font-bold">
          <span className="text-secondary">T13</span>Movie
        </h1>
        <ul className="text-base items-center justify-around flex gap-5">
          <li className="hover:text-secondary">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-secondary">
            <Link href={"movies"}>Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
