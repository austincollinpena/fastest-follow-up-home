import React, {useState} from 'react';
import {HomePageContainer} from "./components/home/HomePageContainer";
import 'normalize.css';
import './components/global-styles.scss';
import {Nav} from "./components/shared-components/Nav";
import {AlertBox} from "./components/home/AlertBox";
import {BlogPage} from "./components/blog/BlogPage";

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    const [showInputClass, setShowInputClass] = useState(false);

    const handleInputClass = () => {
        setShowInputClass(true)
    };

    const client = new ApolloClient({
      uri: "http://localhost:8000/graphql/"
    });

    return (
    <div className="App">
        <Router>
            <ApolloProvider client={client}>
                <Nav handleInputClass={handleInputClass}/>
                <Switch>
                <Route path="/blog/:blog">
                    <BlogPage/>
                </Route>
                <Route exact path="/">
                    <HomePageContainer>
                        <AlertBox showInputClass={showInputClass}/>
                    </HomePageContainer>
                    <Link to='blog/'>Click me!!!!</Link>
                </Route>
            </Switch>
            </ApolloProvider>
        </Router>
    </div>
  );
}

export default App;
