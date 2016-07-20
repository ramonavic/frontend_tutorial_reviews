import React from 'react';
import $ from 'jquery'


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
          tutorials: data.tutorials
        });

        console.log(component)
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
          {this.state.todos.map(function(tutorials, i) {
            return(
                  <Tutorial key={tutorial.id} title={tutorial.title} description={tutorial.description} link={tutorial.link} user={tutorial.user_id.name} createdAt={todo.created_at} />
                );
              }, this)}
        </ul>
      </div>

    <div>
      <button onClick={this.getTutorials.bind(this)}> Get Tutorials </button>
    </div>
  </div>
)
}

}

export default TutorialList
