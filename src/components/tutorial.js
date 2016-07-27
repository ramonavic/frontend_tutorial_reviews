import React from 'react';
import Review from './review';
import ReviewForm from './reviewForm';


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
  console.log("Tutorial ID's:  " + this.props.id)
  return(
    <li>
      <a href = {this.state.link}>
        <p>
          {this.state.title}
        </p> </a>
      <p>
        {this.state.description}
      </p>
      <ReviewForm tutorialId={this.props.id} />
      <strong> Ratings: </strong>
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
