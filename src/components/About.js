import React from 'react'

export default function About(props) {
  // const[myStyle, setMyStyle] = useState({
  //   color:'white',
  //   backgroundColor:'black'
  // })

  let myStyle = {
    color: props.mode === 'dark'?'white':'#353441',
    backgroundColor: props.mode === 'dark'?'#353441':'white'
  }

  const fontStyle = {
    fontSize: '18px'
};


  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#353441'}}>
      <h1 className="my-3">About Us</h1>
      <p style={fontStyle}>TextUtils is a versatile text utility tool designed to enhance your experience with text manipulation. When integrated with React, TextUtils can provide a variety of features to help users manage and manipulate text more efficiently in their applications. TextUtils is a comprehensive text utility library designed to simplify and enhance text manipulation within React applications. Whether you're building a complex user interface or a simple form, TextUtils provides a suite of powerful tools to handle various text processing needs.</p>
      <div classNameName="accordion" id="accordionExample">
        <div className="container">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong style={fontStyle}>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={fontStyle}>
        This textUtlis react app is very user-friendly it helps to analyze the text such as convert to uppercase, Lowercase, clear text, remove extraspace and more that can help you.
      </div>
    </div>
  </div>
  </div>
  <div className="container my-3">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong style={fontStyle}>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={fontStyle}>
        This React app is free to use and you can also analyze the text here without any charges and save your time.
              </div>
    </div>
  </div>
  </div>
</div>
</div>
    </>
  )
}
