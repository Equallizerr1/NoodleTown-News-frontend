import { useParams } from "react-router-dom";

export const Topics = () => {
    const { topics } = useParams();
	return (
		<>
			<p>This is the topics page</p>
		</>
	);
};
