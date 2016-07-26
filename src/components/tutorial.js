import React from 'react';
import Review from './review';

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
          {this.state.title}
        </p> </a>
      <p>
        {this.state.description}
      </p>
      <strong> Reviews: </strong>
      <ul>
        {this.state.reviews.map(function(review, i) {
            return(
              <Review key={review.id} rating={review.rating} createdAt={review.created_at} />
            );
        }, this)}
      </ul>


      <button> Upvote </button>
      <button> Delete </button>






    </li>
  )
}


}

export default Tutorial
