import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Consolexboxnormal = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1> Console Xbox Series S 1TB</h1>
                    <h2> R$ 2033,79</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 186,43</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 2033,79</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 1.932,10</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                    <InputGroup style={{width: 300, marginTop: 10}}>
                        <Input placeholder="Digite o CEP" style={{borderRadius: 5, fontSize: 24}}/>
                        <Button className="ms-2" style={{borderRadius: 10, fontSize: 20, background: '#f4be34', border: 'none'}}>
                            Calcular
                        </Button>
                    </InputGroup>
                </div>
                <div className="img-principal-compra mt-5">
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/xbox.jpg"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minixbox.jpg" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minixbox1.jpeg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minixbox2.jpg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Xbox Series S, o menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, 
                        tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho 
                        e velocidade de última geração em um formato compacto e totalmente digital. Retrocompatibilidade com milhares de jogos.
                        Prepare-se para tempos de carregamento mais rápidos, resolução mais alta, taxas de quadros mais estáveis e melhor 
                        latência de entrada em milhares de jogos Xbox One, Xbox 360 e Xbox Original.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Consolexboxnormal;