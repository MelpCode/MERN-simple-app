import {BrowserRouter as Router,Route} from 'react-router-dom';

import 'bootswatch/dist/lux/bootstrap.min.css';
import Navigation from './components/Navigation';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <div className="container p-4">
          <Route path="/home" exact component={Home}></Route>
          <Route path="/edit/:id" exact component={QuoteForm}></Route>
          <Route path="/quotes" exact component={QuoteList}></Route>
          <Route path="/newquote" exact component={QuoteForm}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
