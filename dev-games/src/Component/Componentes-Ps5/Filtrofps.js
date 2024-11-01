import React from "react";
import "../App.css";
import {
    CardGroup,Card,
    CardImg,CardBody,
    CardTitle,CardSubtitle,
    Button,CardText
  } from 'reactstrap';
import { NavLink, Link } from "react-router-dom";


const FPS = () => {
    return(
        <div className="page-acessorios">
            <div className="linha" style={{marginTop: 60}}>
                <span className="texto" style={{fontFamily: 'Inter', fontSize: 40, top: -35}}>
                    Ação
                </span>
            </div>
            <div className="barra-options-lateral pb-2">
                <div className="title-bar-lateral pt-2 mx-3">
                    <p>PlayStation 5</p>
                </div>
                <div className="options-bar pt-4">
                    <ul style={{listStyle: 'none'}}>
                        <li>
                        <NavLink to={'/acao'} className={'decoration-links'}><p>Ação</p></NavLink>
                            <p>Aventura</p>
                            <p>Simulador</p>
                            <p>Corrida</p>
                            <p>Esportes</p>
                            <p>FPS</p>
                            <p>Infantil</p>
                            <NavLink to={'/luta'} className={'decoration-links'}><p>Luta</p></NavLink>
                            <p>Mundo Aberto</p>
                            <p>RPG</p>
                            <p>Terror</p>
                            <NavLink to={'/jogosps5'} className={'decoration-links'}><p>Alls</p></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <NavLink to={'/'} className={'decoration-links'}>
                <div className="btn-bar-lateral pt-2">
                    Lançamentos
                </div>
            </NavLink>
            <NavLink to={'/promocoes'} className={'decoration-links'}>
                <div className="btn-bar-lateral pt-2">
                    Promoções
                </div>
            </NavLink>

            <CardGroup className="card-selector-alls col-7">
                <Card className="ms-4 card-effect" >
                <Link to={'/buypagespiderps5'} className={'decoration-links'}>
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS5 jogos/FPS/battlefield-2074.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Battlefield 2042
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 155,44</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                            Comprar
                        </Button>
                    </CardBody>
                    </Link>
                </Card>
                <Card className="ms-4 card-effect" >
                <Link to={'/streetps5'} className={'decoration-links'}>
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS5 jogos/FPS/returnal.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                         Returnal
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 239,90</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                    </Link>
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS5 jogos/FPS/CofD-MW-2.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Call Of Duty Moden Warfare
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 249,99</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/PS5 jogos/FPS/Call-Of-Duty-Vanguard.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                         Call Of Duty Vanguard
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 175,63</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
        </CardGroup>
        
    <CardGroup className="card-selector-footer" style={{marginTop: -103}}>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS5 jogos/Terror/biohazard-4.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Resident Evil
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 207,45</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS5 jogos/My/the-crew-2.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        The Crew 2
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 277,65</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS5 jogos/Ação/Demons soul.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Demons Soul
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 74,21</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/PS5 jogos/Ação/godfall.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Godfall
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 247,17</h4>
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

export default FPS;