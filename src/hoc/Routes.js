import React from 'react';
import { Route } from 'react-router-dom';
import Aux from '../hoc/Auxiliary/Auxiliary';
import Home from '../container/Home/Home';
import NewPost from '../container/NewPost/NewPost';
import PostDetail from '../container/PostDetail/PostDetail';
import DeletePost from '../container/DeletePost/DeletePost';
import Members from '../container/Members/Members';

const routes = (props) => {
  // eslint-disable-next-line no-unused-expressions
  return (
    <Aux>
      <Route path='/' exact component={Home} />
      <Route path='/post/new' exact component={NewPost} />
      <Route path='/gifs/([0-9]+)' exact component={PostDetail} />
      <Route path='/articles/([0-9]+)' exact component={PostDetail} />
      <Route path='/articles/([0-9]+)/edit' exact component={NewPost} />
      <Route path='/(gifs|articles)/([0-9]+)/delete' exact component={DeletePost} />
      <Route path='/members' exact component={Members}/>
    </Aux>
  );
}

export default routes
