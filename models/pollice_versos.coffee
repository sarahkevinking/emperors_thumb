PolliceVersos = new Meteor.Collection('pollice_versos')

Meteor.methods(
    create_verso: (verso_id) ->
        versos = PolliceVersos.find(
            pollice_verso_id : verso_id
        ).fetch()
        verso = {};
        if(versos.length == 0)
            verso = PolliceVersos.insert(
                pollice_verso_id: verso_id,
                score: 0
            )
            verso = PolliceVersos.findOne(verso)
        else
            verso = versos[0]
        return verso
)
