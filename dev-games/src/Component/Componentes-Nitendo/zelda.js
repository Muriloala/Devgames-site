import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Zelda = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1>The Legend Zelda Breath of <br/>the Wild - Nitendo Switch</h1>
                    <h2> R$ 299,90</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 27,49</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 299,90</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 284,90</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5" style={{background: "#000"}}>
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/zelda.png"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minizelda3.webp" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minizelda2.webp" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minizelda1.jpg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Esqueça tudo que você sabe sobre os jogos da série The Legend of Zelda. Entre em um mundo de 
                        descobertas, exploração e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa 
                        série que veio para romper barreiras. Viaje pelos vastos campos, florestas e montanhas enquanto 
                        descobre o que aconteceu com o reino de Hyrule nesta deslumbrante aventura a céu aberto. E agora no 
                        Nintendo Switch, a sua jornada tem mais liberdade do que nunca. Leve o seu console para qualquer lugar 
                        e viva aventuras na pele de Link da maneira que quiser.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Zelda;