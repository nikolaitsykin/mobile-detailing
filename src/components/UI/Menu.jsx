import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { carsSizes } from "../../utils/data";

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
        <TabList className="my-6 flex flex-col md:flex-row md:justify-between md:items-center ">
          {carsSizes &&
            carsSizes.map((car) => (
              <Tab
                key={car.title}
                className="cursor-pointer p-1 text-center bg-grey-background outline-none flex flex-col flex-grow justify-center items-center"
              >
                <p className="font-syne font-semibold text-xl">{car.title}</p>
                <p className="font-syne font-semibold text-xs whitespace-pre-wrap">
                  {car.description}
                </p>
              </Tab>
            ))}
        </TabList>
        {carsSizes &&
          carsSizes.map((car) => (
            <TabPanel key={car.title}>
              <div className="p-1 text-center font-syne font-semibold text-xl">
                Starts at {service.price[tabIndex]}
              </div>
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default Menu;
