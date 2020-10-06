import React from "react";
import "./styles/formSchool.css";

class FormMateria extends React.Component {
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
          <label htmlFor="nombre">Materia</label>
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
          <label htmlFor="descripcion">Descripcion</label>
          <input
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={this.props.formValue.descripcion}
          />
        </div>

        <div className="form-group">
          <label htmlFor="logo">Logo</label>
          <input
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            id="logo"
            name="logo"
            value={this.props.formValue.logo}
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

export default FormMateria;
