import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import _ from 'lodash';
import $ from 'jquery';

class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tutorialId: this.props.tutorialId,
    }
  }

  componentWillMount() {
    let email = localStorage.getItem('email')
    let userToken = localStorage.getItem('token')

    $.ajaxSetup({
      headers: {
        'X-User-Token': userToken,
        'X-User-Email': email
      }
    })
  }

  sendReview(nextValue, prevValue, name, reviewId){
    console.log("This is the passed tutorial id", this.props.tutorialId)
    console.log("This is the given rating: ", nextValue)


    let component = this;

    let tutorialIdUrl = this.props.tutorialId
    const tutorialUrl = "https://tutorial-api.herokuapp.com/reviews.json/"
    const reviewsUrl = "/reviews.json"
    const url = tutorialUrl

    let newReview = {
      rating: nextValue,
      tutorial_id: tutorialIdUrl
    }

    $.ajax({
      url: url,
      type: "POST",
      data: JSON.stringify({
          review: newReview
      }),
      contentType: "application/json",
      dataType: "json",
      success: function(data) {
        JSON.stringify(data)
        console.log(data)


      },
      fail: function(error){
        console.log(error)
        }
      })
    }


render() {

  return(
    <div>
      <h3> Rate this tutorial </h3>
      <StarRatingComponent
          name="Review1"
          value={3}
          ref={this.props.tutorialId}
          onStarClick={this.sendReview.bind(this)}
          starCount={5} />
    </div>
  )
}




}

export default ReviewForm;
