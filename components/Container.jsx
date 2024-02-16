import React from 'react'
import "../css/Container.css"
import Button from './Button'
import "../css/Button.css";

export const Container = () => {
  return (
    <main aria-label='container' className='container'>
        <h1>Don't know what to cook? No worries recipe for succsess app does the thinking for you.</h1>
        <section className='button-section'>
            <Button/>
            <Button/>
            <Button/>
            <Button/>

        </section>
        
    </main>
  )
}

export default Container


