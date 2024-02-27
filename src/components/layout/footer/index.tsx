import Link from "next/link";
import { FC } from "react";
import { Separator } from "../../ui/separator";

const footerContetnList = [
	{ name: "company.", url: "https://recruit.fenrir-inc.com/" },
	{ name: "services.", url: "https://www.fenrir-inc.com/jp/business/" },
	{ name: "products.", url: "https://www.fenrir-inc.com/jp/product/" },
	{ name: "news.", url: "https://www.fenrir-inc.com/jp/news/" },
	{ name: "recruit.", url: "https://recruit.fenrir-inc.com/" },
];

export const Footer: FC = () => {
	return (
		<footer>
			<div className="w-full border-t mb-16 px-16">
				<div className="flex mt-16">
					<ul className="flex space-x-6">
						{footerContetnList.map((content, i) => (
							<>
								<li key={`${i}-${content}`}>
									<Link
										href={content.url}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-zinc-400 transition duration-500"
									>
										{content.name}
									</Link>
								</li>
								{i !== footerContetnList.length - 1 && (
									<Separator
										key={`${i}-${content}-sep`}
										orientation="vertical"
										className="h-auto"
									/>
								)}
							</>
						))}
					</ul>
				</div>
				<p className="text-xs text-zinc-600 mt-16">
					<small>&#64; 2005-2024 Fenrir Inc.</small>
				</p>
			</div>
		</footer>
	);
};
