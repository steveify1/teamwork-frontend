import React from 'react';
import axios from 'axios';
import { getToken } from '../../services/Credentials';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Nav from '../../components/Nav/Nav';
import Routes from '../../hoc/Routes';

const layout = (props) => {
  // set token
  const token = getToken();
  console.log(token);
  if (token) {
    axios.defaults.headers = {
      token
    }
  }

  return (
    <Aux>
      {/* Navigation */}
      <Nav triggerSignOut={props.signOutHandler} />

      {/* Main Section */}
      <main>
        <Routes isUserLoggedIn={props.isUserLoggedIn} />
      </main>
    </Aux>
  );
}

export default layout;
