import React, { useState, useEffect } from 'react'
import Course from './Course'
import base_url from "./../api/bootApi"
import axios from "axios";
import { toast } from "react-toastify";

function AllCourses() {

    useEffect(() => {
       document.title = "All Courses"; 
       getAllCoursesFromServer();
    },[]);

    //function to call server
    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                console.log(response.data)
               toast.success("cousres has been loaded")
                setCourses(response.data)
            },
            (error)=>{
                //for error
                console.log(error)
                toast.error("something went wrong...")
            }
        )
    };
    //calling loading course function
    


    const [courses,setCourses] = useState([
       
    ]);

    const removeCourseById = (id) => {
        setCourses(courses.filter((c)=> c.id != id ))
    }

    return (
        <div>
            <h1>All courses</h1>
            <p>List of courses are follow</p>
            {courses.length > 0 
            ? courses.map((item) => <Course key={item.id} course={item} update={removeCourseById()}/>)
            : "No courses"}
        </div>
    )
}

export default AllCourses
