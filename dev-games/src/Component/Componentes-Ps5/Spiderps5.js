import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Spiderps5 = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1>Spider-Man: Miles Morales - PS5</h1>
                    <h2> R$ 155,44</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 13,37</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 155,44</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 147,60</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5" style={{background: "#000"}}>
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/imgspiderps5.png"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minispider1.jpg" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minispider2.jpg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minispider3.jpg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Spider-Man: Miles Morales - PS5 - A mais recente aventura no universo do Homem-Aranha vai construir e 
                        expandir o universo, por meio de uma história totalmente nova”, indica a sinopse do título. “Os 
                        jogadores irão experimentar a ascensão de Miles Morales à medida que ele domina novos poderes para 
                        se tornar seu próprio Homem-Aranha.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Spiderps5;