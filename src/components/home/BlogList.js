import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import "./blogs.scss";
import {Link} from "react-router-dom"
import backgroundRight from "../../media/angled-decoration.svg";
import backgroundLeft from "../../media/background-left.svg";


const GET_BLOGS = gql`
  {
    dateSortedBlogs(orderBy: "published_date") {
      edges {
        node {
          id
          title
          snippet
          icon
          slug
        }
      }
    }
  }
`;

export const BlogList = () => {
  const { loading, error, data } = useQuery(GET_BLOGS, {
    onCompleted: data => {
      const dataToMap = data.dateSortedBlogs.edges;
    }
  });
  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error :(</p>;
  if (data)
    return (
      <div className="blogs">
        {data.dateSortedBlogs.edges.map((item, index) => (
          <Link key={item.node.id} id={item.node.slug} to={`blog/${item.node.slug}`}>
            <div
              // style={{backgroundImage: 'url(' + backgroundLeft + ')'}}
              style={
                index % 2 === 0
                  ? { backgroundImage: "url(" + backgroundLeft + ")" }
                  : { backgroundImage: "url(" + backgroundRight + ")" }
              }
              className="blog-list-container center"
            >
              <h3 className="secondary-title semi-bold ">{item.node.title}</h3>
              <p className="body-text">READ THIS BLOG IF</p>
              <p className="subtitle semi-bold">{item.node.snippet}</p>
              <img src={item.node.icon} />
              <p className="click-to-read body-text">Click To Read</p>
            </div>
          </Link>
        ))}
      </div>
    );
};

// Get markdown--
// {data.dateSortedBlogs.edges.map(item => <ReactMarkdown source={item.node.body} />)}
// style={backgroundImage: {index % 2 === 0 ? `url(${backgroundRight})` : `url(${backgroundLeft})`}}
