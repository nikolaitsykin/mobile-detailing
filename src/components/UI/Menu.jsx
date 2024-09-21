import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { carsSizes } from "../../utils/detailingPackages";

const Menu = ({ service }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        id="controlled-tabs"
        selectedTabClassName="bg-black text-white"
      >
        <TabList className="flex flex-col md:flex-row md:justify-between md:items-center">
          {carsSizes &&
            carsSizes.map((car) => (
              <Tab
                key={car.title}
                className="cursor-pointer p-1 text-center outline-none flex flex-col basis-1/4 justify-center items-center"
              >
                <h3 className="p-1">{car.title}</h3>
                <h5 className="font-syne font-semibold text-xs md:text whitespace-pre-wrap">
                  {car.description}
                </h5>
              </Tab>
            ))}
        </TabList>
        {carsSizes &&
          carsSizes.map((car) => (
            <TabPanel key={car.title}>
              <h4 className="p-5 text-center">
                Starts at {service.price[tabIndex]}
              </h4>
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default Menu;
