import React from "react";

import { Carousel } from "../components/Carousel/Carousel";
import { ReactComponent as Binoculars } from "../../node_modules/bootstrap-icons/icons/binoculars-fill.svg";

export const Home = () => {
  return (
    <div>
      <h1 className="display-3">
        The Recon Mission
        <span>
          <Binoculars height="70" className="text-secondary mb-2" />
        </span>
      </h1>

      <Carousel />
    </div>
  );
};
