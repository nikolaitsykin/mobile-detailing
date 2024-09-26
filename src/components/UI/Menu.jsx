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
        selectedTabClassName="bg-black text-white"
        className="flex flex-col justify-end w-full h-max"
      >
        <TabList className="grid grid-flow-col place-self-stretch md:flex-row md:items-start w-full h-max">
          {carsSizes &&
            carsSizes.map((car) => (
              <Tab
                key={car.title}
                className="h-max cursor-pointer p-1 text-center outline-none justify-center items-center"
              >
                <h5 className="">{car.title}</h5>
                <p className=" p-0.5 font-syne font-semibold text-xs whitespace-pre-wrap">
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
