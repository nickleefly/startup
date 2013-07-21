"use strict";

var Client = require('github');

var github = new Client({
    debug: true,
    version: "3.0.0"
});


github.authenticate({
    type: "basic",
    username: username,
    password: password
});
github.user.update({
    bio: "I do JavaScript.\r\n\r\nAll the way."
}, function(err) {
    console.log("done!");
});