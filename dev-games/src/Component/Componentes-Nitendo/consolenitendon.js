import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Consolenitendonormal = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1> Console Nitendo Switch 32GB - <br/>
                    Fortnite Wildcat Theme</h1>
                    <h2> R$ 2310,00</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 211,75</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 2310,00</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 2.194,50</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5">
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/nitendo.jpg"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/mininiten.webp" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/mininiten1.jpg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/mininiten2.jpg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Com seu console Switch você terá entretenimento garantido todos os dias. Sua tecnologia foi criada
                        para colocar novos desafios para jogadores novatos e especialistas. Switch tornou-se um dos consoles 
                        mais versáteis do mercado graças ao seu uso portátil e desktop. A Nintendo desenvolveu este modelo com 
                        o objetivo de ter todos os confortos da tecnologia de elite em um dispositivo portátil com o qual 
                        você pode jogar e desfrutar de diversos conteúdos online.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Consolenitendonormal;