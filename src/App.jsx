import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/ui/Header';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';
import ArchivedPage from './pages/ArchivedPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import { getAccessToken, getUserLogged, putAccessToken } from './utils/network-data';
import ThemeProvider from './context/ThemeContext';
import LocaleProvider from './context/LocaleContext';


function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      if (!getAccessToken()) return;
      const { error, data } = await getUserLogged();
      if (!error) {
        setAuthedUser(data);
      }
    }
    fetchUser();
  }, []);

  function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    getUserLogged().then(({ error, data }) => {
      if (!error) {
        setAuthedUser(data);
        navigate('/');
      }
    });
  }

  function onLogout() {
    putAccessToken('');
    setAuthedUser(null);
    navigate('/');
  }

  const hideHeaderRoutes = [];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header logout={onLogout} authedUser={authedUser} />}
      <main className="app-container">
        <Routes>
          {!authedUser ? (
            <>
              <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="/notes/new" element={<AddNotePage />} />
              <Route path="/notes/archived" element={<ArchivedPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </>
          )}
        </Routes>
      </main>
    </>
  );
}

export default function AppWrapper() {
  return (

    <BrowserRouter>
      <LocaleProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LocaleProvider>
    </BrowserRouter>
  );
}
