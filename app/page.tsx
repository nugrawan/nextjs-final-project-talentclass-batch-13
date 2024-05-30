"use client";
import Image from "next/image";
import { fetchPopularMovies } from "./_utils/getMovies";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchPopularMovies(1);
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex items-center gap-5">
        <div className="w-full p-10">
          <Image
            className="w-auto h-auto"
            width={380}
            height={180}
            src="https://img.freepik.com/free-vector/home-cinema-concept-illustration_114360-4890.jpg?t=st=1717064120~exp=1717067720~hmac=463a15a6902c7015b3b21472a65cf2db494fcbde83a48b55c49740aea92765a3&w=740"
            alt="hero"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-5xl">
            Lihat Daftar <span className="text-secondary">Movies</span> Favorite
            Dengan <span className="text-secondary">Gratis</span>
          </h1>
          <p className="text-lg my-3 w-[90%] font-semibold">
            T13 Menyediakan list movies terpopuler dengan detail lengkap.
          </p>
          <div className="flex gap-3 my-10">
            <Link
              href="/movies"
              className="bg-primary text-lg px-5 py-2 rounded-lg font-semibold text-bg"
            >
              List Movies
            </Link>
          </div>
        </div>
      </section>
      <section className="my-20 px-24">
        <h2 className="text-2xl mb-10 text-center font-semibold mx-auto">
          Movies Terpopular
        </h2>
        <div className="grid grid-cols-5">
          {movies.map((movie: any) => (
            <Link href={`/movies/${movie.id}`} key={movie.id} className="p-5">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={200}
              />
              <h1 className="text-lg font-semibold">{movie.title}</h1>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
