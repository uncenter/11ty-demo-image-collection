const fs = require("fs");
const path = require("path");

module.exports = () => {
	const images = fs
		.readdirSync(path.join(__dirname, "../../images/"))
		.map((image) => path.join("images", image));

	return images;
};
