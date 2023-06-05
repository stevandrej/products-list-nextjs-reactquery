import { dehydrate } from "@tanstack/react-query";
import getQueryClient from "./utils/getQueryClient";
import Hydrate from "./utils/hydrate.client";
import ProductsList from "./ProductsList";
import { getAllProducts } from "./services/useGetAllProducts";

const TOTAL_PRODUCTS = 12;

export default async function Home() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["products"], () =>
		getAllProducts(TOTAL_PRODUCTS)
	);
	const dehydratedState = dehydrate(queryClient);

	return (
		<Hydrate state={dehydratedState}>
			<ProductsList />
		</Hydrate>
	);
}
