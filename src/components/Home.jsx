import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Article } from "./Article";
import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../../utils/api";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export const Home = () => {
	const [articleArray, setArticleArray] = useState([]);
	useEffect(() => {
		getArticles().then(({ articles }) => {
			setTimeout(() => setArticleArray(articles));
		});
	}, []);
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				{/* <Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}>
					{Array.from(Array(2)).map((_, index) => (
						<Grid item xs={2} sm={4} md={4} key={index}>
					*/}
				<Item >
					<Article articles={articleArray} />
				</Item>
				{/* </Grid>
					))}
				</Grid> */}
			</Box>
		</>
	);
};
