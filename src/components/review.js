import React from 'react';
import SmartTimeAgo from 'react-smart-time-ago';
import StarRatingComponent from 'react-star-rating-component';




class Review extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rating: this.props.rating,
      createdAt: this.props.createdAt,
    }
  }

  render() {
    let reviewCreatedAt = this.props.createdAt
    return(
            <li>
              <StarRatingComponent name="Rating" editing={false} starCount={5} value={this.state.rating} />
              <em> <SmartTimeAgo value={this.state.createdAt}/> </em>
            </li>

    );
  }
}

export default Review;
