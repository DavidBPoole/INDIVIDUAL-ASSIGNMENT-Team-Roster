import React, { useEffect, useState } from 'react';
import TeamCards from '../components/cards/TeamCards';
import { useAuth } from '../utils/context/authContext';
import { getTeams } from '../api/TeamData';

export default function ShowTeams() {
  const [teams, setTeams] = useState([]);

  // GET USER ID USING useAuth HOOK
  const { user } = useAuth();

  // API CALL TO GET ALL THE TEAMS
  const getAllTeams = () => {
    getTeams(user.uid).then(setTeams);
  };

  // API CALL TO GET ALL TEAMS ON COMPONENT RENDER
  useEffect(() => {
    getAllTeams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {teams.map((team) => (
        <TeamCards key={team.firebaseKey} teamObj={team} onUpdate={getAllTeams} />
      ))}
    </div>
  );
}
