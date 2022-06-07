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
* The new movies page has a All movies button which redirects users to the home page.
![New Movies page](images2/new_movies.png)

### The update movies page
* The [Update Movies page]() is a page that allows users to modify the data of the movies. Since the website was meant to be shared to the public, no security has been implemented for the update protocol. 
* The update movies page also has a All movies button which redirects users to the home page.
![Update Movies Page](images2/update_movies.png)