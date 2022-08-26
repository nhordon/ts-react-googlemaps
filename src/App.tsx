import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// Map Settings
import { containerStyle, center, options } from "./settings";
// Components
import CurrentLocation from "./components/CurrentLocation";
import RandomLocation from "./components/RandomLocation";
// Image
import manIcon from "./images/man.svg";
// Styles
import { Wrapper, Buttons, Background, ShowPosition, Header } from "./App.styles";

const App: React.FC = () => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!,
	});

	// Save map in ref if we want to access the map
	const mapRef = React.useRef<google.maps.Map<Element> | null>(null);

	const [clickedPos, setClickedPos] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral);

	const moveTo = (position: google.maps.LatLngLiteral) => {
		if (mapRef.current) {
			mapRef.current.panTo({ lat: position.lat, lng: position.lng });
			mapRef.current.setZoom(12);
			setClickedPos(position);

			//console.log(position.lat, position.lng);
		}
	};

	const onLoad = (map: google.maps.Map<Element>): void => {
		mapRef.current = map;

		navigator.geolocation.getCurrentPosition((position) => {
			// Call the callback function
			moveTo({
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			});
		});
	};

	const onUnMount = (): void => {
		mapRef.current = null;
	};

	if (!isLoaded) return <div>Map Loading ...</div>;
	return (
		<Background>
			<Header>Map project</Header>

			<Wrapper>
				<GoogleMap mapContainerStyle={containerStyle} options={options as google.maps.MapOptions} center={center} zoom={12} onLoad={onLoad} onUnmount={onUnMount}>
					{clickedPos.lat ? (
						<Marker
							position={clickedPos}
							icon={{
								url: manIcon,
								origin: new window.google.maps.Point(0, 0),
								anchor: new window.google.maps.Point(15, 15),
								scaledSize: new window.google.maps.Size(30, 30),
							}}
						/>
					) : null}
					<Buttons>
						<CurrentLocation moveTo={moveTo} />
						<RandomLocation moveTo={moveTo} />
					</Buttons>
				</GoogleMap>
			</Wrapper>

			{clickedPos.lat && (
				<ShowPosition>
					<p>
						{clickedPos.lat}, {clickedPos.lng}
					</p>
				</ShowPosition>
			)}
		</Background>
	);
};

export default App;
