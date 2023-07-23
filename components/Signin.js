import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Image id="welcomeImage" src="https://i.pinimg.com/236x/f0/8f/6a/f08f6abb8b5dee68e709009a3779288c.jpg" alt="Welcome to the Mushroom Kingdom! Please don't eat the mushrooms.." onClick={signIn} />
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Click Here to Enter the Mushroom Kingdom! &#127812;
      </Button>
    </div>
  );
}

export default Signin;
