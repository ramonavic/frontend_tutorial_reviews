import React from 'react';
import SmartTimeAgo from 'react-smart-time-ago';
import StarRating from 'react-star-rating';




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
    console.log(this.props)
    return(
              <li>
              <StarRating name="Rating" size={12} totalStars={5} rating={this.state.rating} />
              <em> <SmartTimeAgo value={this.state.createdAt}/> </em>
              </li>

    );
  }

}

export default Review;
