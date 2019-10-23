import React, { Component } from 'react';
import { Sea, Sky, Contact, Projects } from './components'

class App extends Component {
  state = {
    projectsVisible: false,
  }

  toggleProjects = (projectsVisible) => () => { this.setState({ projectsVisible }) }

  render() {
    const {
      state: { projectsVisible },
      toggleProjects,
    } = this

    return (
      <div className="App">
        <Sky projectsVisible={projectsVisible} />
        <Sea projectsVisible={projectsVisible} />
        <Contact toggleProjects={toggleProjects} projectsVisible={projectsVisible} />
        <Projects visible={projectsVisible} />
      </div>
    )
  }
}

export default App;
