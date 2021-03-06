import React from "react";
import FormSchool from "../components/FormSchool.jsx";

class SchoolForm extends React.Component {
  state = {
    form: {
      nombre: "",
      tipo: "",
      direccion: "",
      dpto: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:59460/api/escuelas", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(this.state.form),
      headers: {
        Accept: "application/json; charset=utf-8",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((response) => console.log("Success:", JSON.stringify(response)))
      .then(() => this.props.history.push("/home"))
      .catch((error) => console.error("Error:", error));
  };
  render() {
    return (
      <React.Fragment>
        <div className="row m-5 d-flex justify-content-center">
          <FormSchool
            onChange={this.handleChange}
            formValue={this.state.form}
            onSubmit={this.handleSubmit}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SchoolForm;
