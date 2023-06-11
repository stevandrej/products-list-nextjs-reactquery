import { getCategories } from "@/services/useGetCategories";
import { getInCategory } from "@/services/useGetInCategory";
import getQueryClient from "@/utils/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import ProductsList from "./ProductsList";

export default async function Category({
	params,
}: {
	params: { slug: string };
}) {
	const slug = params.slug;
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["category", slug], () =>
		getInCategory(slug)
	);

	const dehydratedState = dehydrate(queryClient);

	return (
		<Hydrate state={dehydratedState}>
			<ProductsList category={slug} />
		</Hydrate>
	);
}

export async function generateStaticParams() {
	const categories = await getCategories();
	return categories.map((category) => ({
		slug: category,
	}));
}
