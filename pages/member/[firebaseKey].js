/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewMemberDetails } from '../../api/MergedData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();
  // * 👇️ link to catch all route */}
  // <Link to="/does-not-exist">Catch all route</Link>;

  // GRAB FIREBASEKEY FROM URL
  const { firebaseKey } = router.query;

  // MAKE CALL TO API LAYER TO GET THE DATA
  useEffect(() => {
    viewMemberDetails(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={memberDetails.image} alt={memberDetails.title} style={{ width: '300px' }} />
      </div>
      <div className="text-black ms-5 details">
        <h5>
          {memberDetails.name}
        </h5>
        <p>Species: {memberDetails.species}</p>
        <p>Age: {memberDetails.age}</p>
        <p>Role: {memberDetails.role}</p>
        <p>Powers: {memberDetails.power}</p>
        <p>Description: {memberDetails.description}</p>
      </div>
    </div>
  );
}
