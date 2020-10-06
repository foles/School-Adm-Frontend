import React from "react";
import "./styles/formSchool.css";

class FormSchool extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button was submitted");
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={this.props.formValue.nombre}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipo">Tipo</label>
          <input
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            id="tipo"
            name="tipo"
            value={this.props.formValue.tipo}
          />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={this.props.formValue.direccion}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dpto">Departamento</label>
          <input
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            id="dpto"
            name="dpto"
            value={this.props.formValue.dpto}
          />
        </div>

        <button
          onClick={this.handleClick}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default FormSchool;
