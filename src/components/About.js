// About.js
import React from 'react';

function About() {
  return (
    
    <section className="about-container">
      <img class="image" src="https://cdn3d.iconscout.com/3d/premium/thumb/freelancer-working-from-home-3079946-2569229.png"/>
        
      <div className="translucent-box">
        
        <div className="box-content">
          <div className="about-heading">
            <h2>About Me</h2>
          </div>
          <div className="about-content">

            <p>
            I'm Priyanshu, and my creative journey was ignited by my deep passion for Web Development. <br/> This unwavering fascination is what motivates me each morning, infusing me with excitement to confront new challenges and redefine the limits of what can be achieved. <br/>  Currently pursuing my BTech degree at VIT, Vellore, every project and collaboration represents an opportunity to channel this inner drive and craft something truly exceptional. <br/>  My objective is not just to meet expectations but to consistently surpass them, and I approach every undertaking with an unyielding passion, ensuring that I invest my whole heart and soul into every aspect.
            </p>
          </div>
          <br/>
          <div className="about-heading">
            <h2>SKILLS</h2>
          </div>
          <div className='buttons'>
          <button type="button" class="btn  btn-outline-dark ">HTML</button>
          <button  type="button"class="btn  btn-outline-dark b" >CSS</button>
          <button type="button"class="btn  btn-outline-dark b" >JAVASCRIPT</button>
          <button type="button"class="btn  btn-outline-dark b">BOOTSTRAP</button>
          <button type="button"class="btn  btn-outline-dark b" >REACT JS</button>
          <button type="button"class="btn btn-outline-dark b" >C</button>
          <button type="button"class="btn  btn-outline-dark b" >C++</button>
          <button type="button"class="btn btn-outline-dark b" >JAVA</button>
          <button type="button"class="btn  btn-outline-dark b" >PYTHON</button>
          </div>
          


        </div>
        
        
      </div>
      
    </section>
  );
}

export default About;
