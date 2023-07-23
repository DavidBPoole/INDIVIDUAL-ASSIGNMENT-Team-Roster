import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../../api/MemberData';
import MemberForm from '../../../components/forms/MemberForm';

export default function EditMember() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  // GRAB FIREBASEKEY
  const { firebaseKey } = router.query;

  // MAKE CALL TO API TO GET MEMBER DATA
  useEffect(() => {
    getSingleMember(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // PASS OBJECT TO FORM
  return (<MemberForm obj={editItem} />);
}
