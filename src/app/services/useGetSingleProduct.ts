import { Product } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";
import httpClient from "src/config/httpClient";

export async function getSingleProduct(id: string) {
	const res = await httpClient(`/products/${id}`);
	const data = (await res.data) as Product;
	return data;
}

export default function useGetSingleProduct(id: string) {
	return useQuery({
		queryKey: ["product", id],
		queryFn: () => getSingleProduct(id),
	});
}
