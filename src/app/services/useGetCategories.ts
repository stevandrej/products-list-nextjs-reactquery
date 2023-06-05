import { useQuery } from "@tanstack/react-query";
import httpClient from "src/config/httpClient";

export async function getCategories() {
	const res = await httpClient("/products/categories");
	const categories: string[] = await res.data;
	return categories;
}

export default function useGetCategories() {
	return useQuery({
		queryKey: ["categories"],
		queryFn: () => getCategories(),
	});
}
