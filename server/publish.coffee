Meteor.publish('pollice_versos', (args) ->
    return PolliceVersos.find(
        pollice_verso_id: args.pollice_verso_id
    )
)
