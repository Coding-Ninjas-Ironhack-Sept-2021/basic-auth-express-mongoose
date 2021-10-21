

# Basic Auth with Express & Mongoose


GOAL1: allow users to create an account
GOAL2: validation
GOAL3: functionality to login / logout


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
