import { FC } from "react";
import { AppNextImage } from "../../common/responsive_image";

export const NavigationHeader: FC = () => {
	return (
		<header>
			<div className="flex items-end py-8 px-16 border-b">
				<AppNextImage
					src="/assets/logo/fenrir-logo.png"
					alt="logo"
					className="mr-2 w-9 h-9"
				/>
				<h1 className="text text-zinc-600">
					tech<span className="font-semibold">lab</span>.
				</h1>
			</div>
		</header>
	);
};
