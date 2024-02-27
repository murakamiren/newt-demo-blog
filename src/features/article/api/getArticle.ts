import { newtClient } from "@/src/lib/newt";
import { cache } from "react";
import "server-only";
import { Article } from "../types";

const selectValue = [
	"_id",
	"_sys",
	"title",
	"slug",
	"body",
	"coverImage",
	"author",
];

export const getArticles = cache(async () => {
	const { items } = await newtClient.getContents<Article>({
		appUid: "blog",
		modelUid: "article",
		query: {
			select: selectValue,
		},
	});
	return items;
});

export const getArticleBySlug = cache(async (slug: string) => {
	const article = await newtClient.getFirstContent<Article>({
		appUid: "blog",
		modelUid: "article",
		query: {
			slug,
			select: selectValue,
		},
	});
	return article;
});
