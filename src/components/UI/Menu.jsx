import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { carsSizes } from "../../utils/detailingPackages";

const Menu = ({ service }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-full">
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        id="controlled-tabs"
        selectedTabClassName="bg-black text-white"
        className="w-full"
      >
        <TabList className="flex flex-col sm:flex-row w-full max-w-xl">
          {carsSizes &&
            carsSizes.map((car) => (
              <Tab
                key={car.title}
                className="cursor-pointer m-0.5 px-1 outline-none basis-1/3 flex items-center justify-center border border-gray"
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
                <div>
                  <p className="pt-2 text-xs whitespace-pre-wrap h-full ">
                    {service.carsSize[tabIndex]}
                  </p>
                  <h4 className="py-5 text-center">
                    Starts at {service.price[tabIndex]}
                  </h4>
                </div>
              )}
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default Menu;
