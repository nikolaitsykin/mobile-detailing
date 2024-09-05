import React from "react";
import {
  ceramicCoatingService,
  exteriorDetailingService,
  headlightRestorationService,
  interiorDetailingService,
  paintCorrectionService,
  ppfService,
} from "../utils/data";
import Card from "./Card";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Card
        title={exteriorDetailingService.title}
        image={exteriorDetailingService.image}
        description={exteriorDetailingService.description}
        button={"Learn More"}
        link={"auto-detailing"}
        border={"border"}
      />
      <Card
        title={interiorDetailingService.title}
        image={interiorDetailingService.image}
        description={interiorDetailingService.description}
        button={"Learn More"}
        link={"auto-detailing"}
        border={"border"}
      />
      <Card
        title={paintCorrectionService.title}
        image={paintCorrectionService.image}
        description={paintCorrectionService.description}
        button={"Learn More"}
        link={"paint-correction"}
        border={"border"}
      />
      <Card
        title={headlightRestorationService.title}
        image={headlightRestorationService.image}
        description={headlightRestorationService.description}
        button={"Learn More"}
        link={"headlight-restoration"}
        border={"border"}
      />
      <Card
        title={ceramicCoatingService.title}
        image={ceramicCoatingService.image}
        description={ceramicCoatingService.description}
        button={"Learn More"}
        link={"ceramic-coating"}
        border={"border"}
      />
      <Card
        title={ppfService.title}
        image={ppfService.image}
        description={ppfService.description}
        button={"Learn More"}
        link={"ppf"}
        border={"border"}
      />
      <Outlet />
    </div>
  );
};

export default Services;
