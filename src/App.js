import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFound from './views/NotFound';
import BookDetailsView from './views/BookDetailsView';

import { Route, NavLink, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/authors"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Authors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Books
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/authors" component={AuthorsView} />
        <Route path="/books/:bookId" component={BookDetailsView} />
        <Route exact path="/books" component={BooksView} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
