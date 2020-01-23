import React, {useState} from 'react';
import {HomePageContainer} from "./components/home/HomePageContainer";
import 'normalize.css';
import './components/global-styles.scss';
import {Nav} from "./components/shared-components/Nav";
import {AlertBox} from "./components/home/AlertBox";
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";

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
        <ApolloProvider client={client}>
            <Nav handleInputClass={handleInputClass}/>
            <HomePageContainer>
                <AlertBox showInputClass={showInputClass}/>
            </HomePageContainer>

        </ApolloProvider>
    </div>
  );
}

export default App;
