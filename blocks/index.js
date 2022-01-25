import { registerBlockType } from '@wordpress/blocks';

import * as BikeListBlock from './impress-block';

const registerBlock = (block) => {
	if (!block) {
		return;
	}

	const { metadata, settings } = block;

	registerBlockType(metadata, settings);
};

(function () {
	[BikeListBlock].forEach(registerBlock);
})();
