import Image from "next/image";

interface CardProps {
	image: string;
	badge?: string;
	title: string;
	description: string;
	action?: () => void;
	actionText?: string;
}

export default function Card({
	description,
	image,
	title,
	action,
	actionText,
	badge,
}: CardProps) {
	return (
		<div className="card min-w-96 bg-base-100 shadow-xl">
			<figure>
				<Image
					src={image}
					alt={title}
					width={300}
					height={300}
					className="w-full h-64 object-contain"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					{badge && (
						<div className="badge badge-secondary">{badge}</div>
					)}
				</h2>
				<p>{description}</p>
				<div className="card-actions">
					{actionText && (
						<button
							className="btn btn-primary"
							onClick={() => {
								return;
							}}
						>
							{actionText}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
