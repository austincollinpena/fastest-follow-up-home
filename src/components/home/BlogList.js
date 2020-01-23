import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import "./blogs.scss";
import ReactMarkdown from "react-markdown";



const GET_BLOGS = gql`    
    {
        dateSortedBlogs(orderBy: "published_date"){
            edges{
                node{
                    id
                    title
                    isPublished
                    datePublished
                    body
                }
            }
        }
    }
`




export const BlogList = () => {
    const {loading, error, data} = useQuery(GET_BLOGS, {
        onCompleted: data => {
            console.log(data)
        }
    });



    if(loading) return (<p>Loading.....</p>)
    if(error) return( <p>Error :(</p>)
    if (data) return(
        <div className="fuckyou">{data.dateSortedBlogs.edges.map(item => <ReactMarkdown source={item.node.body} />)}</div>
    )



};
