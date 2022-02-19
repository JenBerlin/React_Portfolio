import React from "react";
import ProjectCard from "../components/ProjectCard";
import data from "../data/data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Project() {
  return (
    <>
      <Container>
        <Row>
          {data.map((data) => (
            <ProjectCard
              title={data.name}
              description={data.description}
              image={data.image}
              gitLink={data.GitHub}
              deployedLink={data.Deployed}
              gitHub="GitHub Link"
              deployed="Deployed Link"
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Project;
