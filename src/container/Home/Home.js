import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Section from '../../hoc/Section/Section';
import Posts from '../Posts/Posts';
// import Categories from '../Categories/Categories';


class Home extends Component {
  render() {
    return (
      <Aux>
        {/* Popular Categories */}
        {/* <Categories /> */}
        {/* Posts */}
        <Section
          id='posts'
          title='Recent Posts'>
          <Posts />
        </Section>
      </Aux>
    );
  }
}

export default Home;
