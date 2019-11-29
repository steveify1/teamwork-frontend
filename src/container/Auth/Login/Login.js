import React from 'react';
import InputField from '../../../components/InputField/InputField';
import Button from '../../../components/Button/Button';
import classes from './Login.module.css';
import image from '../../../assets/images/standing-20.svg';

const login = (props) => {
  const errorFeedback = props.errorFeedback !== '' ? <p className='error'>{props.errorFeedback}</p> : null;

  return (
    <div className={classes.LoginWrapper}>
      <div className={classes.Banner}></div>

      <div className={classes.Image}>
        <img src={image} alt='catch up with team mates' />
      </div>

      <div className={classes.Login}>
        <div className={classes.Brand}>
          <h1>TeamWork</h1>
        </div>

        <h2>Find out what your teammates have been up to</h2>

        <form onSubmit={props.submitted}>
          {/* Show error feedback if any */}
          {errorFeedback}
          <InputField changed={props.changed} id='email' type='email' name='email *' />
          <InputField changed={props.changed} id='password' type='password' name='password *' />
          <Button size='full-width'>sign in</Button>

          <span className={classes.Footer} onClick={props.toggleScreen}>Don't have an account?</span>
        </form>
      </div>
    </div>
  )
}

export default login;
