import React from "react";
import "/src/style.scss"
import { Link } from "react-router-dom";
import { Home as HomeIcon, Thermometer, Waves, Sun, Bell } from 'lucide-react'




function Dashboard() {


  function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
  }

  return (
    <div className="body-dashboard">
      <nav>
        <div className="nav-div">
          <div className="Titulo-Nav">Nav</div>
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
      <section className="main">
        <div className="sidebar">
          <h3>Painel</h3>
          <a className="sidebar-active" href="#">
            <HomeIcon />
            Principal
          </a>
          <a href="#">
            Novas funções
          </a>
          <a href="#">
            Em Breve...
          </a>
          <br />
          <hr />
        </div>
        <div className="content-dashboard">
          <div className="titulo-secao-dashboard">
            <h2>Dashboard</h2>
            <hr />
            <p><HomeIcon /> / Painel / Principal </p>
          </div>

          <div className="box-info">
            <div className="box-info-single" style={{ backgroundColor: "#fa7f72" }}>
              <div className="info-text">
                <h3>Temperatura da Água</h3>
                <p>14ºC</p>
              </div>
              <Thermometer />
            </div>
            <div className="box-info-single" style={{ backgroundColor: "#79d1ff" }}>
              <div className="info-text">
                <h3>Nivel de Turbidez </h3>
                <p>1,000</p>
              </div>
              <Sun />
            </div>

            <div className="box-info-single" style={{ backgroundColor: "#3ce9bb" }}>
              <div className="info-text">
                <h3>Nivel da Água</h3>
                <p>7 metros</p>
              </div>
              <Waves />
            </div>
          </div>
          <div className="feed">
            <div className="feed-single">
              <div className="feed-text">
                <Bell />
                <span>Aumento no Nivel de Turbidez! </span>
              </div>
              <div className="feed-time">
                <h3>5 minutos atrás</h3>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Dashboard;