import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Mariok = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1>Mario Kart 8 - Nitendo Switch</h1>
                    <h2> R$ 317,50</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 29,14</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 317,50</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 301,62</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5" style={{background: "#000"}}>
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/mariok.jpeg"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minimariok1.webp" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minimariok2.webp" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minimariok3.jpg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Mario kart 8 deluxe reúne novamente os personagens mais icônicos da nintendo, como mario, luigi,
                        peach, bowser, link e muitos outros, para disputarem quem é o melhor piloto de todos. Depois de 
                        selecionar seu personagem, escolha também seu veículo, que pode ser personalizado com diferentes pneus, 
                        chassis e planadores. 
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Mariok;