import React from "react";
import { Button, InputGroup,Input } from "reactstrap";
import { Link } from "react-router-dom";

const Consoleps5normal = () => {
    return  (
            <div className="body-buy-page" style={{width: 1250}}>
                <div className="lado-direito-compra mt-5">
                    <h1> Console PlayStation 5 1TB</h1>
                    <h2> R$ 3999,97</h2>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/cartaoicon.png" className="imgs-buypage-icon-payment"/>
                        até 12 vezes de <a>R$ 366,66</a>
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/boletoicon.png" style={{width: 40, height: 42, marginLeft: 5, marginRight: 10}}/>
                        <a>R$ 3999,97</a> no boleto
                    </p>
                    <p className="payment-cartao mb-0">
                        <img src="./Imgs/Buypage/pixicon.png" style={{width: 38, height: 35, marginLeft: 5, marginRight: 12}}/>
                        <a>R$ 3.799,97</a> via Pix com 5% off 
                    </p>
                    <Button className="btn-comprar">
                        Comprar
                    </Button>
                </div>
                <div className="img-principal-compra mt-5">
                    <img className="img-demontrativa pt-4" src="./Imgs/Buypage/ps5.jpg"/>
                </div>
                <div className="imgs-secundarias mt-2 pb-2">
                    <img className="imgmini01" src="./Imgs/Buypage/minips5.png" Type="button"/>
                    <img className="mx-4 imgmini02" src="./Imgs/Buypage/minips52.jpeg" Type="button"/>
                    <img className="imgmini03" src="./Imgs/Buypage/minips53.jpg" Type="button"/>
                </div>
                <div className="Informations">
                    <div className="description-line mt-5">
                        <span className="description-text px-4" style={{fontSize: 30}}>
                            Info
                        </span>
                        <p style={{color: '#ffffff', fontSize: 18, fontFamily: 'Recursive', fontWeight: 'bold'}}>
                        Com seu console PlayStation 5 você terá entretenimento garantido todos os dias. Sua tecnologia 
                        foi criada para colocar novos desafios para jogadores novatos e especialistas. O PlayStation renovou 
                        as expectativas do mundo virtual com este novo console e seu grande desempenho. Tem uma interface de 
                        usuário mais rápida e fácil de navegar do que os modelos anteriores. Além disso, você poderá jogar por 
                        horas desafiando milhões de oponentes em todo o mundo que estão esperando por novos desafios.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Consoleps5normal;