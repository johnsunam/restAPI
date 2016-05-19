
class ApiClass {
  constructor(context,resource,method) {
 this._context=context;
 this._resorce='pizza';
 this._method=method;
 this._data=null;
 this._message='message';
 this._methods={pizza:{
   message:'helo',
  GET:function(){
        return pizza.find().fetch();

   }
 }}
  }
  handleRequest(){
    var connection= this.connection(this._context.request);
    var data=this._methods[this._resorce][this._method]();
    this._data=data;
    this.response(401,)
  }
  response(statuCode){
    this._context.response.setHeader('Content-Type','application/json');
    this._context.response.statuCode=statuCode;
    this._context.response.end(JSON.stringify(this._data));
  }

  connection(request){
      var getRequestContents=this.getRequestContents(request);


    }
    getRequestContents(request)
    {
      switch(request.method){
        case "GET":
        return request.query;
        case "POST":
        return request.query;
        case "DELETE":
        return request.query;
        case "PUT":
        return request.query;
      }

    }

}
export default ApiClass;
