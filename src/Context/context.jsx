import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const petsContext = createContext(null);

// getting the data
async function getPetsData() {
  // calling four different api's to get the data
  const catsDataImages = await (
    await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  ).json();
  const dogsDataImages = await (
    await fetch("https://api.thedogapi.com/v1/images/search?limit=10")
  ).json();
  const dogsDataDesc = await (
    await fetch("https://api.thedogapi.com/v1/breeds")
  ).json();
  const catsDataDesc = await (
    await fetch("https://api.thecatapi.com/v1/breeds")
  ).json();

  // gathering all data to one array with random sorting to return it
  const petsData = [
    ...catsDataImages.map((pet, i) => ({
      weight: dogsDataDesc[i].weight.metric,
      id: pet.id,
      url: pet.url,
      name: catsDataDesc[i].name,
      country_code: catsDataDesc[i].country_code || "US",
      desc: catsDataDesc[i].description || "undefined",
      bred_for: catsDataDesc[i].bred_for || "Sled pulling",
      breed_group: catsDataDesc[i].breed_group,
      life_span: catsDataDesc[i].life_span,
      temperament: catsDataDesc[i].temperament,
      origin: catsDataDesc[i].origin || "United States",
    })),
  ]
    .concat(
      dogsDataImages.map((pet, i) => ({
        weight: dogsDataDesc[i].weight.metric,
        id: pet.id,
        url: pet.url,
        name: dogsDataDesc[i].name,
        country_code: dogsDataDesc[i].country_code || "US",
        desc: dogsDataDesc[i].description || "undefined",
        bred_for: dogsDataDesc[i].bred_for || "Sled pulling",
        breed_group: dogsDataDesc[i].breed_group,
        life_span: dogsDataDesc[i].life_span,
        temperament: dogsDataDesc[i].temperament,
        origin: dogsDataDesc[i].origin || "United States",
        isFavorite: false,
      }))
    )
    .sort(() => Math.random() - 0.5);

  // checking if the data is there then return it
  if (petsData.length > 0) {
    return petsData;
  }
}

let tempPetData = [];

function Context({ children }) {
  const [petData, setPetData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPetsData();
      setPetData(data);
      tempPetData = data;
    };
    getData();
  }, []);

  return (
    // this wil provide the  data be global data
    <petsContext.Provider value={{ petData, setPetData, tempPetData }}>
      {children}
    </petsContext.Provider>
  );
}

// Define prop types for the component
Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;

// you can access the data of state from this function
export function PetsState() {
  const data = useContext(petsContext);
  return data;
}
