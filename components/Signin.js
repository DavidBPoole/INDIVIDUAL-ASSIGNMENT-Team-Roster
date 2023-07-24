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
      <Image id="welcomeImage" src="https://uproxx.com/wp-content/uploads/2023/03/mario-bros.jpg?w=1024" alt="Welcome to the Mushroom Kingdom! Please don't eat the mushrooms.." onClick={signIn} />
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Click Here to Enter the Mushroom Kingdom! &#127812;
      </Button>
    </div>
  );
}

export default Signin;
