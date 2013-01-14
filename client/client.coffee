if Meteor.is_client
    Meteor.startup( ->
        Meteor.call("create_verso", 1, (error, result) ->
            Session.set('pollice_verso_id', result.pollice_verso_id)
        )
    )
