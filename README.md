# sigma

this is a simple web application, that uses nodejs express mongo and jwt for authentication (backend side) and reactjs for frontend side.

---

## authentication

-1 send a post request to register a user
http://localhost:5000/accounts/register
{
"firstName":"tarek 2",
"lastName":"daaboul",
"email":"tare2.da@hotmail.com",
"password":"123456",
"confirmPassword":"123456",
"title":"Mr",
"acceptTerms":"true"
}

-2 send a post request to verify a user
(get token from db)
http://localhost:5000/accounts/verify-email

{
"token":"9b531841ed3899edb5a22216526563fe266fe69efc9bf2c3ded74e03b8f95b3779ad03cc435db520"
}

-3 authenticate using postman or web application with the register email/user

http://localhost:5000/accounts/authenticate

{
"id": "5f5f5cc8a2c17e4f9a3abd71",
"title": "Mr",
"firstName": "tarek 2",
"lastName": "daaboul",
"email": "tare2.da@hotmail.com",
"role": "Admin",
"created": "2020-09-14T12:06:32.230Z",
"isVerified": true,
"jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjVmNWNjOGEyYzE3ZTRmOWEzYWJkNzEiLCJpZCI6IjVmNWY1Y2M4YTJjMTdlNGY5YTNhYmQ3MSIsImlhdCI6MTYwMDA4NjIxMCwiZXhwIjoxNjAwMTA0MjEwfQ.BbrlRw004kKVr7XQoK-Bt7jD5AHngNPgLc32eYpauV4"
}

-- to start backend

1- navigate to src/backend and run command: npm run start:dev

-- to start frontend web application

1- navigate to src folder and run npm start (this will launch localserver)

======
this is a responsive dashboard that uses semantic ui as a css framework, reactjs as frontend framework, webpack as a development server (that bundles minify css, html, js files when using build command)

I used babel/preset to convert es6 and react jsx sytax to commonjs that will be compatibel with most of the browsers.
