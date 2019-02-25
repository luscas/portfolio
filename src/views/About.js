import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
            <div id="about-me">
                <h3>
                    <i className="fal fa-address-card"></i>
                    /<u>about-me</u>
                </h3>

                <div className="about">
                    Trabalho na área de desenvolvimento web há 7 anos e atualmente estou estudando Análise e Desenvolvimento de Sistemas.

                    <div className="skills">
                        <span className="badge badge-primary">laravel</span>
                        <span className="badge badge-primary">nodejs</span>
                        <span className="badge badge-primary">vuejs</span>
                        <span className="badge badge-primary">angularjs</span>
                        <span className="badge badge-primary">oop</span>
                        <span className="badge badge-primary">php</span>
                        <span className="badge badge-primary">mysql</span>
                        <span className="badge badge-primary">html</span>
                        <span className="badge badge-primary">css</span>
                        <span className="badge badge-primary">python</span>
                        <span className="badge badge-primary">java</span>
                        <span className="badge badge-primary">restful</span>
                        <span className="badge badge-primary">linux</span>
                        <span className="badge badge-primary">object-oriented-design</span>
                    </div>

                    <h4>Experiência</h4>

                    <b style={{ color: "#0747af" }}>Clique & Retire</b> - Desenvolvedor
                    <img src="https://www.cliqueeretire.com.br/favicon.png" title="Chameleon Design" width="48" alt="chameleon.design" align="right" /> <br />
                    dez de 2018 – o momento<br />
                    Rio de Janeiro, Brasil <br />
					<a href="https://www.cliqueeretire.com.br" target="_blank" style={{ fontSize: 13, color: "#0747af" }}>Visualizar trabalho &raquo;</a>
					<br /><br />

                    <b className="text-success">Chameleon Design</b> - Desenvolvedor Web
                    <img src={ require('../img/chameleon-x48.png') } title="Chameleon Design" width="48" alt="chameleon.design" align="right" /> <br />
                    jan de 2016 – o momento<br />
                    Belo Horizonte e Região, Brasil <br />
                    Responsável pela configuração de servidores linux, criação de aplicações web/mobile e
                    manutenção de projetos. <br /><br />

                    <b className="text-success">Alfa Design</b> - Analista de implantação
                    <img src={ require('../img/alfa.png') } title="Alfa Design" width="100" alt="alfadesign.in" align="right" /> <br />
                    jan de 2015 – mai de 2015<br />
                    Brasília e Região, Brasil <br />
                    Responsável pelo desenvolvimento de sistemas. <br /><br />

                    <b className="text-success">Beta Design</b> - Desenedor da web
                    <img src={ require('../img/beta.png') } title="Beta Design" width="90" align="right" /> <br />
                    mar de 2012 – dez de 2014<br />
                    Brasília e Região, Brasil <br />
                    Desenvolvimento de sistemas, portais, e-commerce, dentre outros para uma agência de
                    publicidade. <br /><br />

                    <b className="text-success">9ideais</b> - Desenvolvedor de front-end <br />
                    jul de 2011 – jan de 2012 (7 meses) <br />
                    Fortaleza e Região, Brasil <br />
                    Criação de sites utilizando as linguagens básicas: HTML, CSS e JavaScript. <br />

                    <h4 style={{ marginTop: 30 }}>Experiência de voluntariado</h4>
                    <b className="text-success">Fábrica de Software</b> - Desenvolvedor <br />
                    jul de 2018 – o momento
                </div>
            </div>
		);
	}
}

export default App;
