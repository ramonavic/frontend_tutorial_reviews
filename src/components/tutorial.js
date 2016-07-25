import React from 'react';

class Tutorial extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      link: this.props.link,
      mail: this.props.mail,
    };
  }


render() {
  console.log(this.state)
  return(
    <li>
      <a href = {this.state.link}>
        <p>
          {this.state.title} </p>
      </a>
      <p>
        - {this.state.mail}
      </p>



      <p>
        {this.state.description}
      </p>
    </li>
  )
}


}

export default Tutorial
