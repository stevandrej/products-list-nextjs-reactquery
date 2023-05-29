"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductsLimited } from "./services/useGetProductsLimited";
import Card from "src/components/molecules/Card";

export default function ProductsList() {
	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ["products-limited"],
		queryFn: () => getProductsLimited(),
	});

	return (
		<div className="grid gap-4 grid-cols-fluid">
			{error ? (
				<p>Oh no, there was an error</p>
			) : isLoading || isFetching ? (
				<p>Loading...</p>
			) : data ? (
				data.map((item: any) => (
					<Card
						key={item.id}
						description={item.description}
						image={item.image}
						title={item.title}
					/>
				))
			) : null}
		</div>
	);
}
