import { ReactiveVar } from 'meteor/reactive-var';
Template.apiKey.onCreated(function(){
  this.apikey=new ReactiveVar(null);
  //this.load=new ReactiveVar(true);
  var instance=this;
  var results=Meteor.call('getAPI',Meteor.userId(),function(error,result){
    if(!error)
    {

      instance.apikey.set(result);
    }

  });

})
Template.apiKey.events({
/*  'click .regenerate-api':function(){
    var instance=Template.instance();
    Meteor.call('regenerateApi',Meteor.userId(),function(error,result){
      if(!error)
      {
        instance.load.set(true);
        instance.apikey.set(result);

      }

    });
  }*/
})

Template.apiKey.helpers({
  apiKey:function(){
    var instance=Template.instance().apikey.get();
    return instance;
  },
  loading:function(){
    console.log(Template.instance().load.get());
    return Template.instance().load.get();
  }
});
