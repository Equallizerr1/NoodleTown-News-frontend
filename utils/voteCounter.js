import { vote } from "./api";

export const voteCounter = (id, symbol) => {
	const voteData = {
		inc_votes: `${symbol}1`,
	};
	symbol === "+"
		? vote(id, voteData).then((res) => {
				console.log(symbol);
				console.log(res);
				return res;
		  })
		: vote(id, voteData).then((res) => {
				console.log(symbol);
				console.log(res);
				return res;
		  });
};