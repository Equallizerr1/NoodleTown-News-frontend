import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import { getEndpoints } from "../../utils/api";

export const Endpoints = () => {
	const [endpointList, setEndpointList] = useState([]);
	useEffect(() => {
		getEndpoints().then(({ endpoints }) => {
			setTimeout(() => setEndpointList(endpoints), 2000);
		});
	}, []);
	const endpointArray = [];
	for (const property in endpointList) {
		endpointArray.push(property);
	}

	const descArray = [];
	const description = Object.values(endpointList);
	description.forEach((desc) => {
		descArray.push(desc.description);
	});

	function createData(id, endpoint, description) {
		return { id, endpoint, description };
	}

	const rows = [
		createData(1, endpointArray[0], descArray[0]),
		createData(2, endpointArray[1], descArray[1]),
		createData(3, endpointArray[2], descArray[2]),
		createData(4, endpointArray[3], descArray[3]),
		createData(5, endpointArray[4], descArray[4]),
		createData(6, endpointArray[5], descArray[5]),
	];
	return (
		<Box>
			<TableContainer component={Paper}>
				<Table aria-label="a dense table">
					<TableHead sx={{ backgroundColor: "teal" }}>
						<TableRow>
							<TableCell key={"endpoints"}>
								<Typography variant="h6">Endpoints</Typography>
							</TableCell>
							<TableCell key={"description"}>
								<Typography variant="h6">Description</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{!endpointList ? (
							<TableRowsLoader rowsNum={10} />
						) : (
							rows?.map((row) => (
								<TableRow key={row.id}>
									<TableCell component="th" scope="row">
										{row.endpoint}
									</TableCell>
									<TableCell>{row.description}</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};
const TableRowsLoader = ({ rowsNum }) => {
	return [...Array(rowsNum)].map((row, index) => (
		<TableRow key={index}>
			<TableCell component="th" scope="row">
				<Skeleton animation="wave" variant="text" />
			</TableCell>
			<TableCell>
				<Skeleton animation="wave" variant="text" />
			</TableCell>
			<TableCell>
				<Skeleton animation="wave" variant="text" />
			</TableCell>
			<TableCell>
				<Skeleton animation="wave" variant="text" />
			</TableCell>
		</TableRow>
	));
};
