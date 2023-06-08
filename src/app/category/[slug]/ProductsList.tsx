"use client";

import { getInCategory } from "@/services/useGetInCategory";
import { useQuery } from "@tanstack/react-query";
import Spinner from "src/components/atoms/Spinner";
import Card from "src/components/molecules/Card";

export default function ProductsList({ category }: { category: string }) {
	const {
		data: products,
		isLoading,
		isFetching,
		error,
	} = useQuery({
		queryKey: ["category", category],
		queryFn: () => getInCategory(category),
	});

	return (
		<div className="grid gap-4 grid-cols-fluid">
			{error ? (
				<p>Oh no, there was an error</p>
			) : isLoading || isFetching ? (
				<div className="flex justify-center">
					<Spinner />
				</div>
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
