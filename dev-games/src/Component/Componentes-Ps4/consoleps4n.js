import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Consoleps4normal = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1> Console PlayStation 4 1TB - <br/>Exclusive Edition </h1>
                    <h2> R$ 2499,99</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 229,16</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 2499,99</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 2374,99</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5">
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/ps4.jpg"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minips4.jpg" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minips42.jpg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minips41.jpg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Console Sony PS4 Os jogos mais incríveis estão no PS4, com 1TB de armazenamento é o console que 
                        oferece um excelente poder de jogabilidade, entretenimento incrível e tecnologia HDR vibrante. Uso 
                        remoto: Transmita jogos do seu PS4 para qualquer dispositivo compatível com iOS ou Android, PC, Mac, 
                        PlayStation Vita pela sua rede WiFi e aproveite a liberdade pela sua TV. Share Play: Permite que um amigo 
                        jogue seus jogos ou participe de partidas multijogador, mesmo que ele não possua o jogo.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Consoleps4normal;