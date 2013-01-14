if (Meteor.isClient) {
    Template.hello.greeting = function () {
        return "This is a way better greeting.";
    };
    Template.hello.events({
        'click .downvote' : function () {
            console.log("downvote");
        }
    })
    Template.hello.events({
        'click .upvote' : function () {
            console.log("upvote");
        }
    })
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
