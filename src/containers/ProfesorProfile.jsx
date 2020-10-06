import React from "react";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import "./styles/profesorProfile.css";
class ProfesorProfile extends React.Component {
  state = {
    form: {},
    materias: undefined,
  };

  componentDidMount() {
    this.fetchDataProfesor();
    this.fetchDataMaterias();
  }

  fetchDataProfesor = async (e) => {
    this.setState({ loading: true, error: null });
    await fetch(
      `http://localhost:59460/api/profesors/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          form: result,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ loading: false, error });
      });
    console.log(this.state.data);
  };

  fetchDataMaterias = async (e) => {
    this.setState({ loading: true, error: null });
    await fetch(`http://localhost:59460/api/materias`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          materias: result,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ loading: false, error });
      });
    console.log(this.state.data);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row m-5 d-flex justify-content-center">
          <div className="col-xs col-md-4 col-lg-3">
            <h3>PERFIL PROFESOR</h3>
            <Profile profesor={this.state.form}></Profile>
          </div>

          <div className="col-xs col-md-8 col-lg-9 row d-flex justify-content-center">
            {(this.state.materias || []).map((materia) => {
              return (
                <div class="card card-profile text-white bg-success mb-3">
                  <div class="card-header">MATERIA</div>
                  <div class="card-body">
                    <h5 class="card-title">{materia.nombre}</h5>
                    <p class="card-text">{materia.descripcion}</p>
                  </div>
                </div>
              );
            })}

            <div class="card card-profile text-white bg-success mb-3">
              <div class="card-header">MATERIA</div>
              <div class="card-body">
                <Link to={`/school/materia/new/${this.props.match.params.id}`}>
                  <h1 class="card-text">AGREGAR</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfesorProfile;
