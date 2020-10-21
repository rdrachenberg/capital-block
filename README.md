# capital-block
A place for capital and blockchain enthusiast to gather, share, and learn. 
 

<img src='https://img.shields.io/badge/JavaScript-94.5%25-brightgreen?style=plastic&logo=javascript'>
<img src='https://img.shields.io/badge/CSS-3.1%25-green?style=plascit&logo=CSS3&logoColor=green'>
<img src='https://img.shields.io/badge/HTML-16.8%25-orange?style=plastic&logo=HTML5&logoColor=orange'>
<a href='https://github.com/rdrachenberg'>
    <img src='https://img.shields.io/badge/Mongo%20-DB-blue?style=plastic&logo=mongoDB&logoColor=success'>
</a>
<a href='https://github.com/rdrachenberg'>
    <img src='https://img.shields.io/badge/Node%20-.js-success?style=plastic&logo=Node.js&logoColor=success'>
    <img src='https://img.shields.io/badge/React%20-16.12.0-success?style=plastic&logo=React&logoColor=#61DAFB'>
</a>
<a href='https://github.com/rdrachenberg'>
    <img src='https://img.shields.io/badge/Made%20by-rDrachenberg-success?style=plastic&logo=visual-studio-code&logoColor=blue'>
</a> 
<img src= 'https://img.shields.io/github/issues/rdrachenberg/capital-block?style=plastic' />
<img src= 'https://img.shields.io/github/license/rdrachenberg/capital-block?style=plastic' />
<a href='mailto:RyanDrachenberg@gmail.com'>
    <img src='https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg?logo=minutemailer&logoColor=#29B99B'>
</a>
</br>
</br>

Here is my wireframe using a new technology in beta called Uizard. What this allows you to do is make hand drawn sketches and then transform that into wireframe, then prototype, and eventually export your components into React. They are currently in beta and undergoing a massive update, according to support. I was hoping to fully demonstrate the all the features, but all component exports are disable at this time. The furthest I got with it is to the protype phase. I will build out the components from there. Keep an eye on this company. It could make wireframing, prototyping, and component builds seamless. They can be found here: https://uizard.io/ 
My prototype is here: 
https://app.uizard.io/p/SDuDpMth3 

</br>
</br>
<img src ='./concepts/capital-block-home.png'>
</br>
</br>

### Required
    npm install 
</br>

#### Start Servers
    npm start

##### Server should be started on port 3000
</br>

#### Open new terminal
Then navigate to root

    cd API
    nodemon index 
</br>

#### Now both servers should be running on ports
    PORT 3000 (Front-end)
    PORT 9000 (Backt-end)
</br>
</br>

## Register New User
<img src='./concepts/capital-block-register.gif'>
</br>
</br>

## Make a Blog Post
<img src='./concepts/capital-block-blog-post.gif'>
</br>
</br>

## Logout User
<img src='./concepts/capital-block-logout.gif'>
</br>
</br>

## About Page
<img src='./concepts/capital-block-about.png'>
</br>
</br>

## Contact Us
<img src='./concepts/capital-block-contact.png'>
</br>
</br>

