// Settings for the map goes inside this file
import mapStyles from "./mapStyles";

export const containerStyle = {
	width: "598px",
	height: "461px",
};

// Center on Kalmar
export const center = {
	lat: 56.68,
	lng: 16.33,
};

// Disable default UI
export const options = {
	styles: mapStyles,
	disableDefaultUI: true,
	zoomControl: true,
};
