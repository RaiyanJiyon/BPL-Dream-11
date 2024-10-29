import PropTypes from "prop-types";
import coinImage from '../../assets/coin.png';
import logoImage from '../../assets/logo.png'

const Navbar = ({ credit }) => {
    return (
        <div className="navbar w-11/12 mx-auto">
            <div className="flex-1 w-1/2">
                <img src={logoImage} alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 items-center text-[#131313B3]">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                    <button className='flex items-center gap-1 p-2 border border-[#1313131A] rounded-xl text-black font-semibold'><span>{credit}</span> Coin <img className='' src={coinImage} alt="" /></button>
                </ul>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    credit: PropTypes.number.isRequired
}

export default Navbar;