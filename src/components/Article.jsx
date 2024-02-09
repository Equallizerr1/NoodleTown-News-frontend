import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById } from "../../utils/api";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ShareIcon from "@mui/icons-material/Share";
import { dateFormatter } from "../../utils/dateFormatter";
import LinearLoading from "./LoadingBar";
import { Comments } from "./Comments";
import { vote } from "../../utils/api";
const bull = "•";

export const Article = () => {
	const { article_id } = useParams();

	const [currentArticle, setArticle] = useState(undefined);
	const [currentVote, setHasVoted] = useState("");
	const [voteCount, setVoteCount] = useState(0);

	useEffect(() => {
		getArticleById(article_id).then(({ article }) => {
			const respArt = article[0]; // <-- here I just want the article object, not an array with one item
			setArticle(respArt);
			setVoteCount(respArt.votes);
		});
	}, [article_id]);

	// call this function when you increment or decrement the vote
	const clickVote = (up, id) => {
		const voteData = {
			inc_votes: up ? "+1" : "-1", // <-- this is kinda pointless, you should just send 1 or -1
		};
		// console.log(voteData);

		// This is setting the sate of whether we've voted or not.
		// you can't use a bool because there are three states,
		// vote up '+1', vote down '-1' and not voted yet '' (empty string)
		// the buttons are disabled based on this state
		if (up) {
			setHasVoted("+1");
		} else {
			setHasVoted("-1");
		}

		// after changing the values for the ui, we post to the backend to tell it
		// to increment or decrement the vote count
		vote(id, voteData).then((res) => {
			// it will respond with the current vote count. This should be tha same
			// but if another vote comes in at the same time this UI won't know about it
			// and it'll be out of sync, so we take the return value and put it in this UI.

			// Here we setState using setVoteCount, this will update the 'voteCount' which is a
			// state variable so will cause React to trigger a re-render
			setVoteCount(res);
		});
	};

	return (
		<>
			{!currentArticle ? (
				<LinearLoading />
			) : (
				<>
					<div key={currentArticle.article_id}>
						<Card sx={{ display: "block", maxWidth: "100%", margin: "auto" }}>
							<CardContent>
								<Typography
									sx={{ margin: "auto", textAlign: "left", paddingY: 1 }}
									variant="body2">
									{currentArticle.topic} {bull}{" "}
									{dateFormatter(currentArticle.created_at)}
									<br />
									{currentArticle.author}
								</Typography>

								<CardMedia
									sx={{ height: 500 }}
									image={currentArticle.article_img_url}
								/>

								<hr />
								<br />

								<Typography sx={{ paddingX: 5 }} variant="h4">
									{currentArticle.title}
								</Typography>

								<hr />
								<br />

								<Typography
									sx={{ margin: "auto", paddingX: 10, textAlign: "left" }}
									variant="body1">
									{currentArticle.body}
								</Typography>
							</CardContent>

							<CardActions>
								<IconButton
									disabled={currentVote === "+1"}
									onClick={() => {
										clickVote(true, currentArticle.article_id);
									}}
									aria-label="upvote arrow">
									<ArrowCircleUpIcon />
								</IconButton>

								{/* voteCount is state, when it changes the page will re-render */}
								<Typography>{voteCount} Votes</Typography>

								<IconButton
									disabled={currentVote === "-1"}
									onClick={() => {
										clickVote(false, currentArticle.article_id);
									}}
									aria-label="downvote arrow">
									<ArrowCircleDownIcon />
								</IconButton>

								<IconButton aria-label="share">
									{" "}
									<ShareIcon />{" "}
								</IconButton>
							</CardActions>
						</Card>
					</div>
					<Comments id={currentArticle.article_id} />
				</>
			)}
		</>
	);
};
