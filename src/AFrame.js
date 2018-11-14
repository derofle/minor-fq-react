import React from "react";


const AFrame = () => (

	<a-scene artoolkit='sourceType: webcam;'>
	<a-sphere src="https://raw.githubusercontent.com/aframevr/sample-assets/master/assets/images/space/earth_atmos_4096.jpg" radius="0.5" position="0 0.5 0" segments-height="53">
         <a-animation attribute="scale"
              dur="1000"
              from= "1 1 1"
              to="2 2 2"
              direction='alternate-reverse'
              easing= "ease-in-out-circ"     
              repeat="indefinite"></a-animation>
     </a-sphere>
		<a-marker-camera preset='kanji'></a-marker-camera>
	</a-scene>


);

export default AFrame;
