import React,{useEffect, useState } from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import axios from "axios";
import base_url from "./../api/bootApi"
import { toast } from 'react-toastify';

function AddCourse() {

    useEffect(() => {
        document.title = "Add Courses"; 
        postDatatoServer(course);
     },[]);

     const [course,setCourse] = useState({});

     const handleForm = (e) => {
        console.log(course)
        e.preventDefault();
     }

     const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                //success
                console.log(response)
               toast.success("cousres has been Added")
                
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
            <h1 className="text-center my-3">Fill Course here</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId"
                     onChange={(e)=>{
                         setCourse({...course, id:e.target.value })
                        }}
                     />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title" onChange={(e)=>{setCourse({...course,title:e.target.value})}}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" name="description" id="description" style={{height:150}} onChange={(e)=>{setCourse({...course,description:e.target.value})}}/>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button type="reset" color="warning ml-2" onClick={()=>{setCourse({})}}>Clear Course</Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddCourse


//2.41