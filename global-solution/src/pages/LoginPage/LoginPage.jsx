import React from 'react';
import '/src/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';


function LoginPage() {

  function AbrirModal() {
    new bootstrap.Modal("#modal").show();
  }

  function responseGoogle(response) {
    console.log(response);
  }

  return (
    <>

      <nav>
        <div className="nav-div">
          <div className="Titulo-Nav">Nav</div>
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
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6 mt-2">
                <label htmlFor="inputPassword4" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <button type="button" className="btn btn-primary mt-2" id="btnEntrar">
                Entrar
              </button>
              <button
                onclick="AbrirModal()"
                type="button"
                className="btn btn-secondary mt-2"
                id="btnCadastrar"
              >
                Cadastre-se
              </button>
              <GoogleLogin
                clientId="434430983016-7ihs61jgdc7mg13fu9o36bqg84s7k7br.apps.googleusercontent.com" // substitua pelo seu Client ID
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                id="buttonDivGoogle"
              />
            </form>
          </div>
          <div
            className="modal fade"
            id="modal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Cadastre-se
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="inputEmail5" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail5"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="inputPassword5" className="form-label">
                        Senha
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword5"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button type="button" className="btn btn-primary">
                    Cadastrar
                  </button>
                </div>
                <div>

                </div>
                <div id="buttonDiv" />
              </div>
            </div>
          </div>
        </div>
      </main>


    </>

  )

}

export default LoginPage;