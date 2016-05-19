import  {FlowRouter} from 'meteor/kadira:flow-router';
import {Bert} from 'meteor/themeteorchef:bert';

FlowRouter.route('/',{
  name:'signup',
  action(){
BlazeLayout.render('LayoutWrapper',{main:"signup"});
  }
});
