if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "This is a way better greeting.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("Oh lawd the button is pressed");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
