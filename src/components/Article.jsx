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
import { voteCounter } from "../../utils/voteCounter";
const bull = "•";

export const Article = () => {
	const { article_id } = useParams();

	const [article, setArticle] = useState([]);
	const [isClickedUp, setIsClickedUp] = useState(false);
	const [isClickedDown, setIsClickedDown] = useState(false);

	useEffect(() => {
		getArticleById(article_id).then(({ article }) => {
			setArticle(article);
		});
	}, [article_id]);
	return (
		<>
			{!article.length ? (
				<LinearLoading />
			) : (
				<>
					<ul>
						{article?.map((article) => (
							<li key={article.article_id}>
								<Card
									sx={{ display: "block", maxWidth: "100%", margin: "auto" }}>
									<CardContent>
										<Typography
											sx={{ margin: "auto", textAlign: "left", paddingY: 1 }}
											variant="body2">
											{`${article.topic} ${bull} ${dateFormatter(
												article.created_at
											)}`}
											<br />
											{article.author}
										</Typography>
										<CardMedia
											sx={{ height: 500 }}
											image={article.article_img_url}
										/>
										<hr />
										<br />
										<Typography sx={{ paddingX: 5 }} variant="h4">
											{article.title}
										</Typography>
										<hr />
										<br />
										<Typography
											sx={{ margin: "auto", paddingX: 10, textAlign: "left" }}
											variant="body1">
											{article.body}
										</Typography>
									</CardContent>
									<CardActions>
										<IconButton
											disabled={isClickedUp}
											onClick={() => {
												voteCounter(article.article_id, "+");
												if (!isClickedUp) {
													setIsClickedUp(true);
													setIsClickedDown(false);
												}
											}}
											aria-label="upvote arrow">
											<ArrowCircleUpIcon />
										</IconButton>
										<Typography>{`${article.votes} votes`}</Typography>
										<IconButton
											disabled={isClickedDown}
											onClick={() => {
												voteCounter(article.article_id, "-");
												if (!isClickedDown) {
													setIsClickedDown(true);
													setIsClickedUp(false);
												}
											}}
											aria-label="downvote arrow">
											<ArrowCircleDownIcon />
										</IconButton>
										<IconButton aria-label="share">
											<ShareIcon />
										</IconButton>
									</CardActions>
								</Card>
							</li>
						))}
					</ul>
					<Comments id={article[0].article_id} />
				</>
			)}
		</>
	);
};
