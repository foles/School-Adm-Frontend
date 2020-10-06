import React from "react";
import { Link } from "react-router-dom";

class Students extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    console.log("asd");
    this.setState({ loading: true, error: null });
    await fetch("http://localhost:59460/api/estudiantes")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result,
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
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">APELLIDO</th>
                <th scope="col">CORREO</th>
                <th scope="col">PERFIL</th>
              </tr>
            </thead>
            <tbody>
              {(this.state.data || []).map((student) => {
                return (
                  <tr key={student.id}>
                    <th>{student.id}</th>
                    <td>{student.nombre}</td>
                    <td>{student.apellido}</td>
                    <td>{student.correo}</td>
                    <Link
                      to={`/school/students/perfil/${student.id}`}
                      className="btn btn-primary"
                    >
                      VER
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Students;
