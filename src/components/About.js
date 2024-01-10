import React from 'react'

export default function About(props) {
  
  let myStyle ={
    color: props.mode === 'dark'?'white':'#1a3048',
    backgroundColor: props.mode === 'dark'?'#1a3048':'white'
  };

  return (
    <>
    <div className='container' style={myStyle}>
      <h1>About us</h1>
      <p>TextUtils is a text analyzing utility website. Where you can do any work according to your need.</p>

      <strong>Analyze your text -</strong>
      <p>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.</p>

      <strong>Free to use -</strong>
      <p>TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</p>

      <strong>Browser Compatible -</strong>
      <p>This word counter software works in any web browers such as Chrome, Firefox, Internet Explorer, Safari, Opera etc. It suits to count characters in facebook, blog, exel document, pdf document, essays and a lot more. </p>
      

    </div>
    
    </>
  )
}
