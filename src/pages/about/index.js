import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  interests,
  meta,
  worktimeline,
  skills,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
  <Col lg="5">
    <h3 className="color_sec py-4">Skills</h3>
  </Col>
  <Col lg="7">
    <div>
      <h3 className="progress-title">Proficient in</h3>
      <p>Python, Java, C, C++, Javascript, HTML, CSS, and Racket</p>
    </div>
    <div className="mt-4">
      <h3 className="progress-title">Soft skills</h3>
      <p>Public Speaking, Conflict Resolution, Teamwork</p>
    </div>
  </Col>
</Row>
<Row className="sec_sp">
         <Col lg="5">
           <h3 className="color_sec py-4">{interests.title}</h3>
        </Col>
       <Col lg="7" className="d-flex align-items-center">
        <div>
          <p>{interests.interestlist}</p>
        </div>
      </Col>
      </Row>

        
      </Container>
    </HelmetProvider>
  );
};
