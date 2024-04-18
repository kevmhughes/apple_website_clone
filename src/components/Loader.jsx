import { Html } from "@react-three/drei";
import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#878787"
          secondaryColor="#a9a9a9"
          ariaLabel="oval-loading"
        />
      </div>
    </Html>
  );
};

export default Loader;
