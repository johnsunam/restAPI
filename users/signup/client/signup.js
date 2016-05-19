import {Bert} from 'meteor/themeteorchef:bert';
import { Accounts } from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
Template.signup.events({
  'submit #signupForm':function(e){
    e.preventDefault();
    const user={
     email:$('#email').val(),
     password:$('#password').val()
  }

    var userId=Accounts.createUser(user,function(error,result){
      if(error){
          Bert.alert(error);
      }
      else {
        Meteor.call('initApiKey',Meteor.userId(),function(err,result){
          if(error){
            Bert.alert(error.reason);
          }
          else {
            FlowRouter.go('/apiKey');
          }
        })
      }
    });

  }
});
