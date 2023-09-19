import React from 'react'
import './Contact.css'
import { useState,useEffect } from 'react'

function Contact() {

    const [contato, setContato] = useState([])

    useEffect(() => {
        fetch("/contact.json")
        .then((response) => response.json())
        .then((jsonData) => setContato(jsonData))
        .then((error) => console.error("Deu erro :(", error))
    }, [])

  return (
    <div className='contact'>
        <h3>Como você prefere falar conosco?</h3>
        <div className='contact-container'>
        {contato.map((contato) => (
            <div className='contact-block'>
                <img src={contato.icon} />
                <h4>{contato.title}</h4>
                <p>{contato.message}</p>
                <a style={{fontWeight: "bold"}} href='#'>{contato.contact}
                </a>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Contact