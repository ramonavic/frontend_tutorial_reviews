import React from 'react'
import $ from 'jquery'



class TutorialForm extends React.Component {

postTutorials(event) {
  event.preventDefault();
  let component = this
  let tutorialTitle = this.refs.tutorialTitle.value;
  let tutorialDescription = this.refs.tutorialDescription.value;
  let tutorialLink = this.refs.tutorialLink.value;

  let email = localStorage.getItem('email')
  let userToken = localStorage.getItem('token')

  console.log(email)
  console.log(tutorialTitle)

  let newTutorial = {
    id: null,
    title: tutorialTitle,
    description: tutorialDescription,
    link: tutorialLink,

  };


  $.ajaxSetup({
    headers: { 'X-User-Token': userToken, 'X-User-Email': email
  }
  })

  $.ajax({
    url: "https://tutorial-api.herokuapp.com/tutorials.json",
    type: "POST",
    data: JSON.stringify({
        tutorial: newTutorial
    }),
    contentType: "application/json",
    dataType: "json",
    success: function(data) {
      JSON.stringify(data)
      console.log(data)

      component.props.onChange();
      component.refs.tutorialTitle.value = "";
      component.refs.tutorialDescription.value = "";
      component.refs.tutorialLink.value = "";


    },


    fail: function(error){
      console.log(error)
      }
    })
}


render() {
  return(
    <form>
      <input type="text" ref="tutorialTitle" placeholder="Title"/>
      <input type="text" ref="tutorialDescription" placeholder="Description"/>
      <input type="text" ref="tutorialLink" placeholder="Link"/>
      <button onClick={this.postTutorials.bind(this)}> Add Tutorial </button>
    </form>
  )
}



}

export default TutorialForm
