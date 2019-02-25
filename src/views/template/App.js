import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../../views/Home';
import About from '../../views/About';
import Contact from '../../views/Contact';

import {
  CSSTransition,
  TransitionGroup, CSSTransitionGroup
} from 'react-transition-group';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route render={({ location }) => (
                        <div>
                            <Header />
                            <TransitionGroup component="div" className="container">
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={600}
                                >
                                    <Switch location={location}>
                                        <Route path="/" exact component={Home} />
                                        <Route path="/about" exact component={About} />
                                        <Route path="/contact" exact component={Contact} />
                                        <Route render={() => <div>Not Found</div>} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>

                            <Footer />
                        </div>
                    )}/>
                </Router>
            </div>
        )
    }
}

export default App;
