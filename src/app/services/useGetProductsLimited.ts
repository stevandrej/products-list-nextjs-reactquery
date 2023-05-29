import { useQuery } from "@tanstack/react-query";
import httpClient from "src/config/httpClient";

export async function getProductsLimited() {
	const res = await httpClient.get("/products", {
		params: {
			limit: 5,
		},
	});

	const productsLimited = await res.data;
	return productsLimited;
}

export default function useGetProductsLimited() {
	return useQuery({
		queryKey: ["products-limited"],
		queryFn: () => getProductsLimited(),
	});
}
