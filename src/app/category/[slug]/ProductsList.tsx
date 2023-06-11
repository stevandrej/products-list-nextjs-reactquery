"use client";

import useGetInCategory from "@/services/useGetInCategory";
import Spinner from "src/components/atoms/Spinner";
import Card from "src/components/molecules/Card";

export default function ProductsList({ category }: { category: string }) {
	const {
		data: products,
		isLoading,
		isFetching,
		error,
	} = useGetInCategory(category);

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
						linkToText="View"
						linkTo={item.id.toString()}
						truncate
					/>
				))
			) : null}
		</div>
	);
}
