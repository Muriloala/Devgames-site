import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Gta5 = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1>Grand Thef Auto 5 - Premium Edition</h1>
                    <h2> R$ 89,90</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 08,24</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 155,44</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 85,40</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5" style={{background: "#000"}}>
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/gta.jpg"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minigta.webp" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minigta1.jpeg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minigta2.webp" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Jogo GTA V PS5 Mídia Física - Playstation Quando um malandro de rua, um ladrão de bancos aposentado
                         e um psicopata aterrorizante se envolvem com alguns dos criminosos mais assustadores e loucos do 
                         submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar golpes ousados para 
                         sobreviver nessa cidade implacável onde não podem confiar em ninguém, nem mesmo um no outro. GTA V 
                         também vem com o Grand Theft Auto Online, o universo dinâmico e em constante evolução para até 30 jogadores, 
                         e inclui todas as melhorias de jogabilidade existentes e todos os conteúdos disponibilizados desde o 
                         lançamento do Grand Theft Auto Online.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Gta5;