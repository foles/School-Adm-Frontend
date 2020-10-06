import React from "react";
import { Route, withRouter, Link } from "react-router-dom";

import "./styles/SchoolCard.css";
class SchoolCard extends React.Component {
  handleDelete = async () => {
    await fetch(`http://localhost:59460/api/escuelas/${this.props.school.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .then(() => (window.location.href = "/"));
  };
  render() {
    return (
      <div className="card cardS bg-light">
        <div className="card-body">
          <Link to={`/school/menu/${this.props.school.id}`}>
            <h5 className="card-title">{this.props.school.nombre}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.school.tipo} - {this.props.school.dpto}
            </h6>
            <p className="card-text">
              <i>{this.props.school.direccion}</i>
            </p>
          </Link>
          <Link
            to={"/home"}
            className="btn btn-danger"
            onClick={this.handleDelete}
          >
            Eliminar
          </Link>

          <Link
            to={`/school/${this.props.school.id}/edit`}
            className="card-link"
          >
            <button className="btn btn-primary ml-3">Editar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SchoolCard;
