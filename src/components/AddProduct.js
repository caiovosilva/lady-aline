import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class AddProduct extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      price: '',
      brand: '',
      info: ''
    }
  }

  render () {
    return (
      <div className='card-body'>
        <Form>
          <Form.Group controlId='formBasicTitle'>
            <Form.Label>Título</Form.Label>
            <Form.Control
              type='string'
              value={this.state.title} 
              onChange={(e) => {
                this.setState({
                  title: e.target.value
                })
              }} 
            />
          </Form.Group>
          <Form.Group controlId='formBasicPrice'>
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type='price'
              value={this.state.price} 
              onChange={(e) => {
                this.setState({
                  price: e.target.value
                })
              }} 
            />
          </Form.Group>
          <Form.Group controlId='formBasicbrand'>
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type='string'
              value={this.state.brand} 
              onChange={(e) => {
                this.setState({
                  brand: e.target.value
                })
              }} 
            />
          </Form.Group>
          <Form.Group controlId='formBasicInfo'>
            <Form.Label>Informações</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              type='text'
              value={this.state.info} 
              onChange={(e) => {
                this.setState({
                  info: e.target.value
                })
              }} 
            />
          </Form.Group>
        </Form>
        <button
          type='submit'
          className='btn btn-lg btn-block btn-primary'
          onClick={this.handleSubmitMessage}
        >
          <i className='far fa-envelope' /> Enviar
        </button>
      </div>
    )
  }
}
