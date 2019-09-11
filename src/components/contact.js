import React, { Component } from 'react';

class Contact extends Component {
  render () {
    return (
      <section id='contact'>
				<a href='mailto:theimberger@gmail.com' className='email'>
					<h1>t heimberger</h1>
					<p>(at gmail)</p>
				</a>
				<div id='extra-links'>
					<a href='https://github.com/theimberger'><img src='./static/images/github.png' /></a>
					<a href='https://www.linkedin.com/in/thomas-heimberger-46b255141/'><img src='./static/images/linkedin.png' /></a>
          <p>see some work</p>
				</div>
			</section>
    );
  }
}

export default Contact;
