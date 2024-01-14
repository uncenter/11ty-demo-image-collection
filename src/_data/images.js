const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");

const BASE_PATH = path.join(__dirname, "../../images/");

module.exports = () => {
	const images = fs.readdirSync(BASE_PATH).map((image) => {
		const { width, height } = sizeOf(path.join(BASE_PATH, image));

		return {
			path: path.join("images", image),
			width,
			height,
		};
	});

	return images;
};
