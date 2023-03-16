import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

const Author = () => (
  <Container>
    <Header title="O Autorze" />
    <Section
      title="Grzegorz Oleksa "
      body={
        <>
          <p>
            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsum
          </p>
        </>
      }
    />
  </Container>
);

export default Author;
