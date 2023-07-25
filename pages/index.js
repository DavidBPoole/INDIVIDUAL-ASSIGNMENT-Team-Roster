import React, { useEffect, useState } from 'react';
import { getMembers } from '../api/MemberData';
import MemberCard from '../components/cards/MemberCards';
// import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  //  SET A STATE FOR THE MEMBERS
  const [members, setMembers] = useState([]);

  // GET USER IS USING useAuth HOOK
  const { user } = useAuth();
  console.warn(user);

  // API FUNCTION TO GET ALL THE MEMBERS
  const getAllTheMembers = () => {
    getMembers(user.uid).then(setMembers);
  };
  console.warn(members);

  // API CALL TO GET ALL THE MEMBERS ON COMPONENT RENDER
  useEffect(() => {
    document.title = 'Team Roster';
    getAllTheMembers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {/* MAPS OVER BOOKS USING THE MEMBERCARD COMPONENT */}
        {members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllTheMembers} />
        ))}
      </div>
    </div>
  );
}

export default Home;
