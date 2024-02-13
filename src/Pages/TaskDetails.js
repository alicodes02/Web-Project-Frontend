import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CustomNavbar from '../Navbar/CustomNavbar';
import axios from 'axios';

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

  const [file, setFile] = useState(null);
  const [fileInput, setFileInput] = useState('');

  const [comments, setComments] = useState([]);
  const [fileAttachments, setFileAttachments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = async () => {
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFoZWVtcmVobWFuMTVAZ21haWwuY29tIiwiaWF0IjoxNzAzNDg3NDIzfQ.0Z8Us_0WOTOnLhWc7ySZcJdsFLLdqdqADjuZBw0S22k';

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/get-comment/${taskId}`, { headers });

      const successMessage = response.data.message;
      setComments(response.data.comments);
      setFileAttachments(response.data.fileAttachments);
    } catch (error) {
      const failMessage = error.response?.data?.message || 'An error occurred';

      alert(failMessage);

      console.log(error.response);

      if (error.response) {
        console.error('Error:', error.response.data.message);
      } else if (error.request) {
        console.error('Error: No response received');
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    console.log('Comments:', comments);
    console.log('File Attachments:', fileAttachments);
  }, [comments, fileAttachments]);

  const handleAddComment = async () => {
    const formData = new FormData();
    formData.append('comment', newComment);
    formData.append('userId', '65872eee5de4c786c9627705');
    formData.append('file', file);
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFoZWVtcmVobWFuMTVAZ21haWwuY29tIiwiaWF0IjoxNzAzNDg3NDIzfQ.0Z8Us_0WOTOnLhWc7ySZcJdsFLLdqdqADjuZBw0S22k';

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/add-comment/${taskId}`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      alert(response.data.message);

      fetchComments();
    } catch(error) {
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
                    <p style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Status:
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

            <h1 style={{ fontWeight: 'bold' }}>Comments Section</h1>

                <div className="mt-4">
                      <h4 style={{ color: '#FFFFFF', marginBottom: '10px' }}>Comments</h4>
                      {comments.map((comment, index) => (
                        <div key={index} style={{ color: '#FFFFFF', marginBottom: '20px' }}>
                          {comment.text && <p>{comment.text}</p>}
                        </div>
                      ))}
                      
                      <h4 style={{ color: '#FFFFFF', marginBottom: '10px' }}>File Attachments</h4>
                      {fileAttachments.map((fileAttachment, index) => (
                        <div key={index} style={{ color: '#FFFFFF', marginBottom: '20px' }}>
                          <p>Attached File:</p>
                          <p>Filename: {fileAttachment.filename}</p>
                          <a
                            href={`data:application/octet-stream;base64,${fileAttachment.path}`}
                            download={fileAttachment.filename}
                            style={{ color: 'lightblue' }}
                          >
                            {fileAttachment.filename}
                          </a>
                        </div>
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
                <div className="d-flex justify-content-center" style={{ marginTop: '2%' }}>
                  <Button
                    variant="info"
                    onClick={handleAddComment}
                    className="btn btn-dark"
                    style={{ backgroundColor: 'purple', marginBottom: '1%' }}
                  >
                    Add Comment
                  </Button>{' '}
                </div>
              </Form>
              <Form.Group controlId="fileUpload">
                <Form.Label style={{ color: '#FFFFFF' }}>Upload File</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setFileInput(e.target.value);
                  }}
                />
              </Form.Group>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
