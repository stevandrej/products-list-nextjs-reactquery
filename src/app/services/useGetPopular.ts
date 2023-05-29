import { useQuery } from "@tanstack/react-query";
import httpClient from "src/config/httpClient";

export async function getPopular() {
	const res = await httpClient.get("/movie/popular");
	const popularMovies = await res.data;
	return popularMovies;
}

export default function useGetPopular() {
	return useQuery({
		queryKey: ["popular"],
		queryFn: () => getPopular(),
	});
}
