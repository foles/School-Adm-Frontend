import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../containers/Home";
import SchoolForm from "../containers/SchoolForm";
import SchoolEdit from "../containers/SchoolEdit";
import Layout from "./Layout";
import Menu from "./Menu";
import Profesores from "./Profesores";
import ProfesorProfile from "../containers/ProfesorProfile";
import MateriaNew from "../containers/MateriaNew";
import TrabajoNew from "../containers/TrabajoNew";

import Students from "./Students";
import StudentProfile from "../containers/StudentProfile";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/school/new" component={SchoolForm} />
          <Route exact path="/school/:schoolId/edit" component={SchoolEdit} />
          <Route exact path="/school/menu/:schoolId" component={Menu} />
          <Route exact path="/school/profesores/:id" component={Profesores} />
          <Route exact path="/school/students/:id" component={Students} />
          <Route exact path="/school/materia/new/:id" component={MateriaNew} />
          <Route exact path="/school/trabajo/new/:id" component={TrabajoNew} />

          <Route
            exact
            path="/school/profesores/perfil/:id"
            component={ProfesorProfile}
          />
          <Route
            exact
            path="/school/students/perfil/:id"
            component={StudentProfile}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
