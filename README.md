

# Basic Auth with Express & Mongoose


GOAL1: allow users to create an account
GOAL2: validation
GOAL3: functionality to login


## Step 0: User Model


## Step 1: display a form to create an account

- [x] Route (GET `/signup`) (inside `auth.routes.js`)
- [x] Create a view (`auth/signup.hbs`)
- [x] We've also updated `layout.hbs` and `style.css`


## Step 2: process the form and create an account

- [x] Route (POST `/signup`)
- [x] Generate the hash/digest
- [x] Query DB (`User.create()`)
- [x] Redirect to `/userProfile` (we created the view `users/user-profile.hbs` and a route GET `/userProfile` )


## Step 3: validation
- [x] Basic Client-side validation (HTML required)
- [x] Some examples of Server-side validation


## Step 4: functionality to login

- [x] Add link to login (`layout.hbs`)

- [x] Route (GET `/login`)
- [x] View (`views/auth/login.hbs`)


- [x] Route (POST `/login`)
  - [x] Query DB (`User.findOne()`)
  - [x] Check credentials (`bcryptjs.compareSync`)
  - [x] If sucessful, redirect to `/userProfile`

- [x] Send information to the view and display it (ex. the username)
  `res.render('users/user-profile', { user });`


## Step 5: sesion persistance

- [x] Session persistance with `express-session` and `connect-mongo`


## Step 6: logout
- [x] Route (POST `/logout`)
- [x] Add button to nav menu


## Step 7: authorization


- Step 7.a: boilerplate code for authorization
  - [x] Added mock routes & links to nav

- Step 7.b: custom roles
  - [x] Add `role` to the User model
  - [x] Drop `users` collection, create 3 users, change the roles directly in the DB
  - [x] Display role info in the profile page

