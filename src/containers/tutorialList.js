import React from 'react';
import $ from 'jquery';
import Tutorial from '../components/tutorial'


class TutorialList extends React.Component {
  constructor() {
    super();

    this.state = {
      tutorials: []
    }

  }



componentDidMount() {
  console.log("Component Mount")
  $.ajaxSetup({
      headers: { 'X-User-Token': null, 'X-User-Email': null
    }
  });
  this.getTutorials();
  }



  getTutorials(event) {
    let component = this
    event.preventDefault();



    $.ajax({
      url: "https://tutorial-api.herokuapp.com/tutorials.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        JSON.stringify(data)
        console.log(data)

        component.setState ({
          tutorials: data
        });

        console.log(component)
      },

      fail: function(error){
        console.log(error)
      }
    });
  }

render() {
  console.log(this.state)
  return (

  <div>
    <div>
      <button onClick={this.getTutorials.bind(this)}> Get Tutorials </button>
    </div>
      <div>
        <ul>
          {this.state.tutorials.map(function(tutorial, i) {
            return(
              <Tutorial key={tutorial.id} title={tutorial.title} description={tutorial.description} link={tutorial.link} user={tutorial.user.email} createdAt={tutorial.created_at} onChange={this.getTutorials.bind(this)} />
            );
          }, this)}
        </ul>
      </div>
  </div>
)
}

}

export default TutorialList
