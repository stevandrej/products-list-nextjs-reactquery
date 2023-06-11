import Image from "next/image";
import Link from "next/link";

interface CardProps {
	image: string;
	badge?: string;
	title: string;
	description: string;
	linkTo?: string;
	linkToText?: string;
	truncate?: boolean;
}

export default function Card({
	description,
	image,
	title,
	linkTo = "#",
	linkToText,
	truncate,
}: CardProps) {
	const LinkToProduct = linkTo != "#" ? `/products/${linkTo}` : linkTo;

	return (
		<div className="card max-w-96 bg-base-100 shadow-xl">
			<figure className="bg-white p-4">
				<Image
					src={image}
					alt={title}
					width={450}
					height={300}
					className="w-full h-80 object-contain"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className={`${truncate && "truncate"}`}>{description}</p>
				<div className="card-actions justify-end">
					<Link className="btn btn-secondary" href={LinkToProduct}>
						{linkToText}
					</Link>
				</div>
			</div>
		</div>
	);
}
