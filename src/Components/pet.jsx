import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Pet({ petData }) {
  return (
    <Link to={`${petData.name}`}>
      <article className="flex flex-col w-[280px] h-[300px] shadow hover:scale-105 transition">
        <img src={petData.url} alt="Pet" className="h-2/3 object-cover" />
        <div className="p-2 space-y-2">
          <h3 className=" font-bold">{petData.name}</h3>
          <p className=" font-light">bred for: {petData.bred_for}</p>
        </div>
      </article>
    </Link>
  );
}

// Define prop types for the component
Pet.propTypes = {
  petData: PropTypes.object.isRequired,
};

export default Pet;
