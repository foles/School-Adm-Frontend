import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div class="card">
        <img src={this.props.profesor.foto} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <b>
              {this.props.profesor.nombre} {this.props.profesor.apellido}
            </b>
          </li>
          <li class="list-group-item">
            <a>{this.props.profesor.correo}</a>
          </li>
          <li class="list-group-item">
            <b>FECHA NAC </b>
            {this.props.profesor.fechanac}
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
