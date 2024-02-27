import { FC } from "react";
import { Article } from "../../types";
import { ArticleCard } from "../article_card";

type Props = {
	articles: Article[];
};

export const ArticleList: FC<Props> = ({ articles }) => {
	return (
		<ul className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
			{articles.map((article) => (
				<li key={article._id}>
					<ArticleCard article={article} />
				</li>
			))}
		</ul>
	);
};
