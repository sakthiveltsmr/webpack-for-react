import React from 'react';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" component={<Home/>} />
          <Route exact path="/dynamic" component={<DynamicPage/>} />
          <Route component={<NoMatch/>} />
        </Routes>
    </Router>
  );
};

export default App;