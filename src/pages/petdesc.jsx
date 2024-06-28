import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PetsState } from "../Context/context";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";

function PetDesc() {
  const [pet, setPet] = useState([]);
  const { name } = useParams();
  const { petData, setPetData } = PetsState();
  useEffect(() => {
    const selectedPet = petData.filter((pet) => pet.name === name);
    setPet(selectedPet);
  }, [setPet, petData, name]);

  return (
    <main className="hero flex justify-center items-center ">
      <article className="flex flex-col md:flex-row items-center gap-2 md:gap-5 relative  shadow-lg my-28 bg-gray-100">
        <span
          className="absolute top-2 right-2 cursor-pointer z-30"
          onClick={() => {
            setPetData((prevState) => {
              return prevState.map((p) =>
                p.name === name ? { ...p, isFavorite: !p.isFavorite } : p
              );
            });
          }}
        >
          {pet[0]?.isFavorite ? (
            <MdOutlineFavorite className=" text-xl text-red-600 hover:text-red-400" />
          ) : (
            <GrFavorite className=" text-xl text-red-400 hover:text-red-600" />
          )}
        </span>
        <div className="img md:flex-1 w-full flex justify-center md:justify-start">
          <img
            src={pet[0]?.url}
            alt="Pet"
            className="h-[200px] md:h-[350px] w-4/5"
          />
        </div>

        <div className="p-2 space-y-4 flex-1">
          <h3 className=" font-bold">Pet Name: {pet[0]?.name}</h3>
          {pet[0]?.country_code && (
            <p className="leading-5">
              <span className="font-bold">Country Code: </span>{" "}
              {pet[0]?.country_code}
            </p>
          )}
          {pet[0]?.weight && (
            <p className="leading-5">
              <span className="font-bold">Weight: </span> {pet[0]?.weight} kg
            </p>
          )}
          {pet[0]?.bred_for && (
            <p className="leading-5">
              <span className="font-bold">Bred For: </span> {pet[0]?.bred_for}
            </p>
          )}
          {pet[0]?.description === "undefined" && (
            <p className="leading-5">
              <span className="font-bold">description: </span>{" "}
              {pet[0]?.description}
            </p>
          )}
          {pet[0]?.breed_group && (
            <p className="leading-5">
              <span className="font-bold">Breed Group: </span>{" "}
              {pet[0]?.breed_group}
            </p>
          )}
          {pet[0]?.life_span && (
            <p className="leading-5">
              <span className="font-bold">Life Span: </span> {pet[0]?.life_span}
            </p>
          )}
          {pet[0]?.temperament && (
            <p className="leading-5">
              <span className="font-bold">Temperament: </span>{" "}
              {pet[0]?.temperament}
            </p>
          )}
          {pet[0]?.origin && (
            <p className="leading-5">
              <span className="font-bold">Origin: </span> {pet[0]?.origin}
            </p>
          )}
        </div>
      </article>
    </main>
  );
}

export default PetDesc;
