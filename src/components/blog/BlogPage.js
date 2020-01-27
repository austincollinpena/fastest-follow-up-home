import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import "./blogpage.scss";
import "./BlogCopy.scss";
import "../copy.scss";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

const GET_BLOG = gql`
  query GetBlog($blog: String!) {
    dateSortedBlogs(slug: $blog) {
      edges {
        node {
          id
          datePublished
          body
          title
          dateUpdated
          titleTag
          metaDescription
        }
      }
    }
  }
`;

export const BlogPage = () => {
  let { blog } = useParams();
  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { blog },
    onCompleted() {
      console.log(data);
    }
  });
  if (loading)
    return (
      <>
        <Helmet>
          <header>Loading...</header>
        </Helmet>
        <main>
          <div id="blog-header-style">
            <div id="blog-header-clippath" />
          </div>
          <div className="blog-title-container loading"></div>
          <div className="blog-container loading"></div>
        </main>
      </>
    );
  if (error) return <p>Error :(, please text 541-601-5045!</p>;

  if (data)
    return (
      <>
          <Helmet>
              <title>{data.dateSortedBlogs.edges[0].node.titleTag}</title>
              <meta name="description" content={data.dateSortedBlogs.edges[0].node.metaDescription}/>
          </Helmet>
        <main>
          <div id="blog-header-style">
            <div id="blog-header-clippath" />
          </div>
          <div className="blog-shadow-provider">
            <div className="blog-title-container">
              <h1 id="blog-title" className="blog-title center white">
                {data.dateSortedBlogs.edges[0].node.title}
              </h1>
              <div className="date-container">
                <p className="bold body-text orange center">
                  Published:{" "}
                  <Moment format={"M/DD/YYYY"}>
                    {data.dateSortedBlogs.edges[0].node.datePublished}
                  </Moment>
                </p>
                {data.dateSortedBlogs.edges[0].node.dateUpdated ? (
                  <p className="bold body-text orange center">
                    Last Updated:{" "}
                    <Moment format={"M/DD/YYYY"}>
                      {data.dateSortedBlogs.edges[0].node.dateUpdated}
                    </Moment>
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="blog-container">
            <div className="blog-content">
              <ReactMarkdown source={data.dateSortedBlogs.edges[0].node.body} />
            </div>
          </div>
        </main>
      </>
    );
};
