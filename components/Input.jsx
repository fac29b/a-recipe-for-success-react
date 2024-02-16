import React from 'react';

function Input() {
  return (
    <>
      <article aria-label="allergies section" className="allergies">
        <input type="checkbox" />
        <div>Are you lactose intolerant?</div>
      </article>
    </>
  );
}

export default Input;
