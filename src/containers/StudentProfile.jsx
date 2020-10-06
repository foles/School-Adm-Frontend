import React from "react";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import "./styles/profesorProfile.css";
class StudentProfile extends React.Component {
  state = {
    form: {},
    materias: undefined,
  };

  componentDidMount() {
    this.fetchDataStudent();
    this.fetchDataMaterias();
  }

  fetchDataStudent = async (e) => {
    this.setState({ loading: true, error: null });
    await fetch(
      `http://localhost:59460/api/estudiantes/${this.props.match.params.id}`
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
    await fetch(`http://localhost:59460/api/trabajoes`)
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
            <h3>PERFIL ESTUDIANTE</h3>
            <Profile profesor={this.state.form}></Profile>
          </div>

          <div className="col-xs col-md-8 col-lg-9 row d-flex justify-content-center">
            {(this.state.materias || []).map((materia) => {
              return (
                <div class="card card-profile card-profile-student text-white bg-secondary  mb-3">
                  <div class="card-header">{materia.tipo}</div>
                  <div class="card-body">
                    <h5 class="card-title">{materia.descripcion}</h5>
                    <p class="card-text">NOTA: {materia.nota}</p>
                    <p class="card-text">FECHA: {materia.fechaent}</p>
                  </div>
                </div>
              );
            })}

            <div class="card card-profile text-white bg-success mb-3">
              <div class="card-header">TRABAJO</div>
              <div class="card-body">
                <Link to={`/school/trabajo/new/${this.props.match.params.id}`}>
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

export default StudentProfile;
