import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { carsSizes } from "../../utils/detailingPackages";

const Menu = ({ service }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="w-full flex">
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        id="controlled-tabs"
        selectedTabClassName="bg-black text-white max-h-24"
        className="w-full"
      >
        <TabList className=" flex flex-col xs:flex-row lg:flex-col  w-full max-w-xl">
          {carsSizes &&
            carsSizes.map((car) => (
              <Tab
                key={car.title}
                className="cursor-pointer px-1 text-center bg-grey-background outline-none flex flex-col justify-center items-center basis-1/3"
              >
                <h5 className="">{car.title}</h5>
                <p className="p-0.5 font-syne font-semibold text-xs whitespace-pre-wrap h-full">
                  {car.description}
                </p>
              </Tab>
            ))}
        </TabList>
        {carsSizes &&
          carsSizes.map((car) => (
            <TabPanel key={car.title}>
              {service && (
                <h4 className="p-5 text-center">
                  Starts at {service.price[tabIndex]}
                </h4>
              )}
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default Menu;
