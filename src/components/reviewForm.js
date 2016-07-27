import React from 'react';
import StarRating from 'react-star-rating';


class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tutorialId: this.props.tutorialId
    }
  }

  componentWillMount() {
    console.log("Ready to send rating")
    $.ajaxSetup({
      headers: { 'X-User-Token': userToken, 'X-User-Email': email
    }
    })
  }


render() {
  console.log(this.props.tutorialId)
  let tutorialIdUrl = this.props.tutorialId
  let tutorialUrl = "https://tutorial-api.herokuapp.com/tutorials/"
  let reviewsUrl = "/reviews.json"

  return(

    <form action={tutorialUrl + tutorialIdUrl + reviewsUrl} method="POST">
      <StarRating name="Review-tutorial" caption="Rate this tutorial!" totalstars={5} size={20}/>
      <button type="submit" className="btn btn-submit">Submit Rating</button>
    </form>

  )
}




}

export default ReviewForm
