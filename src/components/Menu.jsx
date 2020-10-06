import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className="row m-5 d-flex justify-content-center">
        <div className="card-deck"></div>
        <div class="card ">
          <img
            src="https://media.istockphoto.com/photos/covid19-a-teacher-teaches-mathematics-picture-id1225062688"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Profesores</h5>
            <p class="card-text">
              Agrega, Actualiza y Controla informacion de los <b>profesores</b>{" "}
              de la Escuela o Unidad Educativa
            </p>
            <Link
              to={`/school/profesores/${this.props.match.params.schoolId}`}
              class="btn btn-primary"
            >
              ADMINISTRAR
            </Link>
          </div>
        </div>

        <div class="card">
          <img
            src="https://media.istockphoto.com/photos/mother-homeschooling-teenage-boys-in-selfisolation-covid19-picture-id1215726502?b=1&k=6&m=1215726502&s=170667a&w=0&h=vRjn6Ae-rj0zeuktJe03WwxhJfxklKho3dye0PRyKk0="
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Estudiantes</h5>
            <p class="card-text">
              Agrega, Actualiza y Controla informacion de los <b>estudiantes</b>{" "}
              de la Escuela o Unidad Educativa
            </p>
            <Link
              to={`/school/students/${this.props.match.params.schoolId}`}
              class="btn btn-primary"
            >
              ADMINISTRAR
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
