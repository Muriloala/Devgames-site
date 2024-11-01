import React, { useState } from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from 'reactstrap';
import { Link } from "react-router-dom";

  const HomeLancamentos = () => {
    return (
        <div className=" pt-3 Cardslan">
        <CardGroup className="cards-lancamento cards-games" type='button' style={{cursor: 'auto'}}>
          <Card className="card-effect">
          <Link to={'/mk1xbox'} className={'decoration-links'}>
            <CardImg
              alt="Card image cap"
              src="./Imagens do site/Lançamentos/Capas/mortal.jpg"
              top
              width="100%"
              className="image-card"
            />
            <CardBody className="conteudo-card">
              <CardTitle tag="h4">
              Mortal Kombat 1
              </CardTitle>
              <CardSubtitle
                className="mb-3 text-muted mt-4"
                tag="h5"
                >
                Em breve por
              </CardSubtitle>
              <CardText>
                <h4>R$ 289,90</h4>
              </CardText>
              <Button className="card-button mt-3">
                Pré-venda
              </Button>
            </CardBody>
            </Link>
          </Card>
          <Card className="ms-4 card-effect">
            <CardImg
              alt="Card image cap"
              src="./Imagens do site/Lançamentos/Capas/f123.jpg"
              top
              width="100%"
              className="image-card"
            />
            <CardBody className="conteudo-card">
              <CardTitle tag="h4">
                Formula 1 2023
              </CardTitle>
              <CardSubtitle
                className="mb-3 text-muted mt-4"
                tag="h5"
                >
                Em breve por
              </CardSubtitle>
              <CardText>
                <h4>R$ 327,50</h4>
              </CardText>
              <Button className="card-button mt-3">
                Pré-venda
              </Button>
            </CardBody>
          </Card>
          <Card className="mx-4 card-effect">
            <CardImg
              alt="Card image cap"
              src="./Imagens do site/Lançamentos/Capas/burnout.jpg"
              top
              width="100%"
              className="image-card"
            />
            <CardBody className="conteudo-card">
              <CardTitle tag="h4">
                Burnout Paradise - Remasterizado
              </CardTitle>
              <CardSubtitle
                className="mb-3 text-muted mt-4"
                tag="h5"
                >
                Em breve por
              </CardSubtitle>
              <CardText>
                <h4>R$ 177,66</h4>
              </CardText>
              <Button className="card-button mt-3">
                Pré-venda
              </Button>
            </CardBody>
          </Card>
          <Card className="card-effect">
            <CardImg
              alt="Card image cap"
              src="./Imagens do site/Lançamentos/Capas/alan.jpg"
              top
              width="100%"
              className="image-card"
            />
            <CardBody className="conteudo-card">
              <CardTitle tag="h4">
                Alan Wake - Remasterizado
              </CardTitle>
              <CardSubtitle
                className="mb-3 text-muted mt-4"
                tag="h5"
                >
                Em breve por
              </CardSubtitle>
              <CardText>
                <h4>R$ 237,45</h4>
              </CardText>
              <Button className="card-button mt-3">
                Pré-venda
              </Button>
            </CardBody>
          </Card>
      </CardGroup>
      
        </div>
       
      
    );
  };

export default HomeLancamentos;