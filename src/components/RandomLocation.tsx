import React from "react";
// Styles
import { StyledBtnRandom } from "./CurrentLocation.styles";

type Props = {
	moveTo: (position: google.maps.LatLngLiteral) => void;
};

const RandomLocation: React.FC<Props> = ({ moveTo }) => {
	const [disabled, setDisabled] = React.useState(false);

	return (
		<StyledBtnRandom
			disabled={disabled}
			onClick={() => {
				setDisabled(false);
				// Call move random
				moveTo({
					lat: Math.random() * (85 * 2) - 85,
					lng: Math.random() * (180 * 2) - 180,
				});
				// Deactivate button
				//setDisabled(true);
				//});
			}}>
			{disabled ? <p>Searching ...</p> : <p>Teleport me to somewhere random</p>}
		</StyledBtnRandom>
	);
};

export default RandomLocation;
