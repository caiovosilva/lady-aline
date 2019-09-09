import React from 'react'
import { Form } from 'react-bootstrap'

export default function Contact () {
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
              onClick={handleWhatsappMessage}
            >
              <i class='fab fa-whatsapp' /> Iniciar Conversa
            </button>
          </div>
        </div>
        <div className='card mb-4 shadow-sm'>
          <div className='card-header'>
            <h4 className='my-0 font-weight-normal'>Email</h4>
          </div>
          <div className='card-body'>
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Control type='email' placeholder='Seu email' />
                <Form.Text className='text-muted'>
                  Nós não compartilharemos seu email com ninguém.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Form.Group controlId='formBasicChecbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>
            </Form>
            <button type='submit' className='btn btn-lg btn-block btn-primary'>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function handleWhatsappMessage () {
  const url = `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_CONTACT_NUMBER}`
  window.open(url, '_blank')
}