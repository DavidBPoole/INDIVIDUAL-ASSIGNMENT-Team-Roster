/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import MemberCard from '../../components/cards/MemberCards';
import { viewTeamDetails } from '../../api/MergedData';

export default function ViewTeam() {
  const [teamDetails, setTeamDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const showTeamDetails = () => {
    viewTeamDetails(firebaseKey).then(setTeamDetails);
  };

  useEffect(() => {
    showTeamDetails();
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={teamDetails.image} alt={teamDetails.name} style={{ width: '200px' }} />
        </div>
        <div className="text-black ms-5 details">
          <h5>
            {teamDetails.name}
          </h5>
          <hr />
          <p>Residents: {teamDetails.residents}</p>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {teamDetails.members?.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={showTeamDetails} />
        ))}
      </div>
    </>
  );
}
