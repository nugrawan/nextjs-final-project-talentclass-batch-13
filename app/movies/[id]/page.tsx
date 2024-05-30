"use client";

import { getMovieById } from "@/app/_utils/getMovies";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    title: "",
    original_title: "",
    overview: "",
    tagline: "",
    poster_path: "",
    genres: [],
    budget: 0,
    status: "",
    popularity: 0,
    original_language: "",
    revenue: 0,
  });

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovieById(Number(id));
      setMovie(movieData);
    };

    fetchMovie();
  }, [id]);

  return (
    <main className="w-full p-24 min-h-screen">
      {movie && (
        <section className="my-20 flex gap-10">
          <Image
            className="rounded-md"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={200}
          />
          <div>
            <h1 className="font-semibold text-3xl mx-auto text-center">
              {movie.title}
            </h1>
            <h2 className="font-semibold text-secondary text-md mx-auto text-center">
              {movie.tagline}
            </h2>
            <div className="flex flex-col gap-5 p-10">
              <p>
                <span className="font-semibold">Original Language: </span>
                {movie.original_language}
              </p>
              <p>
                <span className="font-semibold">Pendapatan: </span>
                {movie.revenue}
              </p>
              <p>
                <span className="font-semibold">Budget: </span>
                {movie.budget}
              </p>
              <p>
                <span className="font-semibold">Popularitas: </span>
                {movie.popularity}
              </p>

              <p>
                <span className="font-semibold">Status: </span>
                {movie.status}
              </p>
              <div className="flex">
                <span className="font-semibold">Genres: </span>
                {movie.genres.map((genre: { id: number; name: string }) => (
                  <p key={genre.id}>
                    <span className="mx-2">{genre.name},</span>
                  </p>
                ))}
              </div>
              <p>
                <span className="font-semibold">Overview: </span>
                {movie.overview}
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
