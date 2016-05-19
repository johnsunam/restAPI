import  {FlowRouter} from 'meteor/kadira:flow-router';
import {Bert} from 'meteor/themeteorchef:bert';


FlowRouter.route('/apiKey',{
  name:'apiKey',
  action(){
BlazeLayout.render('LayoutWrapper',{main:"apiKey"});
  }
});
