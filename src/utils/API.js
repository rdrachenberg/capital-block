import axios from 'axios';
let postMethodObj = {method: 'POST',credentials:'include', mode: 'cors', headers:{"Content-Type" : "application/json"}};
let postMethodObjText = {method: 'POST', credentials:'include', mode:'cors', headers:{"Content-Type" : "application/text"}};
export default {
    
    // Get all users
    getUsers: function(){
        
        return axios.get('/api/user');
    },
    // Get a specific user by id 
    getUser: function(id){
        return axios.get('/api/user/' + id);
    },
    // Delete a user by id
    deleteUser: function(id){
        return axios.delete('/api/user/' + id);
    },
    // Save a user to the Database 
    saveUser: function(userData){
        userData = JSON.stringify(userData);
        // console.log(userData);
        return axios.post('http://localhost:9000/api/user/register', userData, postMethodObj);
        
    },
    // Update all users
    updateUser: function(id, dataToUpdate){
        return axios.put('/api/user/' + id, dataToUpdate);
    },
    
    
    login: function(loginData){
        loginData = JSON.stringify(loginData);
        console.log(loginData);
        console.log('above is the loginData');
        return axios.post('/api/user/login', loginData, postMethodObj);
    },

    //****************** POST ******************/
    savePost: function(postData){
        postData = JSON.stringify(postData);

        console.log(postData);
        return axios.post('/api/post', postData, postMethodObj);
    },

    // Get all post
    getPosts: function(){
        
        return axios.get('/api/post');
    },

    logout: function(){
        // data = JSON.stringify(data);

        // console.log(data);
        return axios.post('/api/user/logout', postMethodObjText);
    },
};