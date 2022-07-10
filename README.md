# ReactJS app.

## Features.
 
 + Feature 1 - when user click into the movieDetail page, a list of similar movies will be shown to the user.
 + Feature 2 - user can added upcoming movies to watchlist.
 + Feature 3 - user can add these movies to collection page. Morever, user can reomve the collected page in collection page.
 + Feature 4 - user can see the popular movie actors and filtrate actors by name and gender.
 + Feature 5 - user can see the details of certain actor, it includes personal information, the most popular movies & the hightest mark movies & all movies of the actor.
 + Feature 6 - use can regist and log into the website. Only logged user can do "add to favorite/watchlist/collection" and access favorite movies/watchlist/collection page.
 + Feature 7 - the logged user have its personal information and he/she can edit and update their information.

## API Data Model.

+ https://api.themoviedb.org/3/movie/top_rated -get the top rated movies on TMDb 
+ https://api.themoviedb.org/3/person/popular - get the list of popular people on TMDb
+ https://api.themoviedb.org/3/person/${id} -get the primary person details by id
+ https://api.themoviedb.org/3/person/${id}/movie_credits -get the movie credits for a person
+ https://api.themoviedb.org/3/movie/${id}/similar -get a list of similar movies

## App Design.

### Component catalogue (If required).

![][stories]

### UI Design.

![][homepage]
>Only change the UI of homepage, the UI modification of favorite/upcoming/watchlist/topRated/collection pages are similar to homepage.

![][similarMovies]
>Shows similar movies of the chosen movie on its movieDetail page. User can also see these similar movies' details by clicking it.


![][popularPerson]
>Shows popluar actors ordered by popularity. The filter above can help user find the actor they want quickly by name filter and ender filter. User can also see actor's detail by clicking their image.

![][popularPersonDetail01]

![][popularPersonDetail02]
>display the personal details of actors, such as: personal information, the movies(the highest popularity movies,the highest makrs movies, and all movies) he/she participates

![][login]
>Show the window for user to login. Click login to login.

![][regist]
>Show the window for user to regist. Click regist to regist. Password must be longer that 6 and user can't use username that is the same as others'.

![][info]
>Show personal info of user. User can do modification by clicking "Modify"

![][infoEdit]
>Show personal info Edit page. User can change their personal data and update it. The previous data will be written on the input area for the convenience of user.

## Routing.

+ /movies/topRated - display topRated movies
+ /movies/watchList - display the upcoming movies that have been added to watchlist(displays the user's watchlist movies selection)
+ /movies/collection - display the top rated movies that have been added to collection(displays the user's collection movies selection)
+ /person - display the famous movie actors by the order of popularity
+ /person/:id - display the personal details of actors, such as: personal information, the movies(the highest popularity movies,the highest makrs movies, and all movies) he/she participates
+ /movies/login - the place for user to login
+ /movies/regist - the place for user to regist
+ /info - the place that shows personal information of logged user.
+ /editInfo - the place that can edit personal information of logged user.

### Data hyperlinking.

![][similarMovieCardLink]
> Clicking a card causes the display of that movie's details.

![][infoLink]
>Clicking the 'Modify' to change personal info

![][peopleCardLink]
>Clicking actors image cause the display of that actor's details

![][personDetailLink]
>Clicking movie image or movie name cause the display of that movie's details

![][registLink]
>Clicking the 'login' to enter login page

![][loginLink]
>Clicking the 'regist' to enter login page

## Independent learning (If relevant).

+ Use useForm hook to deal with user input in login/regist page. Use handleSubmit and ref={register} as a replacement of value={} onchange={}  
reference: https://react-hook-form.com/api

+ Use Material UI (Button, Textarea and so on)on personalInfoEdit page and the filter in popularPeople page.  
reference: https://material-ui.com/

+ Use Styled Components on login/regist page so they can have the same style of component.  
reference: https://styled-components.com/

---------------------------------

# Agile Software Practice.


## App Features.

+ watchlistPage & topRatedPage & collection page

Tests: cypress/integration/navigation.spec ;  cypress/integration/button.spec.js

Since these pages have nearly UI styles and code as homePage, I don't attach all screenshots of these pages, the screenshot of topRatedMoviesPage can be a reference. 
And since the codes are nearly the sane as homepage. I just test whether their navigations and buttons are well and won't have peoblems, such as navigating to a wrong page.

![][topRatedMovies]


+ Movie Details page(similar movies) - There will be a list of similar movies at the bottom of this page.

Tests: cypress/integration/movieDetails.spec.js 

![][movieDetail]

![][similarMovies]


+ popularPeoplePage - show popluar movie actors with popularity. Providing filter for user.

Test: cypress/integration/popularPerson-page.spec.js

![][popularPerson]


+ peopleDetailsPage -show details of chosen person, and show their performing movies.

Test: cypress/integration/personDetail-page.spec.js

![][popularPersonDetail01]

![][popularPersonDetail02]


+ loginPage - show window for user to login

Test: cypress/integration/login&regist$&logout-spec.js

![][login]


+ registPage - show window for user to regist

Test: cypress/integration/login&regist$&logout-spec.js

![][regist]


+ personalInfoPage - show logged user's personal information

Test: cypress/integration/personal-page.spec.js

![][info]


+ personalInfoEditPage - edit logged user's personal information and user can update their information.

Test: cypress/integration/personal-page.spec.js

![][infoEdit]


## Testing.

+ Cypress Dashboard URL: https://dashboard.cypress.io/projects/os9v23/
+ Since my cypress Dashboard has reached the limit of records, this is the link for the demonstration of all tests that are runned locally by "npx cypress run" :https://youtu.be/exhf36F_974

### Advanced Testing (If required).

+ cypress/integration/movieReviewPage.spec.js - test the movieReview page when the user input is invalid. 
+ cypress/integration/login&regist$&logout-spec.js - test the regist/login page and logout button when the user input is invalid.


## Other.

+ cypress plugin: code coverage  
reference: https://www.cypress.io/blog/2019/09/05/cypress-code-coverage-for-create-react-app-v3/

+ The code cover of certain test

![][partCoverage]


+ The code cover of all test

![][allCoverage01]

![][allCoverage02]

+ Try to use gitlabRunner(Although the result seemed not so good...)

![][gitlabRunner]

![][runner2]

+ cypress custom commands：create custom commands of login which is often used and other commands that make test coding convenient.

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
[regist]: ./public/regist.png
[homepage]: ./public/homepage.png
[info]: ./public/info.png
[infoEdit]: ./public/infoEdit.png
[login]: ./public/login.png
[popularPersonDetail01]: ./public/popularPersonDetail01.png
[popularPersonDetail02]: ./public/popularPersonDetail02.png
[popularPerson]: ./public/popularPerson.png
[similarMovies]: ./public/similarMovies.png
[similarMovieCardLink]: ./public/similarMovieCardLink.png
[infoLink]: ./public/infoLink.png
[peopleCardLink]: ./public/peopleCardLink.png
[personDetailLink]: ./public/personDetailLink.png
[registLink]: ./public/registLink.png
[infoLink]: ./public/infoLink.png
[topRatedMovies]: ./public/topRatedMovies.png
[partCoverage]: ./public/partCoverage.png
[allCoverage01]: ./public/allCoverage01.png
[allCoverage02]: ./public/allCoverage02.png
[gitlabRunner]: ./public/gitlabRunner.png
[runner2]: ./public/runner2.png
[loginLink]: ./public/loginLink.png
