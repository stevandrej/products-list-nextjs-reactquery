import { useQuery } from "@tanstack/react-query";
import httpClient from "src/config/httpClient";

export async function getInCategory(category: string) {
	const res = await httpClient(`/products/category/${category}`);
	const data = await res.data;
	return data;
}

export default function useGetInCategory(category: string) {
	return useQuery({
		queryKey: ["products", category],
		queryFn: () => getInCategory(category),
	});
}
