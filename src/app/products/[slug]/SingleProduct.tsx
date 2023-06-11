"use client";

import useGetSingleProduct from "@/services/useGetSingleProduct";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Spinner from "src/components/atoms/Spinner";

interface SingleProductProps {
	id: string;
}

export default function SingleProduct({ id }: SingleProductProps) {
	const router = useRouter();

	const {
		data: product,
		isLoading,
		isFetching,
		error,
	} = useGetSingleProduct(id);

	return (
		<div>
			<button className="btn btn-neutral btn-sm mb-3" onClick={() => router.back()}>
				Back
			</button>
			{error ? (
				<p>Oh no, there was an error</p>
			) : isLoading || isFetching ? (
				<div className="flex justify-center">
					<Spinner />
				</div>
			) : product ? (
				<div className="flex flex-col gap-5">
					<h1>{product.title}</h1>
					<Image
						priority
						alt={product.title}
						src={product.image}
						width={1024}
						height={400}
						className="w-full h-60 object-contain m-auto"
					/>
					<p>{product.description}</p>
				</div>
			) : null}
		</div>
	);
}
