import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Search from './pages/Search/Search';
import Footer from './components/Footer/Footer';
import UserList from './pages/UserList/UserList';
import Watchlist from './pages/Watchlist/Watchlist';
import Reviews from './pages/Reviews/Reviews';
import FilmDetails from './pages/FilmDetails/FilmDetails';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/search"
            element={
              <RequireAuth>
                <Search />
              </RequireAuth>
            }
          />
          <Route
            path="/my-list"
            element={
              <RequireAuth>
                <UserList />
              </RequireAuth>
            }
          />
          <Route
            path="/watchlist"
            element={
              <RequireAuth>
                <Watchlist />
              </RequireAuth>
            }
          />
          <Route
            path="/reviews"
            element={
              <RequireAuth>
                <Reviews />
              </RequireAuth>
            }
          />
          <Route
            path="/films/:id"
            element={
              <RequireAuth>
                <FilmDetails />
              </RequireAuth>
            }
          />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
