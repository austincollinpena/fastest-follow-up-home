import React from "react";
import { useParams } from "react-router-dom";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";
import "./blogpage.scss";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


const GET_BLOG = gql`
    query GetBlog($blog: String!){
        dateSortedBlogs(slug: $blog){
            edges{
                node{
                    id
                    datePublished
                    body
                }
            }
        }
    }

`;

export const BlogPage = () => {
  let { blog } = useParams();
    const { loading, error, data } = useQuery(GET_BLOG, {
        variables: {blog},
        onCompleted: data => {
            let {id, datePublished, body} = data.dateSortedBlogs.edges[0].node;
        }
    });
    if (loading) return <p>Loading.....</p>;
    if (error) return <p>Error :(</p>;
    if (data) return(
        <main className="decorative-background">
            <div className="blog-container">
                <p>I'm a giraffe {data.dateSortedBlogs.edges[0].node.body}</p>

            </div>
        </main>
    )
};

// {data.dateSortedBlogs.edges[0].node.body}