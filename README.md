# REST API task for ETark
Built with express.js, and mongodb

# Using the routes with cUrl
## User Signup
### Request
path: /singup
#### with JSON
```
 curl -H "Content-Type: application/json" \
   http://localhost:3000/signup \
   --data '{ "email": "you@domain.com", "password": "123456"  }'
```
#### with Form-Data
```
curl http://localhost:3000/signup \
-d "email=you@domain.com" -d "password=1234" 
```
Method POST is inferred as we're sending data in the body

### Response
```
{"user":{"_id":"611a30d22b5ea14e6bb0e81f",
"name":"Devvv","email":"you@domain.com","__v":0},
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTFhMzBkMjJiNWVhMTRlNmJiMGU4MWYiLCJpYXQiOjE2MjkxMDYzODYsImV4cCI6MTYyOTE5Mjc4Nn0.WJ1oWFTAsfCFKT2h2JTtnisk3pKC03F9vke6sb7A_og"}{"user":{"_id":"611a30d22b5ea14e6bb0e81f","name":"Devvv","email":"dwevu.nm211@gmail.com","__v":0},"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTFhMzBkMjJiNWVhMTRlNmJiMGU4MWYiLCJpYXQiOjE2MjkxMDYzODYsImV4cCI6MTYyOTE5Mjc4Nn0.WJ1oWFTAsfCFKT2h2JTtnisk3pKC03F9vke6sb7A_og"}
```



## User Login
path: /login
### Request
#### with JSON
```
 curl -H "Content-Type: application/json" \
   http://localhost:3000/login \
   --data '{ "email": "you@domain.com", "password": "123456"  }'
```
#### with Form-Data
```
curl http://localhost:3000/signup \
-d "email=you@domain.com" -d "password=1234" 
```
### Response
```
{"user":{"_id":"611a30d22b5ea14e6bb0e81f",
"name":"Devvv","email":"dwevu.nm211@gmail.com","__v":0},
"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTFhMzBkMjJiNWVhMTRlNmJiMGU4MWYiLCJpYXQiOjE2MjkxMDY0NjUsImV4cCI6MTYyOTE5Mjg2NX0.Mont6uxXuQM06s-1SVvtoyuHgNVlXILVdUxX_vs7DLs"}
```
## home route (protected)
path: /home

*This request should include a header with Bearer token obtained from either of the above two APIs responses.
In the format: "Authorization: Bearer < Token >"*
### Request
```
curl -H \
"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTFhMzBkMjJiNWVhMTRlNmJiMGU4MWYiLCJpYXQiOjE2MjkxMDY0NjUsImV4cCI6MTYyOTE5Mjg2NX0.Mont6uxXuQM06s-1SVvtoyuHgNVlXILVdUxX_vs7DLs" \
http://localhost:3000/home
```
### Response
```
Success. UserId: 611a30d22b5ea14e6bb0e81f
```
## Validations
* Both __/signup__ and __/login__ need `email` and `password` fields
* For /signup, a `name` field is also required.
* `email` field should be a valid email address.
