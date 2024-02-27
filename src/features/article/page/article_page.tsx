import { cn } from "@/src/lib/utils/style";
import Link from "next/link";
import { FC } from "react";
import { Article } from "../types";

type Props = {
	article: Article;
};

export const ArticlePage: FC<Props> = ({ article }) => {
	if (!article) return;

	return (
		<main>
			<div className="px-16 mt-16">
				<Link href="/" className="text-zinc-600 text-sm">
					<div className="flex">
						<p className="hover:text-zinc-400 transition duration-500">
							← back to articles
						</p>
					</div>
				</Link>
				<h1 className="font-semibold text-3xl text-zinc-600 mt-2">
					{article.title}
				</h1>
				<div
					className={cn(
						"mt-16 whitespace-pre-wrap",
						"[&>h2]:text-2xl [&>h3]:text-xl text-zinc-600",
					)}
					dangerouslySetInnerHTML={{ __html: article.body }}
				/>
			</div>
		</main>
	);
};
