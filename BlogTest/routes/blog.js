/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-1-23
 * Time: 下午9:02
 * To change this template use File | Settings | File Templates.
 */

var BlogDao = require("../dao/BlogDao");
  var  Blog = require("../models").Blog;
exports.list = function (req, res) {
//    BlogDao.create(new Blog({title:"njblog"+Math.random()*1000,content:"miao love node"}),function(error){
//        console.log(error);
//    })
//    BlogDao.getAll(function(err,data){
//        console.log(data[1].title);
//    })
    BlogDao.getAll(function (err, blogs) {
        res.send(blogs);
    });
};

 exports.create=function(req,res){
     
     console.log(blog);
      
     var blog=new Blog(req.body);
     console.log(blog);

     Blog.findOne({name:req.body.name}, function (err, blog) {
         if (err)
             return res.json({err:err});
         if (blog) {
             return res.json({err:"用户名已经存在"});
         }
         blog.save(function (err, blog) {
             if (err) {
                 return res.json({err:err});
             }
             req.session["blog"] = blog;
             res.json();
         });
     });


 };