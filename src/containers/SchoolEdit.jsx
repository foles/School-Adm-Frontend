import React from "react";
import FormSchool from "../components/FormSchool.jsx";

class SchoolEdit extends React.Component {
  state = {
    form: {
      id: this.props.match.params.schoolId,
      nombre: "",
      tipo: "",
      direccion: "",
      dpto: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    this.setState({ loading: true, error: null });
    await fetch(
      `http://localhost:59460/api/escuelas/${this.props.match.params.schoolId}`
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

    await fetch(
      `http://localhost:59460/api/escuelas/${this.props.match.params.schoolId}`,
      {
        method: "PUT",
        body: JSON.stringify(this.state.form),
        headers: {
          Accept: "application/json; charset=utf-8",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    )
      .then((res) => this.props.history.push("/home"))
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

export default SchoolEdit;
