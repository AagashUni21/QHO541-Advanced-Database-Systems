# Online Movie System
## Advance Database Project, using [MongoDB](www.mongodb.com/) and [NodeJS](nodejs.org/en/).
For this website i have chosen to make a website that lets users add movies to the collection. The website already has a few movies viewable.
I have created this website using a non relational database. I have hosted this website online in [Atlas](https://www.mongodb.com/atlas)
### The following modules have been used in this project:
- [express](www.npmjs.com/package/express)
- [morgan](www.npmjs.com/package/morgan)
- [nodemon](www.npmjs.com/package/nodemon)
- [ejs](www.npmjs.com/package/ejs)
- [body-parser](www.npmjs.com/package/body-parser)
- [dotenv](www.npmjs.com/package/dotenv)
- [mongoose](www.npmjs.com/package/mongoose)
- [axios](www.npmjs.com/package/axios)

In my [home page](...), there are:
- New Movies Button
- Update Movies Button
- Delete Movies Button

The Home page displays all the movies currently available in the database.

### The home page
* You can view all the movies in the list from the home page. As mentioned above, you can use the 3 available buttons to navigate between the below pages. 
![index page view](images2/index.png)

### The new movies page
* The [New Movies page](...), has a form that uses javascript together with other modules to add the new movie data to the database which becomes visible in the home page.
* You can read this page upon clicking the New Movies Button
* The new movies page has a All movies button which redirects users to the home page.
![New Movies page](images2/new_movies.png)
```
exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }

    const movie=new Advancedb({
        title:req.body.Movie_Title,
        Release_Date:req.body.Release_Date,
        Box_Office:req.body.Box_Office
    })

    movie
    .save(movie)
    .then(data=>{
        res.redirect('/add-movie');
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Some error has occured while creating a create operation"
        });
    });
}
```
### The update movies page
* The [Update Movies page]() is a page that allows users to modify the data of the movies. Since the website was meant to be shared to the public, no security has been implemented for the update protocol. 
* You can read this page upon clicking the Update Movies Button
* The update movies page also has a All movies button which redirects users to the home page.
![Update Movies Page](images2/update_movies.png)
```
exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Movie must not be empty to be updated"})
    }
    const id=req.params.id;
    Advancedb.findByIdAndUpdate(id,req.body,{UseFindAndModify:false}).then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot update user with ${id}. User not found!`})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message: "Error, Update user information"})
    })
    
}
```

### The delete button
* We have not created a new page for delete option, instead we can use the delete icon from the home page to delete any of the movies which needs to be removed.
* We have implemented that user gets asked for confirmation before the delete action and recieves a notification upon successful deletion.
```
if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}
```
```

exports.delete=(req,res)=>{
    const id=req.params.id;

    Advancedb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
        res.status(404).send({message:"Cannot Delete with ${id}, Id is wrong"})
        }else{
            res.send({message:"User Deleted successfully!"})
        }
    }).catch(err=>{
        res.status(500).send({message:"Could not delete user with id=" +id});
    });
}
```



