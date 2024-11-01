import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Controleps5 = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1> Controle PlayStation 5 Original</h1>
                    <h2> R$ 399,99</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 36,66</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 399,99</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 379,99</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5">
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/controleps5.jpg"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minicps5.jpg" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minicps51.jpg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minicps52.jpg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Controle Sony DualSense PS5, Sem Fio, Branco - Sinta o feedback fisicamente responsivo 
                        às suas ações no jogo com atuadores duplos que substituem os motores tradicionais. Em suas mãos, 
                        essas vibrações dinâmicas podem simular a sensação de tudo, desde ambientes até o recuo de diferentes
                         armas. Experimente vários níveis de força e tensão conforme você interage com o equipamento e os 
                         ambientes do jogo. Desde puxar a corda do arco cada vez mais tensa até pisar no freio em um carro
                          em alta velocidade, sinta-se fisicamente conectado às suas ações na tela.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Controleps5;