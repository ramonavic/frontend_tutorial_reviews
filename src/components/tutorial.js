import React from 'react';
import Review from './review';
import ReviewForm from './reviewForm';
import $ from 'jquery';

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

  componentWillMount() {
    console.log("Ready to send rating")
    let email = localStorage.getItem('email')
    let userToken = localStorage.getItem('token')

    $.ajaxSetup({
      headers: { 'X-User-Token': userToken, 'X-User-Email': email
    }
    })
  }

  render() {
    console.log("Tutorial ID's:  " + this.props.id)
    return(
      <li>
        <a href = {this.state.link}>
          <h2>
            {this.state.title}
          </h2>
        </a>
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
      </li>
    )
  }
}

export default Tutorial
