import React from 'react';
import '/src/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Contato() {

  const [EmailValue, setEmailValue] = useState('');
  const [TextValue, setTextValue] = useState('');
  const [NameValue, setNameValue] = useState('');

  const handleButtonClick = () => {
    setEmailValue('');
    setTextValue('');
    setNameValue('');
    handleShow();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
  }

  return (
    <>
      <nav>
        <div className="nav-div">
          <div className="Titulo-Nav">Tech do Bem</div>
          <div className="menu-nav" id="nav-menu">
            <button id="btn-menu" onClick={toggleMenu}>Menu
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
      <main className='main-footer'>
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
              value={NameValue} onChange={e => setNameValue(e.target.value)}
            />
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={EmailValue} onChange={e => setEmailValue(e.target.value)}

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
              value={TextValue} onChange={e => setTextValue(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button"
              onClick={handleButtonClick}  >
              Enviar
            </button>
          </div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Envio confirmado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Mensagem Enviada
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
      <footer className='footer'>
        <p>© 2024 Tech do Bem. Todos os direitos reservados.</p>
      </footer>
    </>
  )

}

export default Contato;