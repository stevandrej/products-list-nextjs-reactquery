import { getAllProducts } from "@/services/useGetAllProducts";
import { getSingleProduct } from "@/services/useGetSingleProduct";
import getQueryClient from "@/utils/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import SingleProduct from "./SingleProduct";

export default async function Product({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["product", params.slug], () =>
		getSingleProduct(params.slug)
	);

	const dehydratedState = dehydrate(queryClient);

	return (
		<Hydrate state={dehydratedState}>
			<SingleProduct id={params.slug} />
		</Hydrate>
	);
}

export async function generateStaticParams() {
	const products = await getAllProducts();
	return products.map((product) => ({
		slug: product.id.toString(),
	}));
}
