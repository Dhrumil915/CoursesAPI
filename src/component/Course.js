import React from 'react'
import { Card, CardBody, CardText, CardTitle, CardSubtitle,CardFooter, Container, Button } from "reactstrap";
import axios from "axios";
import base_url from "./../api/bootApi"
import { toast } from 'react-toastify';

function Course({ course, update }) {

    const deleteCourse = (id) =>{
        axios.delete(`${base_url}/courses/${id}`).then(

            (response)=>{
                //success
                console.log(response)
              toast.success("cousres Deleted")
              update(id)
                
            },
            (error)=>{
                //for error
                console.log(error)
                toast.error("something went wrong...")
            }
        )
    }

    return (
        <div>
            <Card className="text-center">
                <CardBody>
                    <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container className="text-center">
                        <Button color="danger" onClick={()=>{deleteCourse(course.id)}}>DELETE</Button>
                        <Button color="warning ml-3">UPDATE</Button>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
}

export default Course
