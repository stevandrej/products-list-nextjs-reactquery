"use client";

import { useQuery } from "@tanstack/react-query";
import Card from "src/components/molecules/Card";
import { getAllProducts } from "./services/useGetAllProducts";

const TOTAL_PRODUCTS = 12;

export default function ProductsList() {
	const {
		data: products,
		isLoading,
		isFetching,
		error,
	} = useQuery({
		queryKey: ["products"],
		queryFn: () => getAllProducts(TOTAL_PRODUCTS),
	});

	return (
		<div className="grid gap-4 grid-cols-fluid">
			{error ? (
				<p>Oh no, there was an error</p>
			) : isLoading || isFetching ? (
				<p>Loading...</p>
			) : products ? (
				products.map((item) => (
					<Card
						key={item.id}
						description={item.description}
						image={item.image}
						title={item.title}
						actionText="Buy Now"
						action={() => {
							return;
						}}
						truncate
					/>
				))
			) : null}
		</div>
	);
}
