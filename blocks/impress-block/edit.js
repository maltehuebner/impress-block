import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';

export default function Edit( { attributes, className, setAttributes } ) {
	return (
		<ServerSideRender
			block="maltehuebner/impress-block"
		/>
	);
}
