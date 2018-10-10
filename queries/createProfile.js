const mongoose = require('mongoose');
const {Profile} = require('../profile-model/Profile');
const createProfile = () =>{
    const HiwotNega = new Profile({
        firstName: 'Hiwot',
        lastName: 'Nega',
        profilePictures: 'img/dahlia.jpg',
        followers: 34,
        following: 20,
        posts: 'img/dahlia.jpg'
    });
      Profile.remove({}).then(() =>{
          console.log('cleared db......');
      })
      
    HiwotNega.save((err,Hiwotprofile) =>{
        if(err) return console.error(err);
        console.log(Hiwotprofile)
    });
}

module.exports = createProfile;