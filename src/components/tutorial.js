import React from 'react';

class Tutorial extends React.Component {

  componentDidMount() {
    this.setState({
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      link: this.props.link,
      email: this.props.user,
      createdAt: this.props.createdAt,
    });
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
        {this.state.description}
      </p>
    </li>
  )
}


}

export default Tutorial
