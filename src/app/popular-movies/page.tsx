import { getPopular } from "@/services/useGetPopular";
import getQueryClient from "@/utils/getQueryClient";
import Hydrate from "@/utils/hydrate.client";
import { dehydrate } from "@tanstack/react-query";
import ListMovies from "./ListMovies";

export default async function PopularMovies() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["popular"], getPopular);
	const dehydratedState = dehydrate(queryClient);

	return (
		<Hydrate state={dehydratedState}>
			<h1>Popular movies</h1>
			<ListMovies />
		</Hydrate>
	);
}
