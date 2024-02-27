import { format } from "date-fns";

export const dateUtils = {
	articleDateFormat: (rawDate: string): string => {
		const date = new Date(rawDate);
		const formatted = format(date, "yyyy-MM-dd");

		return formatted;
	},
};
