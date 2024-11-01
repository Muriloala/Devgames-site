import React from "react";
import "../App.css";

const Footer  = () => {
    return (
        <footer className="footer ">
            <div className="items-footer">
                <img className="img-footer" src="./Imgs/Footer/logo-footer.png"/>
                <div className="text-iformations-footer">
                    <h5 style={{fontWeight: 'bold', color: '#ffffff'}}>Atendimento</h5>
                    <h5>(64) x xxxx-xxxx</h5>
                    <p>Seg á Sex 8:30h às 18h <br/>Sábados 9h às 13h</p>
                </div>
                <div className="text-history-footer" style={{position: 'absolute'}}>
                    <h5 style={{fontWeight: 'bold', color: '#ffffff'}}>Sobre</h5>
                    <p> 
                        "DEV Games" é um site <br/> 
                        desenvolvido exclusivamente <br/>
                        para os jogadores mais <br/>
                        rentáveis. Produtos de <br/>
                        altissíma qualidade e de <br/>
                        melhor desempenho do mercado.
                    </p>
                </div>
                <div className="socialmedia-footer" style={{position: 'absolute'}}>
                    <h5 style={{fontWeight: 'bold', marginLeft: 25, color: '#ffffff'}}>Nossas Redes Sociais</h5>
                    <ul style={{listStyle: 'none'}}>
                        <li>
                            <div type='button'><img src="./Imgs/Footer/faceicon.png" className="img-meta-icon-footer"/>
                                <a href="https://www.facebook.com/GAMESRETROCAMPINAS/" className="txt-footer-icon decoration-links">Facebook</a>
                            </div>
                            <div type='button'><img src="./Imgs/Footer/instaicon.png" className="img-meta-icon-footer"/>
                                <a href="https://instagram.com/murilo.ala2006?igshid=MzNlNGNkZWQ4Mg==" className="txt-footer-icon decoration-links">Instagram</a>
                            </div>
                            <div type='button'><img src="./Imgs/Footer/tiktokicon.png" className="img-alls-icon-footer "/>
                                <a href="https://www.tiktok.com/@developersgames?lang=pt-BR" className="txt-footer-icon decoration-links">TikTok</a>
                            </div>
                            <div type='button'><img src="./Imgs/Footer/twittericon.png" className="img-alls-icon-footer"/>
                                <a href="https://twitter.com/Jogosps4" className="txt-footer-icon decoration-links">Twitter</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <p className="copyright mb-0 mt-4">Copyright &copy; 2023 - Developers Games</p>
            </div>
        </footer>
    )
}

export default Footer;