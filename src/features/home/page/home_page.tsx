import { FC } from "react";
import { getArticles } from "../../article/api/getArticle";
import { ArticleFeed } from "../../article/components/article_feed";

export const HomePage: FC = async () => {
	const articles = await getArticles();
	console.log(articles);

	return (
		<main>
			<div className="px-16 py-16">
				<ArticleFeed articles={articles} />
			</div>
		</main>
	);
};
