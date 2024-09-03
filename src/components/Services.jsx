import React from "react";
import {
  ceramicCoatingService,
  exteriorDetailingService,
  headlightRestorationService,
  interiorDetailingService,
  paintCorrectionService,
  ppfService,
} from "../data";
import Card from "./Card";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <Card
        title={exteriorDetailingService.title}
        image={exteriorDetailingService.image}
        description={exteriorDetailingService.description}
        button={"Learn More"}
      />
      <Card
        title={interiorDetailingService.title}
        image={interiorDetailingService.image}
        description={interiorDetailingService.description}
        button={"Learn More"}
      />
      <Card
        title={paintCorrectionService.title}
        image={paintCorrectionService.image}
        description={paintCorrectionService.description}
        button={"Learn More"}
      />
      <Card
        title={headlightRestorationService.title}
        image={headlightRestorationService.image}
        description={headlightRestorationService.description}
        button={"Learn More"}
      />
      <Card
        title={ceramicCoatingService.title}
        image={ceramicCoatingService.image}
        description={ceramicCoatingService.description}
        button={"Learn More"}
      />
      <Card
        title={ppfService.title}
        image={ppfService.image}
        description={ppfService.description}
        button={"Learn More"}
      />
    </div>
  );
};

export default Services;
