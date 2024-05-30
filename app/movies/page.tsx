"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchNowPlayingMovies } from "../_utils/getMovies";
import Link from "next/link";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchNowPlayingMovies(1);
        setMovies(movies);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    getMovies();
  }, []);

  return (
    <main className="flex min-h-screen bg-primary text-bg flex-col items-center justify-between p-24">
      <section className="my-20 px-24">
        <h2 className="text-3xl mb-10 text-center font-bold mx-auto">
          Movies Sedang Tayang
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
