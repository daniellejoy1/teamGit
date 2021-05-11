import React from "react";
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';


const Search = ({ word, setWord, handleSubmit }) => {
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log("Latitude is :", position.coords.latitude);
  //   console.log("Longitude is :", position.coords.longitude);
  //   console.log(position);
  //   const latitude = coords.latitude;

  // });


  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input 
                  type="text" 
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  id="foodsearch" 
                  placeholder="Search food near you..." 
                />
                <Button
                  
                  color="secondary"
                  type='submit'
                  // value={location}
                  // onClick={(e) => setLocation(handleSubmit)}
                >Search</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;