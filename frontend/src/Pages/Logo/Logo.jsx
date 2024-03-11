import React, { useEffect } from "react";

import "./Logo.scss";

export const Logo = () => {
  useEffect(() => {
    const delay = setTimeout(() => {
      // Redirect to the policy page after 3 seconds (3000 milliseconds)
      window.location.href = "/policy";
    }, 10000000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <section className="LogoBackround">
        <h1>EcoRide</h1>
      </section>
    </>
  );
};
