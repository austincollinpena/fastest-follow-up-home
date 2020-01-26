import React, { useState, useEffect } from "react";
import { HomePageContainer } from "./components/home/HomePageContainer";
import "normalize.css";
import "./components/global-styles.scss";
import { Nav } from "./components/shared-components/Nav";
import { AlertBox } from "./components/home/AlertBox";
import { BlogPage } from "./components/blog/BlogPage";
import { Footer } from "./components/shared-components/Footer";
import ScrollToTop from "./components/helpers/ScrollToTop";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";

function App() {
  const [showInputClass, setShowInputClass] = useState(false);

  const handleInputClass = () => {
    setShowInputClass(true);
  };

  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql/"
  });

  useEffect(() => {
    setTimeout(() => {
      setShowInputClass(false);
    }, 5000);
  }, [showInputClass]);


  return (
    <div className="App">
      <Router>
        <ApolloProvider client={client}>
          <Nav handleInputClass={handleInputClass} />
          <ScrollToTop>
            <Switch>
              <Route path="/blog/:blog">
                <BlogPage />
              </Route>
              <Route exact path="/">
                <HomePageContainer>
                  <AlertBox showInputClass={showInputClass} />
                </HomePageContainer>
              </Route>
            </Switch>
          </ScrollToTop>
          <Footer />
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
