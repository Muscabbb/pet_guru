import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { PetsState } from "../Context/context";

function Pet({ petData }) {
  const { setPetData } = PetsState();
  return (
    <article className="pet flex flex-col relative w-[280px] h-[300px] shadow hover:scale-105 transition">
      <span
        className="absolute top-2 right-2 cursor-pointer z-30"
        onClick={() => {
          setPetData((prevState) => {
            return prevState.map((pet) =>
              pet.id === petData.id
                ? { ...pet, isFavorite: !pet.isFavorite }
                : pet
            );
          });
        }}
      >
        {petData.isFavorite ? (
          <MdOutlineFavorite className=" text-xl text-red-600 hover:text-red-400" />
        ) : (
          <GrFavorite className=" text-xl text-red-400 hover:text-red-600" />
        )}
      </span>
      <Link to={`${petData.name}`} className=" w-full h-full">
        <img
          src={petData.url}
          alt="Pet"
          className="h-2/3 object-cover w-full"
        />
        <div className="p-2 space-y-2">
          <h3 className=" font-bold">{petData.name}</h3>
          <p className=" font-light">bred for: {petData.bred_for}</p>
        </div>
      </Link>
    </article>
  );
}

// Define prop types for the component
Pet.propTypes = {
  petData: PropTypes.object.isRequired,
};

export default Pet;
