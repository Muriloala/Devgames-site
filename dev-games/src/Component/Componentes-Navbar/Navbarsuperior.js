import React, { useState }  from "react";
import "../App.css";
import { Modal, ModalHeader, 
        ModalBody, ModalFooter, 
        Button 
    } from 'reactstrap';
import { NavLink } from "react-router-dom";


const Navbarsuperior = () => {
    const [modallog, setModal5] = useState(false);
    const btnlog = () => setModal5(!modallog);

      const loginicon = (
        <div>       
        <button
          type="button"
          className="close modlogingrau"
          style={{ position: 'absolute', top: 67, height: 30, width: 30, border: 'none',}}
        >
        </button>
        </div>
      );

    return (
        <div className="Navs">
            <nav className="navbar nav-primary p-0">
                <div className="container container-fluid">
                    <img className="logo" src="./Imgs/Navs/logo.png" />
                    <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        
                        <img type='button' onClick={btnlog} src="./Imgs/Navs/login.png" className="icon-nav login-responsive"/>
                    </div>
                </div>
            </nav>

            <Modal isOpen={modallog} toggle={btnlog} className="modallog" external={loginicon}>
                <ModalHeader toggle={btnlog} className="tse"></ModalHeader>
                <ModalBody className="modal-login-body">
                    <div className="divleft-login">
                        <img className="logo-black mb-1" src="./Imgs/Img-login/logo-black.png"/>
                        <p style={{fontSize: 17, fontWeight: 'bold'}}>Olá, <br/>Bem vindo(a)!</p>
                        <NavLink to={'/login'}  className={'decoration-links'}><Button className="btn-modal-enter mt-2"><font className='btn-enter-txt'>Entrar</font></Button></NavLink>
                    </div>
                    <div className="divrigth-login">
                        <NavLink to={'/cadastro'}  className={'decoration-links'}><div className="mb-4 ico-log-header">
                            <img className="icons-option-login-ico me-2" src="./Imgs/Img-login/login-icon.png"/>
                            Cadastrar
                        </div></NavLink> 
                        <div className="ico-inf-footer">
                            <img className="icons-option-login-inf" src="./Imgs/Img-login/information-icon.png"/>
                            <a href="https://wa.me/+5564992977997" className="decoration-links">S.A.C</a>
                        </div>
                    </div>
                    
                </ModalBody>
            </Modal>
        </div> 
    );
    
};

export default Navbarsuperior;