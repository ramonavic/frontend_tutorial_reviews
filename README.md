# Tutorial Reviews Front End

###INFO

A React front end that connects with a Rails Restful API. Users can post code tutorials and rate between 1 and 5 stars. User needs to be authenticated (try "anton@ex.com" / "abcd1234"). In order to connect with the API through AJAX it uses Cors on the backend.  

API back end: [example page](https://tutorial-api.herokuapp.com/) / [Github] (https://github.com/ramonavic/code_tutorial_review_api/) 


###TODO: 

- Authentication routes
- Styling

###SETUP

In order to use this we recommend to download both the front end and back end packages. 
After downloading the packages, type the following in your terminal: 

####Back end
```
bundle install
rails s -p 3001
```

####Front end
```
npm install
npm start
```

In order to use the backend locally, you'll need to change the Heroku URL to localhost:3001.
If you don't do this the app will connect to the Heroku API.
Then open your browser at localhost:3000. 








