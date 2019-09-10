import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
          <h1 className='display-4'>Fale Conosco!</h1>
          <p className='lead'>Você pode entrar em contato por email ou diretamente pelo whatsapp.</p>
        </div>
        <div className='card-deck mb-3'>
          <div className='card mb-4 shadow-sm'>
            <div className='card-header'>
              <h4 className='my-0 font-weight-normal'>Whatsapp</h4>
            </div>
            <div className='card-body'>
              <button
                type='button'
                className='btn btn-lg btn-block btn-success'
                onClick={this.handleWhatsappMessage}
              >
                <i className='fab fa-whatsapp' /> Iniciar Conversa
              </button>
            </div>
          </div>
          <div className='card mb-4 shadow-sm'>
            <div className='card-header'>
              <h4 className='my-0 font-weight-normal'>Email</h4>
            </div>
            <div className='card-body'>
              <Form>
                <Form.Group controlId='formBasicName'>
                  <Form.Label>Seu Nome</Form.Label>
                  <Form.Control
                    type='string'
                    value={this.state.name} 
                    onChange={(e) => {
                      this.setState({
                        name: e.target.value
                      })
                    }} 
                  />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Seu Email</Form.Label>
                  <Form.Control
                    type='email'
                    value={this.state.email} 
                    onChange={(e) => {
                      this.setState({
                        email: e.target.value
                      })
                    }} 
                  />
                </Form.Group>
                <Form.Group controlId='formBasicSubject'>
                  <Form.Label>Assunto</Form.Label>
                  <Form.Control
                    type='string'
                    value={this.state.subject} 
                    onChange={(e) => {
                      this.setState({
                        subject: e.target.value
                      })
                    }} 
                  />
                </Form.Group>
                <Form.Group controlId='formBasicMessage'>
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows='3'
                    type='text'
                    value={this.state.message} 
                    onChange={(e) => {
                      this.setState({
                        message: e.target.value
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
          </div>
        </div>
      </div>
    )
  }
  handleSubmitMessage = () => {
    console.log(this.state)
    alert('esta função ainda será implementada')
  }
  handleWhatsappMessage = () => {
    const url = `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_CONTACT_NUMBER}`
    window.open(url, '_blank')
  }
}

export default Contact
