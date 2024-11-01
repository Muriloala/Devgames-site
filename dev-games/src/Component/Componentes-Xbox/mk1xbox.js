import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const MK1xbox = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1>Mortal Kombat 1</h1>
                    <h2> R$ 289,90</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 26,04</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 289,90</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 275,40</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                    
                </div>
                <div className="img-principal-compra mt-5" style={{background: "#000"}}>
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/mk1xbox.jpeg"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minimk1.webp" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minimk12.jpg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minimk13.jpeg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Descubra um Universo renascido de Mortal Kombat criado pelo Deus do Fogo Liu Kang. Mortal Kombat 1 
                        inaugura uma nova era da franquia icônica com um novo sistema de luta, modos de jogo e fatalities!
                        Lute em uma nova história com seus personagens favoritos de Mortal Kombat como nunca visto antes.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default MK1xbox;