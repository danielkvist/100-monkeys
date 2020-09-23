const genRandomString = () => {
	return Math.random()
		.toString(36)
		.replace(/[^a-z]+/g, '')
		.substr(0, 1);
};

export default genRandomString;
