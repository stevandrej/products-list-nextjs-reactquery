import { dehydrate } from "@tanstack/react-query";
import { getProductsLimited } from "./services/useGetProductsLimited";
import getQueryClient from "./utils/getQueryClient";
import Hydrate from "./utils/hydrate.client";
import ProductsList from "./ProductsList";

export default async function Home() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["products-limited"], getProductsLimited);
	const dehydratedState = dehydrate(queryClient);

	return (
		<Hydrate state={dehydratedState}>
			<div className="container m-auto max-w-6xl">
				<h1>WEB SHOP</h1>
				<ProductsList />
			</div>
		</Hydrate>
	);
}
