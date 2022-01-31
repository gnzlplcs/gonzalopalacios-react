import React from 'react';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { render } from 'react-dom';
import { About } from './routes/About';
import { Home } from './routes/Home';
import { Projects } from './routes/Projects';
import { Contact } from './routes/Contact';
import Project from './routes/Project';

const rootElement = document.getElementById('root');

render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />}>
          {/* this is an awkward concept. more here: https://reactrouter.com/docs/en/v6/getting-started/tutorial#index-routes */}
          {/* <Route
            index
            element={
              <main style={{ padding: "1rem"}}>
                <p>Select a project</p>
              </main>
            }
          /> */}
          <Route path=":projectId" element={<Project />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <main>
              <p>Sorry, there's nothing here yet</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>,
  rootElement
);
