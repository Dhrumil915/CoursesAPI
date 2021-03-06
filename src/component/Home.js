import React,{useEffect } from 'react'
import {  Jumbotron,Container,Button } from "reactstrap";

function Home() {

    useEffect(() => {
        document.title = "Home Page"; 
     },[]);

    return (
        <div>
            <Jumbotron className="text-center">
                <h1>Dhrumil Panchal</h1>
                <p>
                    This is developed by Dhrumil Panchal for learning purpose. its
                    backend is on spring bootand frontend on react js
                </p>
                <Container>
                    <Button color="primary" outline>Start Using</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home
