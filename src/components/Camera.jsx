import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

const Camera = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="prefix__iconify prefix__iconify--emojione"
    {...props}
  >
    <G fill="#212528">
      <Path d="M21.6 16.1c0 1.2-1 2.2-2.2 2.2H9.7c-1.2 0-2.2-1-2.2-2.2v-2.7c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v2.7M60.7 15.9c0 .6-.5 1.2-1.2 1.2h-5.2c-.6 0-1.2-.5-1.2-1.2v-1.4c0-.6.5-1.2 1.2-1.2h5.2c.6 0 1.2.5 1.2 1.2v1.4M64 50.3c0 3-2.4 5.4-5.4 5.4H5.4c-3 0-5.4-2.4-5.4-5.4v-1.6h64v1.6" />
    </G>
    <Path
      d="M0 20.1c0-3 2.4-5.4 5.4-5.4h53.1c3 0 5.4 2.4 5.4 5.4v1.6H0v-1.6z"
      fill="#51575b"
    />
    <Path fill="#3e4347" d="M0 21.5h64v28.3H0z" />
    <Path
      d="M54.7 18H22.6l3.2-10.8c.3-.6 1.6-1.6 2.4-1.8C33.1 4 44.1 4 49 5.4c.8.2 2.1 1.2 2.4 1.8L54.7 18"
      fill="#51575b"
    />
    <Path
      d="M53.1 29.6h-29L27 15c.2-.8 1.5-2.1 2.2-2.4 4.4-1.8 14.4-1.8 18.8 0 .7.3 1.9 1.6 2.2 2.4l2.9 14.6"
      fill="#3e4347"
    />
    <Path
      d="M60.6 37.6c0 12.2-9.9 22-22 22s-22-9.8-22-22c0-12.1 9.9-22 22-22 12.2 0 22 9.9 22 22"
      fill="#788287"
    />
    <Path
      d="M58.2 37.6c0 10.8-8.8 19.6-19.6 19.6S19 48.4 19 37.6 27.8 18 38.6 18c10.8.1 19.6 8.8 19.6 19.6"
      fill="#212528"
    />
    <Circle cx={38.6} cy={37.6} r={15.9} fill="#3e4347" />
    <Circle cx={38.6} cy={37.6} r={8.6} fill="#212528" />
    <G fill="#f5f5f5">
      <Path
        d="M50.3 30.9c0 2.7-2.2 4.9-4.9 4.9s-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9c2.7-.1 4.9 2.2 4.9 4.9"
        opacity={0.5}
      />
      <Circle cx={35.6} cy={40.7} r={3.1} opacity={0.5} />
      <Circle cx={30.1} cy={46.2} r={1.9} opacity={0.5} />
    </G>
    <Path
      d="M15 45.3c0 1.2-1 2.2-2.2 2.2H3.6c-1.2 0-2.2-1-2.2-2.2V25.9c0-1.2 1-2.2 2.2-2.2h9.2c1.2 0 2.2 1 2.2 2.2v19.4"
      fill="#636c72"
    />
    <Circle cx={10.1} cy={18.6} r={3.2} fill="#212528" />
  </Svg>
);

export default Camera;