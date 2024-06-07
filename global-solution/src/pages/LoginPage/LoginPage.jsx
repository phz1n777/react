import React from 'react';
import '/src/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function LoginPage() {

  const [EmailValue, setEmailValue] = useState('');
  const [PasswordValue, setPasswordValue] = useState('');

  const handleButtonClick = () => {
    setEmailValue('');
    setPasswordValue('');
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
        <div>
          <div className="titulo-login">
            <h1>Login</h1>
          </div>
          <div className="login-forms">
            <form className="col g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" value={EmailValue} onChange={e => setEmailValue(e.target.value)} />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="inputPassword4" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  value={PasswordValue} onChange={e => setPasswordValue(e.target.value)}

                />
              </div>
              <button type="button" className="btn btn-primary mt-2" id="btnEntrar"
                onClick={handleButtonClick}>
                Entrar
              </button>
              <Button variant="secondary" id="btnCadastrar" onClick={handleShow}>
                Cadastre-se
              </Button>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse.credential);
                  console.log(decoded);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </form>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Cadastrar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Endereço de Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Cadastrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </main>
      <footer className='footer'>
        <p>© 2024 Tech do Bem. Todos os direitos reservados.</p>
      </footer>


    </>

  )

}

export default LoginPage;