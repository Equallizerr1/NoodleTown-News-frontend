import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Skeleton } from "@mui/material";

export const TableRowsLoader = ({ rowsNum }) => {
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
