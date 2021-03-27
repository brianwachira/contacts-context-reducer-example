import React from "react";
import { Container,Header } from "semantic-ui-react";
import ContactView from "./views/contact-view";

export default function App() {
  return (
    <Container style={{ height: '100vh', display: 'grid'}} verticalAlign='middle'>
      
      <Header  style={{ display: 'grid', alignItems:'center'}} textAlign='center'>
        <h1 textAlign='center'>React Hooks Context Demo</h1>
      </Header>
      <ContactView />
    </Container>
  );
}
