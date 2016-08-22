import React from 'react';
import $ from 'jquery';
import Tutorial from '../components/tutorial'
import TutorialForm from '../components/tutorialForm'


class TutorialList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tutorials: [],
      email: props.email,
      userToken: props.userToken
    }

  }



  componentWillMount() {
    let component = this
    $.ajaxSetup({
        headers: { 'X-User-Token': component.state.userToken, 'X-User-Email': component.state.email
      }
    });
  }

  componentDidMount() {
    this.getTutorials();
  }

  getTutorials(event) {
    let component = this
    event && event.preventDefault();

    $.ajax({
      url: "https://tutorial-api.herokuapp.com/tutorials.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        JSON.stringify(data)

        component.setState ({
          tutorials: data
        });
      },

      fail: function(error){
        console.log(error)
      }
    });
  }

  render() {
    return (
      <div>
        <div>
            <ul>
              {this.state.tutorials.map(function(tutorial, i) {
                return(
                  <Tutorial
                    key={tutorial.id}
                    id={tutorial.id}
                    title={tutorial.title}
                    description={tutorial.description}
                    link={tutorial.link}
                    reviews={tutorial.reviews}
                    createdAt={tutorial.created_at}
                    onChange={this.getTutorials.bind(this)}
                  />
                );
              }, this)}
            </ul>
          </div>
      </div>
    )
  }
}

export default TutorialList
