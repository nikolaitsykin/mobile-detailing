import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { carsSizes } from "../../utils/detailingPackages";

const PriceTabs = ({ service, singleService }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-full m-auto">
      <h4 className="mb-1 text-center">Simple Pricing</h4>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        id="controlled-tabs"
        selectedTabClassName="bg-black text-white"
        className="w-full"
      >
        <TabList className="flex flex-col sm:flex-row w-full">
          {carsSizes &&
            carsSizes.map((car) => (
              <Tab
                key={car.title}
                className="cursor-pointer m-0.5 px-1 font-poppins outline-none basis-1/3 flex items-center justify-center border border-gray"
              >
                <h5 className="h-12 flex justify-center items-center ">
                  {car.title}
                </h5>
              </Tab>
            ))}
        </TabList>
        {carsSizes &&
          carsSizes.map((car) => (
            <TabPanel key={car.title}>
              {service && (
                <div className="w-full m-auto">
                  <p className="pt-2 text-sm md:text-base whitespace-pre-wrap h-full px-1">
                    {service.carsSize[tabIndex]}
                  </p>
                  {singleService ? (
                    <p className="py-5 text-center text-base md:text-2xl">
                      Price starts at <strong>{service.price[tabIndex]}</strong>{" "}
                      depending car condition
                    </p>
                  ) : (
                    <h4 className="py-5 text-center">
                      Starts at {service.price[tabIndex]}
                    </h4>
                  )}
                  <div className="text-center sm:text-start text-sm md:text-base px-4 mb-4 h-12">
                    {service.type === "Ceramic Coating" ? (
                      <p className="text-center  text-sm md:text-base px-4 mb-4 h-12">
                        Estimated duration: {service.duration[tabIndex]}{" "}
                      </p>
                    ) : (
                      <p className="text-center sm:text-start text-sm md:text-base px-4 mb-4 h-12">
                        Estimated duration: {service.duration[tabIndex]}{" "}
                        depending on vehicle size and condition.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default PriceTabs;
