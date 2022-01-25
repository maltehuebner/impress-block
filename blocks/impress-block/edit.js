import './editor.scss';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import {
	Card,
	CardBody,
	Disabled,
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes, isSelected } ) {
	const blockProps = useBlockProps();
	const { remoteUrl, firstName, lastName, street, houseNumber, zipCode, city, emailAddress, phoneNumber } = attributes;

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={'Einstellungen'}>
					<TextControl
						label="JSON-Adresse"
						value={remoteUrl}
						onChange={(newValue) =>
							setAttributes({ remoteUrl: newValue })
						}
					/>
				</PanelBody>
			</InspectorControls>
			{isSelected && (
				<Card>
					<CardBody>
						<TextControl
							label="Vorname"
							value={firstName}
							onChange={(newValue) =>
								setAttributes({ firstName: newValue })
							}
						/>
						<TextControl
							label="Nachname"
							value={lastName}
							onChange={(newValue) =>
								setAttributes({ lastName: newValue })
							}
						/>
						<TextControl
							label="Straße"
							value={street}
							onChange={(newValue) =>
								setAttributes({ street: newValue })
							}
						/>
						<TextControl
							label="Hausnummer"
							value={houseNumber}
							onChange={(newValue) =>
								setAttributes({ houseNumber: newValue })
							}
						/>
						<TextControl
							label="Postleitzahl"
							value={zipCode}
							onChange={(newValue) =>
								setAttributes({ zipCode: newValue })
							}
						/>
						<TextControl
							label="Ort"
							value={city}
							onChange={(newValue) =>
								setAttributes({ city: newValue })
							}
						/>
						<TextControl
							label="E-Mail-Adresse"
							value={emailAddress}
							onChange={(newValue) =>
								setAttributes({ emailAddress: newValue })
							}
						/>
						<TextControl
							label="Telefonnummer"
							value={phoneNumber}
							onChange={(newValue) =>
								setAttributes({ phoneNumber: newValue })
							}
						/>
					</CardBody>
				</Card>
			)}
			{!isSelected && (
				<Disabled>
					<ServerSideRender
						block="maltehuebner/impress-block"
					/>
				</Disabled>
			)}
		</div>

	);
}
