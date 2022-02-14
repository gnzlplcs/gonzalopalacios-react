import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { PageNotFound } from './components/PageNotFound';
import { About } from './routes/About';
import { Home } from './routes/Home';
import { Contact } from './routes/Contact';
import { Project } from './routes/Project';
import { Projects } from './routes/Projects';
import './App.css'

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route
          exact path="/"
          element={
            <>
              <Header title="Gonzalo Palacios" />
              <NavBar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />}>
            <Route
              path=":projectId"
              element={<Project />}
            />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export { App };
