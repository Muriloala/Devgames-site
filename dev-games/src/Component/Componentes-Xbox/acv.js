import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Acv = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1>Assassin's Creed Valhala</h1>
                    <h2> R$ 170,30</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 15,74</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 170,30</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 161,77</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5" style={{background: "#000"}}>
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/acv.webp"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/miniacv.jpg" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/miniacv2.jpg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/miniacv1.jpeg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Torne-se um viking lendário em busca de glória. Ataque seus inimigos, amplie seu assentamento 
                        e consolide seu poder político.Torne-se Eivor, um guerreiro Viking lendário em busca de glória.
                        Lidere ataques Vikings épicos contra as tropas e fortalezas dos saxões.
                        Reviva o estilo intenso de luta dos Vikings usando armas poderosas nas mãos.
                        Desafie suas habilidades com a mais variada coleção de inimigos já vista em Assassin's Creed.
                        Molde o desenvolvimento do seu personagem e seu assentamento a cada escolha feita.
                        Explore um mundo aberto da Idade das Trevas, das costas da Noruega aos belos reinos da Inglaterra.
                        Inclui Forgotten Saga, um novo modo de jogo rogue-lite GRÁTIS para todas as pessoas que jogam Assassin's Creed® Valhalla.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Acv;