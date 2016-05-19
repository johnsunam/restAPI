import {Router} from 'meteor/iron:router';
import ApiClass from '../../../server/ApiClass';
Router.route('/api/v1/reqt',function(){
/*this.response.setHeader('Access-Control-Allow-Origin','*');
if(this.requeset.method === "OPTIONS"){
  this.response.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
   this.response.setHeader( 'Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS' );
   this.response.end( 'Set OPTIONS.' );
 } else {
   API.handleRequest(this, 'pizza', this.request.method );
 }
 */

 var api= new ApiClass(this,'pizza',this.request.method);
 api.handleRequest();
}, { where:'server'});
