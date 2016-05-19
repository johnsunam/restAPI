import APIKeys from '../../signup/both/ApiCollection.js';
Meteor.methods({
  'getAPI':function(userId){
    var result=APIKeys.find({owner:userId}).fetch();
    return result;
  },
  'regenerateApi':function(userId){
      var newkey=Random.hexString(32);
      APIKeys.update( { "owner": userId }, {
       $set: {
         "key": newkey
       }
     });
    return newkey;
  }
});
