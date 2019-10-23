import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({ toggleProjects, projectsVisible }) => (
	<section id='contact' className={`${projectsVisible ? 'moved-down' : ''}`}>
		<a href='mailto:theimberger@gmail.com' className='email'>
			<h1>t heimberger</h1>
			<p>(at gmail)</p>
		</a>
		<div id='extra-links'>
			<a href='https://github.com/theimberger'><img src='./static/images/github.png' /></a>
			<a href='https://www.linkedin.com/in/thomas-heimberger-46b255141/'><img src='./static/images/linkedin.png' /></a>
			<button onClick={toggleProjects(!projectsVisible)}>see some work</button>
		</div>
	</section>
)

Contact.propTypes = {
	toggleProjects: PropTypes.func.isRequired,
	projectsVisible: PropTypes.bool.isRequired,
}

export default Contact;
