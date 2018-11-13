import React from "react";


const AFrame = () => (
	<a-scene arjs='sourceType: webcam;' artoolkits>
		<a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
		<a-marker-camera preset='hiro'></a-marker-camera>
	</a-scene>

);

export default AFrame;
