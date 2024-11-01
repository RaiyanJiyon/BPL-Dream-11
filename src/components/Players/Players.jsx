import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Player from "../Player/Player";

const Players = ({ handleSelectedPlayers }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
        .then((response) => response.json())
        .then((jsonData) => setPlayers(jsonData))
    } , [])

    return (
        <div className="w-11/12 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                players.map((player) => (
                    <Player key={player.player_id} player={player} handleSelectedPlayers={handleSelectedPlayers}></Player>
                ))
            }
        </div>
    );
};

Players.propTypes = {
    handleSelectedPlayers: PropTypes.func.isRequired
}

export default Players;