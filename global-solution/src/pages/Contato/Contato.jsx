import React from 'react';
import '/src/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Contato() {

  return (
    <>
      <nav>
        <div className="nav-div">
          <div className="Titulo-Nav">Navigatinho</div>
          <div className="menu-nav" id="nav-menu">
            <button id="btn-menu">
              Menu
              <span id="hamburguer" />
            </button>
            <ul>
              <li><a><Link to="/">Home</Link></a></li>
              <li><a><Link to="/Dashboard">Painel</Link></a></li>
              <li><a><Link to="/contato">Contato</Link></a></li>
              <li><a><Link to="/Login">Login</Link></a></li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="title-contact">
          <h1>Entre em Contato</h1>
        </div>
        <div className="contact-forms">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nome Completo:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Maria Clara Nascimento"
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Escreva sua mensagem
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
              defaultValue={""}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Enviar
            </button>
          </div>
        </div>
      </main>
    </>
  )

}

export default Contato;