import React from "react";
import "../App.css";
import {
    CardGroup,Card,
    CardImg,CardBody,
    CardTitle,CardSubtitle,
    Button,CardText
  } from 'reactstrap';
  import { NavLink } from "react-router-dom";

const ConsoleXBOX = () => {
    return(
        <div className="page-acessorios">
            <div className="linha" style={{marginTop: 60}}>
                <span className="texto" style={{fontFamily: 'Inter', fontSize: 40, top: -35}}>
                    Xbox Séries X | S
                </span>
            </div>
            <div className="barra-options-lateral pb-2">
                <div className="title-bar-lateral pt-2 mx-3">
                    <p>Consoles Xbox Séries</p>
                </div>
                <div className="options-bar pt-4">
                    <ul style={{listStyle: 'none'}}>
                        <li>
                            <p>Customizado</p>
                            <p>Original</p>
                            <p>Alls</p>
                        </li>
                    </ul>
                </div>
            </div>
            <NavLink to={'/promocoes'} className={'decoration-links'}>
                <div className="btn-bar-lateral pt-2">
                    Promoções
                </div>
            </NavLink>

            <CardGroup className="card-selector-alls col-7">
                <Card className="ms-4 card-effect" >
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Consoles/Xbox/xbox.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Xbox Series X
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>R$ 4.349</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="ms-4 card-effect" >
                <NavLink to={'/xboxnormal'} className={'decoration-links'}>
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Consoles/Xbox/xboxs.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Xbox Series S
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>3.149</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                    </NavLink>
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Consoles/Xbox/xboxpersonfire.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Xbox Series X Lava
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>4.649</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/Consoles/Xbox/xboxspersonall.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Xbox Series S Desenho
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>3.349</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
        </CardGroup>
        <CardGroup className="card-selector-footer" style={{marginTop: 200}}>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Consoles/Xbox/xboxspersonstar.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Xbox Series S Star Wars
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>3.349</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="ms-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Consoles/Xbox/xboxpersonhog.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Xbox Series X Hogwarts Legacy
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>4.449</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="mx-4 card-effect">
                    <CardImg
                        alt="Card image cap"
                        src="./Imagens do site/Consoles/Xbox/xboxpersonblue.jpg"
                        top
                        width="100%"
                        className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Xbox Series X Raio
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>4.449</h4>
                        </CardText>
                        <Button className="card-button mt-3">
                        Comprar
                        </Button>
                    </CardBody>
                </Card>
                <Card className="card-effect">
                    <CardImg
                    alt="Card image cap"
                    src="./Imagens do site/Consoles/Xbox/xboxusado halo.jpg"
                    top
                    width="100%"
                    className="image-card"
                    />
                    <CardBody className="conteudo-card">
                        <CardTitle tag="h4">
                        Xbox Series X Halo Edition Usado
                        </CardTitle>
                        <CardSubtitle
                        className="mb-3 text-muted mt-4"
                        tag="h5"
                        >
                        A partir de
                        </CardSubtitle>
                        <CardText>
                        <h4>3.749</h4>
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

export default ConsoleXBOX;