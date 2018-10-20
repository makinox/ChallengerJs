import React from 'react'
import './propouseLayout.css'

export default (props) => (
  <section className="propouse-section">
    <div style={{textAlign: 'center'}}>
      <h2>Propouser</h2>
    </div>
    <div className="propouse-section-body">
      <form onSubmit={props.submit}>
        <div>
          <label htmlFor="title" >Titulo del challenge</label>
          <input type="text" name="title"/>
        </div>
        <div>
          <label htmlFor="description" >Description del challenge</label>
          <input type="text" name="description"/>
        </div>
        <div>
          <label htmlFor="input" >Input del challenge</label>
          <textarea type="textarea" name="input" rows="4" cols="50"/>
        </div>
        <div>
          <label htmlFor="ouput" >Ouput del challenge</label>
          <textarea type="textarea" name="ouput" rows="4" cols="50"/>
        </div>
        <div>
          <button type="submit" className="linking">Enviar</button>
        </div>
      </form>
    </div>
  </section>
)