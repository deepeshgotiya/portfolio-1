import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./footer.scss";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white footer-design"
      style={{ backgroundColor: "#212529" }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <MDBBtn
            rippleColor="light"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fab fa-facebook-f" />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-twitter" />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-google" />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-instagram" />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-linkedin" />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color="link"
            floating
            size="lg"
            className="text-light m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center text-light p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © Deepesh Gotia 2024 Copyright:
      </div>
    </MDBFooter>
  );
}
