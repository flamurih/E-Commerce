import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Button, Form, InputGroup, Row, Col, FormControl, Container } from 'react-bootstrap';
import './Login.css';


export default function Login() {
  return (
    <>
        <Container className='mt-5'>
        <Form.Label>Name</Form.Label>
            <Form.Control
            type="text"
            style={{maxWidth:"500px"}}
            />
        <Form.Label>Surname</Form.Label>
            <Form.Control
            type="text"
            style={{maxWidth:"500px"}}
            />
        <Form.Label>Email</Form.Label>
        <InputGroup>
            <FormControl
            style={{maxWidth:"500px"}}
            placeholder="Email"
            />
            <InputGroup.Text>@example.com</InputGroup.Text>
        </InputGroup>
 
        
        <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            style={{maxWidth:"500px"}}
            />
            <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers, and
            must not contain spaces, special characters, or emoji.
            </Form.Text>  
        </Container>
    </>
  );
}



