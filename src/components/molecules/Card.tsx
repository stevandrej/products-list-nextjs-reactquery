import Image from "next/image";

interface CardProps {
	image: string;
	badge?: string;
	title: string;
	description: string;
	action?: () => void;
	actionText?: string;
	truncate?: boolean;
}

export default function Card({
	description,
	image,
	title,
	action,
	actionText,
	truncate,
}: CardProps) {
	return (
		<div className="card max-w-96 bg-base-100 shadow-xl">
			<figure>
				<Image
					src={image}
					alt={title}
					width={450}
					height={300}
					className="w-full h-80 object-fill"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className={`${truncate && "truncate"}`}>{description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary" onClick={action}>
						{actionText}
					</button>
				</div>
			</div>
		</div>
	);
}
