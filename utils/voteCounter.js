import { vote } from "./api";

export const voteCounter = (id, symbol, isClicked) => {
	const voteData = {
		inc_votes: `${symbol}1`,
	};
	vote(id, voteData).then((res) => {
		return res;
	});
};
