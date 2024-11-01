import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
    CardGroup,Card,
    CardImg,CardBody,
    CardTitle,CardSubtitle,
    Button,CardText
  } from 'reactstrap';

const Fones = () => {
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
                            <Link to={'/cadeiras'} className={'decoration-links'}><p>Cadeiras Gamers</p></Link>
                            <p>Fones Headsets</p>
                            <Link to={'/controles'} className={'decoration-links'}><p>Controles</p></Link>
                            <Link to={'/acessorios'} className={'decoration-links'}><p>Alls</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Link to={'/promocoes'} className={'decoration-links'}>
                <div className="btn-bar-lateral pt-2">
                    Promoções
                </div>
            </Link>

            <CardGroup className="card-selector-footer" style={{marginTop: -320 }}>
                <Card className="ms-4 card-effect" >
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Acessorios/Headset/fone-3.png"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Headset Gamer Paradise - Azul Exército
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 245,50</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="ms-4 card-effect" >
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Acessorios/Headset/white-444.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Headset Gamer NJR - Branco
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>149,90</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Acessorios/Headset/pulse.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Headset Original Playstation - Edição Ps5 Branco
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 267,32</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/Acessorios/Headset/fone-2023.jpeg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Headset Gamer VE - Black Emoji
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 197,90</h4>
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

export default Fones;