import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import railsImage from "../src/Images/rails.png";
import reactImage from "../src/Images/react.webp";
import graphqlImage from "../src/Images/graphql.jpg";
import "./about-me.scss";

const Technologies = () => {
  var items = [
    {
      name: "Ruby On Rails",
      description:
        "Ruby on Rails is a robust web application framework renowned for its simplicity and productivity. With its convention-over-configuration approach and Model-View-Controller architecture, Rails streamlines development by providing defaults and separating concerns. Active Record simplifies database interactions, while RESTful routing facilitates the creation of scalable APIs. Scaffolding expedites prototyping, and built-in testing frameworks ensure application reliability. Its vibrant community and extensive ecosystem make Rails ideal for building dynamic web applications, content management systems, e-commerce platforms, and more, prioritizing developer productivity and rapid iteration.",
      image: railsImage,
    },
    {
      name: "ReactJs",
      description:
        "React.js, developed by Facebook, is a popular JavaScript library for building user interfaces. Renowned for its declarative and component-based approach, React allows developers to create reusable UI components, simplifying the process of building complex user interfaces. Its virtual DOM efficiently updates and renders components, optimizing performance by minimizing DOM manipulation. React's unidirectional data flow and state management through props and state make it predictable and easy to reason about, facilitating the development of interactive and responsive web applications. Additionally, React's ecosystem, including tools like React Router and Redux, enhances its capabilities for building single-page applications, enabling developers to create scalable and maintainable front-end experiences.",
      image: reactImage,
    },
    {
      name: "Graphql",
      description:
        "GraphQL is a query language for APIs and a runtime environment for executing those queries. Developed by Facebook, GraphQL provides a flexible and efficient approach to querying and manipulating data. Unlike traditional RESTful APIs, GraphQL allows clients to request only the specific data they need, minimizing over-fetching and under-fetching of data. Its strongly-typed schema enables clients to discover and understand the available data and operations. Additionally, GraphQL supports real-time data updates through subscriptions, enabling reactive and interactive applications. With its introspective nature and powerful developer tooling, GraphQL empowers developers to build robust and scalable APIs that meet the evolving needs of modern applications.",
      image: graphqlImage,
    },
  ];

  return (
    <div>
      <h1>Technology I am acquainted with,</h1>
      <Carousel className="carousel-container">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

function Item(props) {
  return (
    <Paper className="carousel-container">
      <h2 className="tech-heading">{props.item.name}</h2>
      <p className="tech-description">{props.item.description}</p>
      <img
        className="tech-image"
        src={props.item.image}
        alt={props.item.name}
      />
    </Paper>
  );
}

export default Technologies;

// https://github.com/Learus/react-material-ui-carousel
