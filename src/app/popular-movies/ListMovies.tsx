"use client";
import useGetPopular from "@/services/useGetPopular";

export default function ListMovies() {
	const { data } = useGetPopular();

	return data.results.map((movie: any) => (
		<div key={movie.id}>{movie.title}</div>
	));
}
