import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
    CardGroup,Card,
    CardImg,CardBody,
    CardTitle,CardSubtitle,
    Button,CardText
  } from 'reactstrap';

const Acessorios = () => {
    return(
        <div className="page-acessorios">
            <div className="linha" style={{marginTop: 60}}>
                <span className="texto" style={{fontFamily: 'Inter', fontSize: 40, top: -35}}>
                    Acessórios
                </span>
            </div>
            <div className="barra-options-lateral pb-2">
                <div className="title-bar-lateral pt-2 mx-3">
                    <p>Acessórios</p>
                </div>
                <div className="options-bar pt-4">
                    <ul style={{listStyle: 'none'}}>
                        <li>
                            <Link to={'/cadeiras'} className={'decoration-links'}> <p>Cadeiras Gamers</p></Link>
                            <Link to={'/fones'} className={'decoration-links'}><p>Fones Headsets</p></Link>
                            <Link to={'/controles'} className={'decoration-links'}><p>Controles</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Link to={'/promocoes'} className={'decoration-links'}>
                <div className="btn-bar-lateral pt-2">
                    Promoções
                </div>
            </Link>

            <CardGroup className="card-selector-alls col-7">
                <Card className="ms-4 card-effect" >
                <Link to={'/controleps5'} className={'decoration-links'}>
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Acessorios/Controle/ps5/ps5.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Controle Original Ps5
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 396,99</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                    </Link>
                </Card>
                <Card className="ms-4 card-effect" >
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Acessorios/Controle/xbox/xbox.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Controle Xbox Series Original
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 347,44</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Acessorios/Controle Custom/ps5/ps5-ghost.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Controle Ps5 Samurai
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 299,90</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/Acessorios/volante-ps4-1.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Volante Logitech G27 com Pedais e Câmbio
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>Valor</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
        </CardGroup>
        <CardGroup className="card-selector-footer" style={{marginTop: 255}}>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Acessorios/Controle/ps4/ps4.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Controle Ps4 Original
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 260,33</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Acessorios/Controle Custom/Xbox series XS/estrela.jpeg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Controle Xbox Series Universe Stars
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 312,44</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Acessorios/Headset/fone-2.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Headset Gamer - Exército Theme 
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 129,56</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/Acessorios/Controle Custom/ps4/fifa.png"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Controle Ps4 - Edição FIFA
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 289,90</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Acessorios;