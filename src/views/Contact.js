import React, { Component } from 'react';

import Footer from '../components/Footer';

class App extends Component {
	render() {
		return (
			<div id="contact">
                <h3>
                    <i className="fal fa-comment-alt"></i>
                    /<u>contact</u>
                </h3>

                <form method="GET" autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="to" className="form-control" id="email" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">Não se preocupe, seu e-mail não será divulgado.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Assunto</label>
                        <input type="text" name="subject" className="form-control" id="subject" aria-describedby="subjectHelp" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea id="message" name="text" className="form-control"></textarea>
                    </div>

                    <button type="submit" className="btn btn-rounded btn-success">Continuar</button>
                </form>
			</div>
		);
	}
}

export default App;