### Folder Structure 
    📦capital-block
    ┣ 📂API
    ┃ ┣ 📂.vscode
    ┃ ┃ ┗ 📜launch.json
    ┃ ┣ 📂config
    ┃ ┃ ┣ 📜config.js
    ┃ ┃ ┣ 📜database.js
    ┃ ┃ ┣ 📜express.js
    ┃ ┃ ┗ 📜routes.js
    ┃ ┣ 📂controllers
    ┃ ┃ ┣ 📜index.js
    ┃ ┃ ┣ 📜post.js
    ┃ ┃ ┗ 📜user.js
    ┃ ┣ 📂models
    ┃ ┃ ┣ 📜Post.js
    ┃ ┃ ┣ 📜TokenBlacklist.js
    ┃ ┃ ┣ 📜User.js
    ┃ ┃ ┗ 📜index.js
    ┃ ┣ 📂routes
    ┃ ┃ ┣ 📜index.js
    ┃ ┃ ┣ 📜post.js
    ┃ ┃ ┗ 📜user.js
    ┃ ┣ 📂utils
    ┃ ┃ ┣ 📜auth.js
    ┃ ┃ ┣ 📜index.js
    ┃ ┃ ┗ 📜jwt.js
    ┃ ┣ 📜.env
    ┃ ┣ 📜index.js
    ┃ ┗ 📜package-lock.json
    ┣ 📂concepts
    ┃ ┣ 📜aboutPage.jpg
    ┃ ┣ 📜blog-details.jpg
    ┃ ┣ 📜capital-block-about.png
    ┃ ┣ 📜capital-block-blog-post.gif
    ┃ ┣ 📜capital-block-home.png
    ┃ ┣ 📜capital-block-logout.gif
    ┃ ┣ 📜capital-block-register.gif
    ┃ ┣ 📜contactUsPageSketch.jpg
    ┃ ┣ 📜homepageSketch.jpg
    ┃ ┣ 📜loginPage.jpg
    ┃ ┗ 📜registerPage.jpg
    ┣ 📂node_modules
    ┣ 📂public
    ┃ ┣ 📜favicon.ico
    ┃ ┣ 📜index.html
    ┃ ┗ 📜manifest.json
    ┣ 📂src
    ┃ ┣ 📂App
    ┃ ┃ ┣ 📜App.js
    ┃ ┃ ┗ 📜App.test.js
    ┃ ┣ 📂components
    ┃ ┃ ┣ 📜About.js
    ┃ ┃ ┣ 📜BlogHome.js
    ┃ ┃ ┣ 📜BlogPost.js
    ┃ ┃ ┣ 📜Contact.js
    ┃ ┃ ┣ 📜Footer.js
    ┃ ┃ ┣ 📜Home.js
    ┃ ┃ ┣ 📜Login.js
    ┃ ┃ ┣ 📜Logout.js
    ┃ ┃ ┣ 📜Navbar.js
    ┃ ┃ ┣ 📜Post.js
    ┃ ┃ ┗ 📜Register.js
    ┃ ┣ 📂img
    ┃ ┃ ┣ 📜avatar.jpeg
    ┃ ┃ ┗ 📜capital-block-final-logo.png
    ┃ ┣ 📂routes
    ┃ ┃ ┣ 📜AboutRoute.js
    ┃ ┃ ┣ 📜ContactRoute.js
    ┃ ┃ ┣ 📜HomeRoute.js
    ┃ ┃ ┣ 📜LoginRoute.js
    ┃ ┃ ┣ 📜LogoutRoute.js
    ┃ ┃ ┣ 📜PostRoute.js
    ┃ ┃ ┣ 📜RegisterRoute.js
    ┃ ┃ ┣ 📜SupportRoute.js
    ┃ ┃ ┗ 📜index.js
    ┃ ┣ 📂services
    ┃ ┃ ┗ 📜getPosts.js
    ┃ ┣ 📂utils
    ┃ ┃ ┣ 📜API.js
    ┃ ┃ ┗ 📜History.js
    ┃ ┣ 📜index.css
    ┃ ┣ 📜index.js
    ┃ ┣ 📜logo.png
    ┃ ┗ 📜registerServiceWorker.js
    ┣ 📜.gitignore
    ┣ 📜LICENSE
    ┣ 📜README.md
    ┣ 📜package-lock.json
    ┣ 📜package.json
    ┗ 📜yarn.lock

### Potential external API's 

Plaid- for linking app with bank accounts 
https://dashboard.plaid.com/overview/sandbox 

CryptoCompare- for cyrpto market data. 
https://www.cryptocompare.com/cryptopian/api-keys 

Abstract- Phone Verification, Location Verification, Email Verification
https://app.abstractapi.com/ 

### TODO
- [ ] About link in navbar.
- [ ] make call to get user name in navbar.
- [ ] make profile page
- [ ] reverse order of homeblog/homepost rendering.
- [ ] make front end validation on register and login inputs.
- [ ] crypto ticker.
- [ ] Make Message Schema and routes to save messages to DB from contact us page.
- [ ] Post details page.
- [ ] 404 page.
- [ ] Heroku Depoloyment.
- [ ] Complete README.md.