import { upVote, downVote } from "./api";

export const voteCounter = (id, symbol) => {
	const upOrDown = symbol === "+" ? true : false;
	upOrDown
		? upVote(id).then((res) => {
				console.log(res);
				return res;
		  })
		: downVote(id).then((res) => {
				console.log(res);
				return res;
		  });
};
