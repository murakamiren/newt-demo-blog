import { cn } from "@/src/lib/utils/style";
import { ClassValue } from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";

type Props = {
	src: string | StaticImport;
	alt: string;
	className?: ClassValue;
	objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
};

export const AppNextImage: FC<Props> = ({ src, alt, className, objectFit }) => {
	return (
		<div className={cn("relative", className)}>
			<Image
				style={{ objectFit: objectFit ?? "contain" }}
				src={src}
				alt={alt}
				fill
			/>
		</div>
	);
};
