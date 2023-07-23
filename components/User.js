import React from 'react';
// import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();
  return (
    <div className="profileWallpaper">
      <h1>{user.displayName}</h1>
      <h1>&#127812;</h1>
      {/* <Image src={user.photoURL} alt="userURL" width="100px" height="100px" /> */}
      <h3>{user.email}</h3>
      <h4>Last Mushroom Eaten: {user.metadata.lastSignInTime}</h4>
      <Button type="button" variant="primary" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
        &#127812;
      </Button>
    </div>
  );
}
