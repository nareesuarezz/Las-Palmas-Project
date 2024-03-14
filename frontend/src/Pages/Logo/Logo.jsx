import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../Assest/Lotties/CarDrive.json";
import "./Logo.scss";

export const Logo = () => {
  useEffect(() => {
    const delay = setTimeout(() => {
      // Redirect to the policy page after 3 seconds (3000 milliseconds)
      window.location.href = "/policy";
    }, 5000);

    return () => clearTimeout(delay);
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="makeGreen" style={{ height: "100vh", width: "100%" }}>
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>
    </>
  );
};
