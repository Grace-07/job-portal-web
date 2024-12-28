import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <div className="mb-10">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
