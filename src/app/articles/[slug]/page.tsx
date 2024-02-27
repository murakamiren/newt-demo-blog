import {
	getArticleBySlug,
	getArticles,
} from "@/src/features/article/api/getArticle";
import { ArticlePage } from "@/src/features/article/page/article_page";
import { Metadata } from "next";

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	const articles = await getArticles();
	return articles.map((article) => ({
		slug: article.slug,
	}));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = params;
	const article = await getArticleBySlug(slug);

	return {
		title: article?.title,
		description: "投稿詳細ページです",
	};
}

export default async function Articles({ params }: Props) {
	const { slug } = params;
	const article = await getArticleBySlug(slug);
	if (!article) return;

	return <ArticlePage article={article} />;
}
