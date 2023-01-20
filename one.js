var express=require('express');
var app=express();
app.get('/:id',function(req,res)
{
    res.send("<h1>your id is:" + req.params.id +"</h1>");
});
app.listen(3000);
