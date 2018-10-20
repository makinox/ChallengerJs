import React from 'react'
import './adminLayout.css'
import { Link } from 'react-router-dom'

export default (props) => (
  <section className="adminLayout-section">
    <div className="adminLayout-section-head">
      <h2>Administrator</h2>
      <p>Hola {props.title}</p>
    </div>
    <div className="adminLayout-section-body" >
      <div>
        <h3>Proponer reto</h3>
        <Link to="/admin/propouse">Iniciar</Link>

        <p>Retos en marcha {props.challenges}</p>
      </div>
      <div>
        <h3>Calificar retos</h3>
        <Link to="/admin/rating">Calificar</Link>

        <p>Retos enviados {props.sended}</p>
      </div>
      <div>
        <h3>Administrar usuarios</h3>
        <Link to="/admin/admin">Administrar</Link>

        <p>Usuarios activos {props.users}</p>
      </div>
    </div>
  </section>
)