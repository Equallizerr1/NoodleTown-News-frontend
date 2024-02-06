import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { getEndpoints } from "../../utils/api";
import { TableRowsLoader } from "./TableRowsLoader";

export const Endpoints = () => {
	const [endpointList, setEndpointList] = useState([]);
	useEffect(() => {
		getEndpoints().then(({ endpoints }) => {
			setTimeout(() => setEndpointList(Object.entries(endpoints)), 500);
		});
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table size="medium" aria-label="a dense table">
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
					{!endpointList.length ? (
						<TableRowsLoader rowsNum={6} />
					) : (
						endpointList?.map((row, index) => (
							<TableRow key={index + 1}>
								<TableCell
									sx={{ verticalAlign: "top" }}
									component="th"
									scope="row">
									{row[0]}
								</TableCell>
								<TableCell>{row[1].description}</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
