# MyMovieList api

## Routes

_Routes that are **PRIVATE** require a token to use. To get a token, simply perform a register or login_

_The token will be required to set under the header of_ `x-auth-token: token`

Unless specify otherwise, all routes start in http://localhost:5000/api or https://movit-api.herokuapp.com/api

POST request also require an additional header:
`Content-Type: application/json`

### User routes /users

> Register an user

```
POST /register
Sample
{
    "name": "Sample",
    "email": "sample@email.com",
    "password": "samplepassword"
}
```

> Login an user

```
GET /login
Sample
{
    "email": "sample@email.com",
    "password": "samplepassword"
}
```

> **PRIVATE** Make an user a moderator

```
PUT /sample_user_id/mod
Only user with admin account can perform this action
```

> **PRIVATE** Remove mod role from an user

```
PUT /sample_user_id/unmod
Only user with admin account can perform this action
```

### Profile routes /profile

> **PRIVATE** Get current user profile

```
GET /me
```

> **PRIVATE** Create or update user profile

```
POST /
Sample
{
    "location": "sample location",
    "bio": "sample bio",
    "favGenres": "genre1,genre2,genre3",
    "twitter": "https//www.twitter.com",
    "facebook": "https//www.facebook.com"
}

favGenres is required, other fields are optional
```

> Get all profiles

```
GET /
```

> Get profile by id

```
GET /sample_user_id
```

### Movie routes /movies

> **PRIVATE** Add a movie

```
POST /
Sample:
{
    "title": "Sample Title",
    "imageUrl": "https://www.sample.com/sample_image.jpg",
    "description": "sample description",
    "releaseYear": "2021",
    "rating": "0",
    "country": "sample country",
    "genres": "genre1,genre2,genre3"
}
Only account with admin or moderator type can add a movie
title, imageUrl, releaseYear, genres are required, other fields are optional
```

> **PRIVATE** Update a movie

```
PUT /sample_movie_id
Sample:
{
    "title": "Sample Title",
    "imageUrl": "https://www.sample.com/sample_image.jpg",
    "description": "sample description",
    "releaseYear": "2021",
    "rating": "0",
    "country": "sample country",
    "genres": "genre1,genre2,genre3"
}
Only account with admin or moderator type can modify a movie
title, imageUrl, releaseYear, genres are required, other fields are optional
```

> Get all movies

```
GET  /
```

> **PRIVATE** Delete a movie and remove them from all profiles' likedMovies array

```
DELETE  /sample_movie_id
Only account with admin or moderator type can modify a movie
```

> Get movies by a genre

```
GET  /genres/sample_genre
```

> Get movie by id

```
GET /sample_movie_id
```

> Get random movie(s)

```
GET /random/
```

> **PRIVATE** Like a movie

```
PUT /sample_movie_id/like
```

> **PRIVATE** Unlike a movie

```
PUT /sample_movie_id/unlike
```

> **PRIVATE** Comment on a movie

```
POST /sample_movie_id/
Sample:
{
    "text": "sample comment"
}
```

> **PRIVATE** Delete a comment from a movie

```
DELETE /sample_movie_id/sample_comment_id
```

## Repository details

### Technology used

- ExpressJS
- MongoDB

### Library used

- bcryptjs
- config
- cors
- gravatar
- jsonwebtoken
- express
- mongoose
- nodemon
