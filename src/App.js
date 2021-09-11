import React, { useState, useEffect } from "react";

function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		fetch('/recommendations').then(
			res => res.json()
		).then(
			data => {
				setData(data);
			}
		);
	}, []);

	return (
		<div>
			{(typeof data.recommendations === 'undefined' ? (
				<p>Loading...</p>
			) : (
				data.recommendations.map((book, i) => (
					<p key={i}>{book}</p>
				))
			)
			)}
		</div>
	);
}

export default App;
