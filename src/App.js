import React from 'react'
import { ToastContainer,toast } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home';
import Course from './component/Course';
import AllCourses from './component/AllCourses';
import AddCourse from './component/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Header from "./component/Header";
import Menu from "./component/Menu";
import { BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  const btnhandle = () =>
    toast("this is my first message")
  
  return (
    <div>
      
   <Router>
   <ToastContainer />
       <Container>
         <Header/>
         <Row>
           <Col md={4}>
             <Menu/>
             </Col>
           <Col md={8}>
             <Route path="/" component={Home} exact/>
             <Route path="/add-course" component={AddCourse} exact/>
             <Route path="/view-courses" component={AllCourses} exact/>
           </Col>
         </Row>
       </Container>
   </Router>

    </div>
  );
}

export default App;
