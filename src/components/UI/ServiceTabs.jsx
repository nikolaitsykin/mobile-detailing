import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { detailingPackages } from "../../utils/detailingPackages";
import {
  exteriorServices,
  fullDetailingServices,
  interiorServices,
} from "../../utils/services";
import ServiceItem from "../ServiceItem";

const ServiceTabs = ({ service }) => {
  const [tabIndex, setTabIndex] = useState(0);

  console.log(detailingPackages)

  return (
    <div className="w-full m-auto">
      <h4 className="text-2xl md:text-4xl font-extrabold font-poppins text-center py-5 md:pt-10">Book A Detailing With Us</h4>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        id="controlled-tabs"z
        selectedTabClassName="bg-black text-white"
        className="w-full"
      >
        <TabList className="flex flex-row w-full py-5 text-center ">
          {detailingPackages &&
            detailingPackages.map((serviceType) => (
              <Tab
                key={serviceType.title}
                className="cursor-pointer m-0.5 px-1 font-poppins outline-none basis-1/3 flex items-center justify-center border border-gray"
              >
                <h5 className="h-12 flex justify-center items-center text-sm md:text-xl">
                  {serviceType.title}
                </h5>
              </Tab>
            ))}
        </TabList>
        <TabPanel>
          <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {exteriorServices.map((service) => (
              <ServiceItem
                key={service.title}
                title={service.title}
                image={service.image}
                description={service.shortDescription}
                link={service.link}
              />
            ))}
            <Outlet />
          </div>
        </TabPanel>
        <TabPanel>
          <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {interiorServices.map((service) => (
              <ServiceItem
                key={service.title}
                title={service.title}
                image={service.image}
                description={service.shortDescription}
                link={service.link}
              />
            ))}
            <Outlet />
          </div>
        </TabPanel>
        <TabPanel>
          <div id="services" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {fullDetailingServices.map((service) => (
              <ServiceItem
                key={service.title}
                title={service.title}
                image={service.image}
                description={service.shortDescription}
                link={service.link}
              />
            ))}
            <Outlet />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ServiceTabs;
