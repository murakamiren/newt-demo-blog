import { FC } from "react";
import { Article } from "../../types";
import { ArticleCard } from "../article_card";
import { ArticleList } from "../article_list";
import { HeadArticle } from "../head_article";

type Props = {
	articles: Article[];
};

export const ArticleFeed: FC<Props> = ({ articles }) => {
	const firstArticle = articles[0];
	const others = articles.filter((_articles, index) => index !== 0);

	return (
		<>
			<h2 className="text-4xl text-zinc-500">articles.</h2>
			<div className="mb-32 mt-16">
				<HeadArticle key={firstArticle._id} article={firstArticle} />
			</div>
			<ArticleList articles={others} />
		</>
	);
};
