import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export const ArticleCard = ({ articles }) => {
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
										<Avatar sx={{ bgcolor: red[500] }} aria-label="author">
											{article.author[0].toUpperCase()}
										</Avatar>
									}
									titleTypographyProps={{ variant: "h6" }}
									title={article.title}
									subheader={article.created_at}
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
							<IconButton aria-label="add to favourites">
								<FavoriteIcon />
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
