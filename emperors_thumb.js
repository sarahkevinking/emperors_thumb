if (Meteor.isClient) {
    Template.hello.greeting = function () {
        return "This is a way better greeting.";
    };
    Template.hello.events({
        'click .downvote' : function () {
            console.log("downvote");
	    Meteor.call('update_verso',Session.get('pollice_verso_id'),-1)
        }
    })
    Template.hello.events({
        'click .upvote' : function () {
            console.log("upvote");
	    Meteor.call('update_verso',Session.get('pollice_verso_id'),1)
        }
    })
    Template.hello.pvs = function () {
	return PolliceVersos.find().fetch();
	}
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
