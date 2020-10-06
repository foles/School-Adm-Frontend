import React from "react";
import { Link } from "react-router-dom";
import SchoolCard from "../components/SchoolCard.jsx";
import "./styles/home.css";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    await fetch("http://localhost:59460/api/escuelas")
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
    if (this.state.loading) {
      return "Loading ...";
    }

    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <React.Fragment>
        <div className="row m-5 d-flex justify-content-center">
          {this.state.data.map((school) => {
            return <SchoolCard school={school} key={school.id} />;
          })}

          <div className="card cardS bg-light">
            <div className="card-body">
              <Link to={"/school/new"}>
                <h1>AGREGAR</h1>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
