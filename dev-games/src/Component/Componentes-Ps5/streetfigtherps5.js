import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Streetps5 = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1>Street Figther 6 - PS5</h1>
                    <h2> R$ 239,90</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 20,54</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 139,90</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 233,40</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5" style={{background: "#000"}}>
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/streetps5.jpeg"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/ministreet.jpg" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/streetmini.jpeg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/streetmini2.jpg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Street Fighter 6 é o próximo passo na evolução da série Street Fighter e conta com recursos de gameplay 
                        inovadores, além de visuais aprimorados em todos os aspectos do jogo. Street Fighter 6 usa a RE ENGINE, 
                        própria da Capcom, e apresenta três modos distintos de jogo: Fighting Ground, World Tour e Battle Hub. 
                        Seu caminho para se tornar um World Warrior começa aqui. Seu momento. Sua luta.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Streetps5;