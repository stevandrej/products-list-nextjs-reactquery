import { Product } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";
import httpClient from "src/config/httpClient";

export async function getAllProducts(limit?: number) {
	const res = await httpClient("/products", {
		params: {
			limit: limit,
		},
	});
	const products: Product[] = await res.data;
	return products;
}

export default function useGetAllProducts(limit?: number) {
	return useQuery({
		queryKey: ["products"],
		queryFn: () => getAllProducts(limit),
	});
}
