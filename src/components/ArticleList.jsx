import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ShareIcon from "@mui/icons-material/Share";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/dateFormatter";
import { voteCounter } from "../../utils/voteCounter";
const bull = "•";

export const ArticleList = ({ articles }) => {
	return (
		<ul>
			{articles.map((article) => (
				<li key={article.article_id}>
					<Card sx={{ maxWidth: "100%", margin: "auto" }}>
						<Link to={`/article/${article.article_id}`}>
							<CardActionArea onClick={() => {}}>
								<CardHeader
									sx={{ textAlign: "left" }}
									avatar={
										<Avatar
											sx={{ bgcolor: red[500] }}
											aria-label={article.author}>
											{article.author[0].toUpperCase()}
										</Avatar>
									}
									titleTypographyProps={{ variant: "h6" }}
									title={article.title}
									subheader={`${article.topic} ${bull} ${timeAgo(
										article.created_at
									)}`}
								/>
								<CardContent>
									<CardMedia
										sx={{ height: 200 }}
										image={article.article_img_url}
									/>
								</CardContent>
							</CardActionArea>
						</Link>
						<CardActions>
							<IconButton
								onClick={() => {
									voteCounter(article.article_id, "+");
								}}
								aria-label="upvote arrow">
								<ArrowCircleUpIcon />
							</IconButton>
							<Typography>{`${article.votes} votes`}</Typography>
							<IconButton
								onClick={() => {
									voteCounter(article.article_id, "-");
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
	);
};
