import React, { Component } from 'react';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<ul className="nav justify-content-center category">
					<li className="nav-item">
						<a className="nav-link active" href="#" data-category="*">TODOS</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#" data-category="front">FRONT END</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#" data-category="back">BACK END</a>
					</li>
				</ul>

				<div className="portfolio row">
					<div className="col-12 col-lg-6 col-xl-4 portfolio--item">
						<div className="card">
							<img src={ require("../img/chameleon.png") } alt="" />
							<div className="portfolio--hover">
								<h1>Chameleon</h1>
								<a href="./img/chameleon.png" target="_blank">VISUALIZAR</a>
							</div>
						</div>
					</div>

					<div className="col-12 col-lg-6 col-xl-4 portfolio--item">
						<div className="card">
							<img src={ require("../img/vestibulei.png") } alt="" />
							<div className="portfolio--hover">
								<h1>Vestibulei</h1>
								<a href="#">VISUALIZAR</a>
							</div>
						</div>
					</div>

					<div className="col-12 col-lg-6 col-xl-4 portfolio--item">
						<div className="card">
							<img src={ require("../img/field.png") } alt="" />
							<div className="portfolio--hover">
								<h1>Field</h1>
								<a href="#">VISUALIZAR</a>
							</div>
						</div>
					</div>

					<div className="col-12 col-lg-6 col-xl-4 portfolio--item">
						<div className="card">
							<img src={ require("../img/race.png") } alt="" />
							<div className="portfolio--hover">
								<h1>Race Hostel</h1>
								<a href="#">VISUALIZAR</a>
							</div>
						</div>
					</div>

					<div className="col-12 col-lg-6 col-xl-4 portfolio--item">
						<div className="card">
							<img src={ require("../img/clique-retire.png") } alt="" />
							<div className="portfolio--hover">
								<h1>Clique & Retire</h1>
								<a href="#">VISUALIZAR</a>
							</div>
						</div>
					</div>

					<div className="col-12 col-lg-6 col-xl-4 portfolio--item">
						<div className="card">
							<img src={ require("../img/hatch.png") } alt="" />
							<div className="portfolio--hover">
								<h1>Hatch</h1>
								<a href="#">VISUALIZAR</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
