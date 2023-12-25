import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Container, Row, Col, Form,} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CustomNavbar from '../Navbar/CustomNavbar';
import axios from 'axios';
import { useEffect } from 'react';

export default function TaskDetails() {

  const backgroundStyle = {
    backgroundImage: `url('/background_vector2.jpg')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    margin: '0',
    padding: '1%',
    height: '100vh',
    display: 'flex',
  };

  const cardStyle = {
    backgroundColor: 'rgba(128, 0, 128, 0.7)',
    backdropFilter: 'blur(5px)',
    padding: '50px',
    borderRadius: '8px',
    width: '85%',
    marginTop: '30px',
    marginBottom: '30px',
    color: '#FFFFFF',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
  };

  const location = useLocation();
  const { state } = location;
  const { taskId, title, description, dueDate, priority, assignee, status, progress } = state;

  console.log(taskId);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  const fetchComments = async () => {

    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFoZWVtcmVobWFuMTVAZ21haWwuY29tIiwiaWF0IjoxNzAzNDg3NDIzfQ.0Z8Us_0WOTOnLhWc7ySZcJdsFLLdqdqADjuZBw0S22k';

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {

      const response = await axios.get(`http://localhost:3001/get-comment/${taskId}`, {}, {headers});

      const successMessage = response.data.message;

      setComments(response.data.comments);
    }

    catch(error) {

      const failMessage = error.response.data.message;
  
      alert(failMessage);
  
      console.log(error);
  
      if (error.response) {
        console.error('Error:', error.response.data.message);
      } else if (error.request) {
        console.error('Error: No response received');
      } else {
        console.error('Error:', error.message);
      }
  }

  };

  useEffect( ()=> {

    fetchComments();
    console.log('Comments',comments);

  }, [] );

  const handleAddComment = async () => {

    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFoZWVtcmVobWFuMTVAZ21haWwuY29tIiwiaWF0IjoxNzAzNDg3NDIzfQ.0Z8Us_0WOTOnLhWc7ySZcJdsFLLdqdqADjuZBw0S22k';

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    console.log('Comment in handleComment = ', newComment);

    try {

      const response = await axios.post(`http://localhost:3001/add-comment/${taskId}`, { comment: newComment, userId: "65872eee5de4c786c9627705"}, {headers});
      
      fetchComments();
    }

    catch(error) {

      const failMessage = error.response.data.message;
  
      alert(failMessage);
  
      console.log(error);
  
      if (error.response) {
        console.error('Error:', error.response.data.message);
      } else if (error.request) {
        console.error('Error: No response received');
      } else {
        console.error('Error:', error.message);
      }
  }
  };

  return (
    <div>
      <CustomNavbar />
      <div style={backgroundStyle}>
        <Container className="mt-4">
          {/* Task Details Card */}
          <div style={{ ...cardStyle, margin: '0 auto' }}>
            <Card bg="transparent">
              <Card.Body>
                <h1><Card.Title style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{title}</Card.Title></h1>
                <Card.Text style={{ color: '#FFFFFF', marginTop: '20px' }}>{description}</Card.Text>
                <Row style={{ marginTop: '5%' }}>
                  <Col md={6}>
                    <p style={{ color: '#FFFFFF', marginTop: '2%', fontWeight: 'bold' }}>Due Date: {dueDate}</p>
                    <p style={{ color: '#FFFFFF', marginTop: '2%' }}>Priority: {priority}</p>
                    <p style={{ color: '#FFFFFF', marginTop: '2%' }}>Assignee: {assignee}</p>
                  </Col>
                  <Col md={6}>
                     <p style={{ color: '#FFFFFF', fontWeight: 'bold'}}>Status:
                     {status ? (
                        <p className="text-success">Completed</p>) : 
                        (
                        <p className="text-danger">Pending</p>
                        )}
                     </p>
                    <p style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Progress: {progress}%</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <h1 style={{fontWeight:'bold'}}>Comments Section</h1>

            <div className="mt-4">
              <h4 style={{ color: '#FFFFFF', marginBottom: '10px' }}>Comments</h4>
              {comments.map((comment, index) => (
                <p key={index} style={{ color: '#FFFFFF' }}>{comment.text}</p>
              ))}
              <Form>
                <Form.Group controlId="commentForm">
                  <Form.Label style={{ color: '#FFFFFF' }}>Add a Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                </Form.Group>
                    <div className="d-flex justify-content-center" style={{marginTop:'2%'}}>
                        <Button variant="info" onClick={handleAddComment}>Add Comment</Button>{' '}
                    </div>

              </Form>
            </div>

          </div>
        </Container>
      </div>
    </div>
  );
}
