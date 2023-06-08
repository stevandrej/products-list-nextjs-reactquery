import React from "react";

const Spinner = React.memo(() => {
	return <span className="loading loading-spinner loading-lg"></span>;
});

Spinner.displayName = "Spinner";

export default Spinner;
