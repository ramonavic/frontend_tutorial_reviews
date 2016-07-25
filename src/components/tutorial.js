import React from 'react';

class Tutorial extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      link: this.props.link,
      reviews: this.props.reviews
    };
  }


render() {
  console.log(this.state.reviews)
  return(
    <li>
      <a href = {this.state.link}>
        <p>
          {this.state.title} </p> </a>
          <p>
          {this.state.description}
          </p>
          <strong> Ratings </strong>
          {this.state.reviews.map(function(review, i) {
            return(
            review.rating);
          }, this)}

      

          <button> Upvote </button>
          <button> Delete </button>






    </li>
  )
}


}

export default Tutorial
