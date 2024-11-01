import React, { useState }  from "react";
import "../App.css";
import { Modal, ModalHeader, 
        ModalBody, ModalFooter, 
        Button 
    } from 'reactstrap';
import { NavLink } from "react-router-dom";


const Navbarinferior = () => {
    const [modalace, setModal] = useState(false);
    const [modalps5, setModal1] = useState(false);
    const [modalps4, setModal2] = useState(false);
    const [modalxbox, setModal3] = useState(false);
    const [modalniten, setModal4] = useState(false);
    const btnnitendo = () => setModal4(!modalniten);
    const btnxbox = () => setModal3(!modalxbox);
    const btnps4 = () => setModal2(!modalps4);
    const btnps5 = () => setModal1(!modalps5);
    const btnacessor = () => setModal(!modalace);
    const [backdrop] = useState(false);


    const overacessor = (
        <div>
        <button
          type="button"
          className="close acessoroverbtnleft"
          style={{ position: 'absolute', top: 115, height: 600, width: 580,  background: 'none',  border: 'none'}}
          onMouseOver={btnacessor}
        >         
        </button>
        <button
          type="button"
          className="close acessoroverrigtn"
          style={{ position: 'absolute', top: 105, height: 600, width: 700,  background: 'none', border: 'none'}}
          onClick={btnacessor}
          onMouseOver={btnacessor}
        >
        </button>
        </div>
      );

      const overps5 = (
        <div>
        <button
          type="button"
          className="close ps5overbtnleft"
          style={{ position: 'absolute', top: 105, height: 600,  width: 500,border: 'none', background: 'none'}}
          onMouseOver={btnps5}
        >         
        </button>
        <button
          type="button"
          className="close ps5overbtnrigth"
          style={{ position: 'absolute', top: 105, width: 600, height: 600,border: 'none', background: 'none'}}
          onMouseOver={btnps5}
        >
        </button>
        </div>
      );

      const overps4 = (
        <div>
        <button
          type="button"
          className="close ps4overbtnleft"
          style={{ position: 'absolute', top: 105, height: 600, width: 700,border: 'none', background: 'none'}}
          onMouseOver={btnps4}
        >         
        </button>
        <button
          type="button"
          className="close ps4overbtnrigth"
          style={{ position: 'absolute', top: 105, height: 600, width: 400,border: 'none', background: 'none'}}
          onMouseOver={btnps4}
        >
        </button>
        </div>
      );

      const overxbox = (
        <div>
        <button
          type="button"
          className="close xboxbtnleft"
          style={{ position: 'absolute', top: 105, height: 600, width: 700, border: 'none', background: 'none'}}
          onMouseOver={btnxbox}
        >         
        </button>
        <button
          type="button"
          className="close xboxbtnrigth"
          style={{ position: 'absolute', top: 105, height: 600, width: 400, border: 'none', background: 'none'}}
          onMouseOver={btnxbox}
        >
        </button>
        </div>
      );

      const overniten = (
        <div>
        <button
          type="button"
          className="close nitenoverbtnleft"
          style={{ position: 'absolute', top: 105, height: 600, width: 700, border: 'none', background: 'none'}}
          onMouseOver={btnnitendo}
        >         
        </button>
        <button
          type="button"
          className="close nitenoverbtnrigth"
          style={{ position: 'absolute', top: 105, height: 600, width: 250, border: 'none', background: 'none'}}
          onMouseOver={btnnitendo}
        >
        </button>
        </div>
      );

     
    return (
        <div className="Navs">
            <nav className="navbar nav-secundary py-0 ">
                <div className="container col-7 mt-1 nav-div" >
                    <NavLink to={'./'} className={'decoration-links'}>
                        <p  className="mb-0 sem-icon responsive-txt" Type="button">Lançamentos</p>
                    </NavLink>

                    <NavLink to={'./promocoes'} className={'decoration-links'}>
                    <p  className="mb-0 sem-icon responsive-txt" Type="button">Promoções</p>
                    </NavLink>
                    
                    <div Type="button" onClick={btnacessor} onMouseOver={btnacessor} className="responsive-txt">
                        <img src="./Imgs/Navs/icon01.png" className="icons-responsive icon-acessor"/><br/>
                        Acessorios
                    </div>
                        
                    <div type="button" onClick={btnps5} onMouseOver={btnps5} className="responsive-txt">
                        < img src="./Imgs/Navs/icon02.png" className=" mt-1 icons-responsive icon-ps5"/><br/>
                        PS5
                    </div>

                    <div type='button' onClick={btnps4} onMouseOver={btnps4} className="responsive-txt">
                        <img src="./Imgs/Navs/icon03.png" className=" mt-2 icons-responsive icon-ps4-responsive"/><br/>
                        PS4
                    </div>
                    <div type='button' onClick={btnxbox} onMouseOver={btnxbox} className="responsive-txt">
                        <img src="./Imgs/Navs/icon04.png" className=" mt-1 icons-responsive icon-xbox-responsive"/><br/>
                        Xbox Séries S|X
                    </div>
                    <div type='button' onClick={btnnitendo} onMouseOver={btnnitendo} className="responsive-txt">
                        <img src="./Imgs/Navs/icon05.png" className=" mt-1 icons-responsive icon-niten-responsive"/><br/>
                        Nitendo Switch
                    </div>
                </div>
            </nav>

            <Modal isOpen={modalace} toggle={btnacessor} backdrop={backdrop} className="modalnavacessor" external={overacessor}>
                <div className="modal-acessor-all">
                        <ModalHeader toggle={btnacessor}></ModalHeader>
                        <ModalBody>
                            <li className="options-subnav-modal-acessor mb-2" style={{fontSize: 17}}>
                                <NavLink to={'./acessorios'} className={'decoration-links'}>
                                    <p className="mb-2">Mais Vendidos</p>
                                </NavLink>
                                <NavLink to={'./fones'} className={'decoration-links'}>
                                    <p className="mb-2">Headset</p>
                                </NavLink>
                                <NavLink to={'./controles'} className={'decoration-links'}>
                                    <p className="mb-2">Controles</p>
                                </NavLink>
                            </li>
                        </ModalBody>
                        <ModalFooter>
                            <img className="icon-acessor-02 " src="./Imgs/Subnav/logo-acessor02.png" alt="..."/>
                            <img className="icon-acessor-01 m-0" src="./Imgs/Subnav/logo-acessor01.png" alt="..."/>
                        </ModalFooter>
                        </div>
            </Modal>

            <Modal isOpen={modalps5} toggle={btnps5} backdrop={backdrop} className="modalnavps5"  external={overps5}>
                <div className="modal-ps5-all">
                    <ModalHeader toggle={btnps5}></ModalHeader>
                    <ModalBody>
                        <li className="options-subnav-modal mb-2 " style={{fontSize: 17}}>
                        <NavLink to={'./consoleps5'} className={'decoration-links'}>
                            <p className="mb-2">Consoles</p>
                        </NavLink>
                        <NavLink to={'./jogosps5'} className={'decoration-links'}>
                            <p className="mb-5">Jogos</p>
                        </NavLink>
                        </li>
                    </ModalBody>
                    <ModalFooter>
                        <img className="iconfooter-ps5 mt-5 mb-0 mx-0" src="./Imgs/Subnav/icon-ps5-modal.png" alt="..."/>
                    </ModalFooter>
                </div>
            </Modal>

            <Modal isOpen={modalps4} toggle={btnps4} backdrop={backdrop} className="modalnavps4" external={overps4}>
                <div className="modal-ps4-all">
                    <ModalHeader toggle={btnps4}></ModalHeader>
                    <ModalBody>
                        <li className="options-subnav-modal mb-2" style={{fontSize: 17}}>
                        <NavLink to={'./consoleps4'} className={'decoration-links'}>
                            <p className="mb-2">Consoles</p>
                        </NavLink>
                        <NavLink to={'./jogosps4'} className={'decoration-links'}>
                            <p className="mb-5">Jogos</p>
                        </NavLink>
                        </li>
                    </ModalBody>
                    <ModalFooter>
                        <img className="icon-ps4 mt-5 mb-0 mx-0" src="./Imgs/Subnav/icon-ps4-modal.png" alt="..."/>
                    </ModalFooter>
                </div>
            </Modal>
            
            <Modal isOpen={modalxbox} toggle={btnxbox} backdrop={backdrop} className="modalnavxbox" external={overxbox}>
                <div className="modal-xbox-all">
                    <ModalHeader toggle={btnxbox}></ModalHeader>
                    <ModalBody>
                        <li className="options-subnav-modal mb-2" style={{fontSize: 17}}>
                        <NavLink to={'./consolexbox'} className={'decoration-links'}>
                            <p className="mb-2">Consoles</p>
                        </NavLink>
                        <NavLink to={'./jogosxbox'} className={'decoration-links'}>
                            <p className="mb-5">Jogos</p>
                        </NavLink>
                        </li>
                    </ModalBody>
                    <ModalFooter>
                        <img className="icon-xbox mt-4 mb-0 me-3 ms-0" src="./Imgs/Subnav/icon-xbox-modal.png" alt="..."/>
                    </ModalFooter>
                </div>
            </Modal>

            <Modal isOpen={modalniten} toggle={btnnitendo} backdrop={backdrop} className="modalnavnitendo" external={overniten}>
                <div className="modal-nitendo-all">
                    <ModalHeader toggle={btnnitendo}></ModalHeader>
                    <ModalBody>
                        <li className="options-subnav-modal mb-2" style={{fontSize: 17}}>
                        <NavLink to={'./consolenitendo'} className={'decoration-links'}>
                            <p className="mb-2">Consoles</p>
                        </NavLink>
                        <NavLink to={'./jogosnitendo'} className={'decoration-links'}>
                            <p className="mb-5">Jogos</p>
                        </NavLink>
                        </li>
                    </ModalBody>
                    <ModalFooter>
                        <img className="icon-nitendo mt-4 m-0" src="./Imgs/Subnav/icon-nitendo-modal.png" alt="..."/>
                    </ModalFooter>
                </div>
            </Modal>

        </div> 
    );
    
};

export default Navbarinferior;