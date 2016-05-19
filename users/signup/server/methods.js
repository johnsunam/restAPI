import {Random} from 'meteor/random';
import APIKeys from '../../signup/both/ApiCollection.js';

Meteor.methods({
  initApiKey:function(userId){
    var newkey=Random.hexString(32);
    APIKeys.insert({'owner':userId,'key':newkey});
  }
});
