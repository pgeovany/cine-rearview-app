import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Search from './pages/Search/Search';

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
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
