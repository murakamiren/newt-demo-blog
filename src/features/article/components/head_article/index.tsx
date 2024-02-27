import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/src/components/ui/avatar";
import { Separator } from "@/src/components/ui/separator";
import { dateUtils } from "@/src/lib/utils/date";
import Link from "next/link";
import { FC } from "react";
import { Article } from "../../types";

type Props = {
	article: Article;
};

export const HeadArticle: FC<Props> = ({ article }) => {
	const { title, coverImage, _sys, author, slug } = article;
	return (
		<article>
			<Link href={`articles/${slug}`}>
				<div className="w-full px-40">
					<div className="w-full max-h-[560px] overflow-hidden relative">
						<img
							className="w-full object-cover object-center transition duration-500 ease-in-out hover:scale-105"
							src={coverImage.src}
							alt={coverImage.altText ?? "cover image"}
						/>
					</div>
					<div>
						<h3 className="text-xl text-zinc-600 mt-4">{title}</h3>
						<Separator className="w-12 my-2" />
						<p className="text-xs text-zinc-400">
							{dateUtils.articleDateFormat(_sys.createdAt)}
						</p>
					</div>
					<div className="mt-8 flex items-center gap-x-2">
						<Avatar>
							<AvatarImage src={author.profileImage ?? undefined} />
							<AvatarFallback>{author.fullName.substring(0, 2)}</AvatarFallback>
						</Avatar>
						<p className="text-zinc-600  text-sm">{author.fullName}</p>
					</div>
				</div>
			</Link>
		</article>
	);
};
