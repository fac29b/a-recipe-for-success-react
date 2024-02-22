import React from 'react';
import Input from './Input';
import Button from './Button'
import "../css/Button.css";
import "../css/Input.css";
import "../css/Container.css";



export const Container = () => {
  return (
    <main aria-label='container' className='container'>
        <h1>Don't know what to cook? No worries recipe for succsess app does the thinking for you.</h1>
        <Input/>
        <section className="button-section">
            <Button id="1" name="italian" >Italian</Button>
            <Button id="2" name="Chinese">Chinese</Button>
            <Button id="3" name="Peruvian">Peruvian</Button>
            <Button id="4" name="Surprise">Surprise me</Button>
            

        </section>
        
    </main>
  )
}

export default Container


