import React from "react";
import "./styles/formSchool.css";

class FormTrabajo extends React.Component {
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
          <label htmlFor="fechaent">Fecha Entrega</label>
          <input
            onChange={this.props.onChange}
            type="date"
            className="form-control"
            id="fechaent"
            name="fechaent"
            value={this.props.formValue.fechaent}
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

export default FormTrabajo;
