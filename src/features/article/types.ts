type Sys = {
	createdAt: string;
	updatedAt: string;
	raw: {
		createdAt: string;
		updatedAt: string;
		firstPublishedAt: string;
		publishedAt: string;
	};
};

type Author = {
	_id: string;
	_sys: Sys;
	fullName: string;
	slug: string;
	biography: string;
	profileImage: string | null;
};

type CoverImage = {
	_id: string;
	altText: string;
	description: string;
	fileName: string;
	fileSize: number;
	fileType: string;
	height: number;
	metadata: unknown;
	src: string;
	title: "";
	width: 1000;
};

export type Article = {
	_id: string;
	_sys: Sys;
	title: string;
	slug: string;
	body: string;
	author: Author;
	coverImage: CoverImage;
};
