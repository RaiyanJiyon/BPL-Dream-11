import PropTypes from "prop-types";
import { useState } from "react";

const Available = ({ handleActiveTab, selected }) => {
    const [activeButton, setActiveButton] = useState(1);

    const handleActiveButton = (button) => {
        setActiveButton(button);
        handleActiveTab(button);
    }

    return (
        <div className="w-11/12 mx-auto mt-16 flex justify-between">
            <h2 className="card-title">Available Players</h2>
            <div className="flex border rounded-full overflow-hidden">
                <button onClick={() => handleActiveButton(1)} className={`btn font-bold border-[#e0e0e2] rounded-l-xl rounded-r-none ${
                    activeButton === 1 ? 'bg-[#E7FE29]' : 'bg-white'
                }`}>Available</button>
                <button onClick={() => handleActiveButton(2)} className={`btn border text-[#13131399] border-[#e0e0e2] rounded-l-none rounded-r-xl ${
                    activeButton === 2 ? 'bg-[#E7FE29]' : 'bg-white'
                }`}>Selected ({selected})</button>
            </div>
        </div>
    );
};

Available.propTypes = {
    handleActiveTab: PropTypes.func.isRequired
}

export default Available;