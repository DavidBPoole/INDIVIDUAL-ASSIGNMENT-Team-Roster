import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTeam } from '../../../api/TeamData';
import TeamForm from '../../../components/forms/TeamForm';

export default function EditTeam() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  // GRAB FIREBASEKEY
  const { firebaseKey } = router.query;

  // MAKE CALL TO API TO GRAB TEAM DATA
  useEffect(() => {
    getSingleTeam(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // PASS OBJECT TO FORM
  return (<TeamForm obj={editItem} />);
}
