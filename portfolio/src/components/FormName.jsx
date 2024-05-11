import React from 'react';
import { Client, Databases, ID } from 'appwrite'; // Importa Client, Databases y ID de appwrite

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('663d3a5c00062ac11fb2'); // Reemplaza '<PROJECT_ID>' con el ID de tu proyecto de Appwrite

const databases = new Databases(client);

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      correo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { nombre, correo } = this.state;

    if (nombre && correo) {
      // Aquí enviamos los datos a la base de datos de Appwrite
      const promise = databases.createDocument(
        '180606', // Reemplaza '<DATABASE_ID>' con el ID de tu base de datos de Appwrite
        '1', // Reemplaza '<COLLECTION_ID>' con el ID de tu colección de Appwrite
        ID.unique(),
        { "nombre": nombre, "correo": correo }
      );

      promise.then(function (response) {
        console.log(response); // Maneja la respuesta del servidor
        alert('¡Datos enviados correctamente!');
      }, function (error) {
        console.log(error); // Maneja los errores
        alert('Hubo un error al enviar los datos. Por favor, inténtalo de nuevo más tarde.');
      });

      // Limpia los campos después del envío exitoso
      this.setState({ nombre: '', correo: '' });
    } else {
      alert('Por favor, completa todos los campos');
    }
  }

  render() {
    return (
      <form id="usuario--form" style={{ display: 'grid', gridRow: '1fr 1fr 1fr', justifyContent: 'center', alignItems: 'center', padding: '2%' }} onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='nombre'><h6>Nombre completo:</h6></label>
          <input style={{ marginLeft: '10px' }} type="text" placeholder='Escribe tu nombre' id="nombre" name="nombre" value={this.state.nombre} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor='correo'><h6>Correo Electrónico:</h6></label>
          <input style={{ marginLeft: '10px' }} type="text" placeholder='Escribe tu correo electrónico' id="correo" name="correo" value={this.state.correo} onChange={this.handleChange} />
        </div>
        <div className="send-btn--wrapper"><input className="btn btn--secondary" style={{ width: '50%' }} type="submit" value="Submit" /></div>
      </form>
    );
  }
}

export default EssayForm;
