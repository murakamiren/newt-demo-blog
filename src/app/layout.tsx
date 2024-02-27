import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Footer } from "../components/layout/footer";
import { NavigationHeader } from "../components/layout/navigation";
import { cn } from "../lib/utils/style";
import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "---font-sans" });

export const metadata: Metadata = {
	title: "Fenrir tech blog",
	description: "フェンリルの様々な技術情報を発信。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<NavigationHeader />
				{children}
				<Footer />
			</body>
		</html>
	);
}
