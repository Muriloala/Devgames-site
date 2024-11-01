import React from "react";
import "../App.css";
import {
    CardGroup,Card,
    CardImg,CardBody,
    CardTitle,CardSubtitle,
    Button,CardText
  } from 'reactstrap';
import { NavLink, Link } from "react-router-dom";


const JogosPS4 = () => {
    return(
        <div className="page-acessorios">
            <div className="linha" style={{marginTop: 60}}>
                <span className="texto" style={{fontFamily: 'Inter', fontSize: 40, top: -35}}>
                    Jogos de PS4
                </span>
            </div>
            <div className="barra-options-lateral pb-2">
                <div className="title-bar-lateral pt-2 mx-3">
                    <p>PlayStation 4</p>
                </div>
                <div className="options-bar pt-4">
                    <ul style={{listStyle: 'none'}}>
                        <li>
                            <p>Ação</p>
                            <p>Aventura</p>
                            <p>Simulador</p>
                            <p>Corrida</p>
                            <p>Esportes</p>
                            <p>FPS</p>
                            <p>Infantil</p>
                            <p>Luta</p>
                            <p>Mundo Aberto</p>
                            <p>RPG</p>
                            <p>Terror</p>
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
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/assassins.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Assassin's Creed Unity
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
                </Card>
                <Card className="ms-4 card-effect" >
                <Link to={'/fifaps4'} className={'decoration-links'}>
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/fifa.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        FIFA 2023
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 247,75</h4>
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
                        src="./Imagens do site/PS4 jogos/smmm.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Spider Man Miles Morales
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 112,46</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/PS4 jogos/re4.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Resident Evil 4
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>249,99</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
        </CardGroup>
        <CardGroup className="card-selector-alls col-7" style={{top: 830}}>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/gta.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Grand Theft Auto 5
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 89,90</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/gofw.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        God Of War Ragnarok
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 247,12</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/mk11.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Mortal Kombat 11
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 112,46</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/PS4 jogos/e23.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        eFootbal 2023 - Premium Edition
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
                </Card>
        </CardGroup>
        <CardGroup className="card-selector-alls col-7" style={{top: 1395}}>
                <Card className="ms-4 card-effect">
                <Link to={'/gran7'} className={'decoration-links'}>
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/gt7.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Gran Turismo Motorsport 7
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
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/nba.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        NBA 2K 23
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>249,99</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/cofdmw.jpg"
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
                        <h4>R$ 352,31</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/PS4 jogos/uncharted.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Uncharted
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 152,31</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
    </CardGroup>
    <CardGroup className="card-selector-alls col-7" style={{top: 1950}}>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/crash.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Crash
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 77,45</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/ghost.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Ghost
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
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/tlofus2.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        The Last Of US Part 2
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>249,99</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/PS4 jogos/f1.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        F1 2023
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 327,50</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
    </CardGroup>
    <CardGroup className="card-selector-footer" style={{marginTop: 1567}}>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/horizon.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Horizon
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
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/rat.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Ratchet Clank
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
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/PS4 jogos/the crew.jpg"
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
                        <h4>R$ 125,75</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/PS4 jogos/jump.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Jump Force
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 136,60</h4>
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

export default JogosPS4;