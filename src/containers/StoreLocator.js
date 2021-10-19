import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import mapChooser from "../mapChooser";

const defaultLocations = [
  {
    id: 1,
    location: "Portland",
    address: "123 Portland",
  },
  {
    id: 2,
    location: "Astoria",
    address: "123 Astoria",
  },
  {
    id: 3,
    location: "",
    address: "",
  },
];

const StoreLocator = () => {
  const [stores, setStores] = useState(defaultLocations);
  const [currentMap, setCurrentMap] = useState('../images/none.png');

  const chooseMap = (e) => {
    const location = e.target.value;
    console.log(location);
    const filePath = mapChooser(location).toLowerCase();  
    console.log(filePath);
    setCurrentMap(filePath);
  };

  let storeButtons = stores.map((store) => (
    <Button handleClick={chooseMap} id={store.id} key={store.id} location={store.location} />
  ));

  return (
    <React.Fragment>
      <Header />
      <div>{storeButtons}</div>
      <Map imageName={currentMap} />
    </React.Fragment>
  );
};

export default StoreLocator;
