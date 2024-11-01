import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Gran7 = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1>Gran Turismo 7</h1>
                    <h2> R$ 139,90</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 13,52</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 139,90</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 133,62</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5" style={{background: "#000"}}>
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/gran7ps4.webp"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minigran1.jpeg" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minigran.jpg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minigran2.png" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Com mais de 420 carros disponíveis na Brand Central e a concessionária de carros usados desde o 
                        primeiro dia, Gran Turismo 7 recria o visual e a sensação de motores clássicos e supercarros de ponta 
                        com detalhes inigualáveis. Cada carro é controlado de forma diferente e oferece uma sensação única 
                        enquanto você percorre mais de 90 pistas em condições climáticas dinâmicas, incluindo pistas clássicas 
                        da história do GT. 
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Gran7;