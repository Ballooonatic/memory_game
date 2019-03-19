# memory_game

A simple card memory game built with the big three HTML, CSS and JS.

## The "rules"

+ Cards will be shuffled and displayed in rows.
+ Two players take turns. Each turn, 2 cards are picked and shown.
+ If they match, the player gets a point, otherwise they are turned over and the next player has their turn.
+ The player with the highest score wins.

## The Plan

I want to try using this readme as a chronological outline of my plan for the project.

### Session 0 ~ The Beginning

So I guess the only two directions to go with this are:

1. Make the cards out of HTML elements, animate with CSS, manage state with JS
2. Use a JS game framework, everything goes in a big canvas element. Game functionality may be easier, fancy anims/particles may be cool.

I'm thinking I'll go with the former, since a big ol' framework should be more than this kind of game needs, and practicing the fundamentals would be more of a benefit than learning a framework I won't be using again.

As far as the file structure, it should be really minimal and there's no fancy back end stuff or anything so it might just be fine having everything all together

#### Rough Outline

##### Cards

So, the card deck will surely be an array of objects. Instead of making them like playing cards, it'll be easier to just have a black div show a color upon clicking. That way I don't have to deal with finding card images.

```js
[
    { color: "pink" },
    { color: "red" },
    { color: "magenta" },
    { color: "maroon" }
]
```

I found a nifty shuffle algorithm, so that takes care of shuffling the deck.

I'll have to code them to have two of each color, display them with a for loop, make them disappear with JS triggering a `display: none` or something in the CSS... I think that about covers the cards.

Actually, I think I'll have to design the cards so there's a color div and a black one on top. Disappear the black one to show the color, and then the other goes too. That's probably the easiest way to get them working.

##### Players

I suppose the players will have their own objects too, with a score value and maybe a whose-turn-it-is flag value. Actually, the flag could be outside of the player object, so that way we don't have to deal with 2 flags being out of sync. Then again, it might be more readable having like a `{ turn = true }` (or false) on each player rather than having an external variable `isPlayerOnesTurn` or something, because there would only be one turn variable: true for playerOne's turn, false for playerTwo's turn. Not the most intuitive thing. I guess I'll go with the turn flags on each player just for intuitiveness.

##### Game

Managing game state is probably the thing I'm least sure about how to do right now. I can't think of another way to do it other than having flag variables, and styling dependent upon them. For example, it might start with a `titleScreen = true` so as to provide a sense of where one is in the process instead of the game just starting, and have a kind of modal or overlay with a start button. Make sure to turn that false when start is clicked, and switch over to `mainScreen`, and `endScreen` when finished. The main game state will be the only one with no overlay. EDIT: Maybe I'll just do one state variable with a string for which state is active. That way I only gotta change one variable instead of two and worrying about inconsistency.

As for flow: you have a title screen, press start, it's playerOne's turn, the cards are shown briefly before turning black, cards are picked and turns are switched, until they run out, at which point the endScreen comes and tells who got the most matches. I was thinking of having a certain number of turns and refreshing cards, but this is probably easier.

I think that's all I can do to plan for now.

### Session 1 ~ Modal Troubles

I've set up the inital foundation for the game by now and I'm forgetting that I wanted to try doing this chronologically, kind of documenting my progress and challenges and such. I can't cover every little thing; deciding what not to omit is a challenge in itself.

Right now, I'm trying to get the first title screen going. I looked up on [w3schools](www.w3schools.com) how to do a modal. So I'm working this modal example into my own wicked ends, and instead of their demo clicking a button to show it, I want it to show on page load. Seems `window.onload` doesn't wanna work for me for some reason.

The console was showing me that the modal I was trying to display within that onload function was `null`, so it turned out to be an easy variable scoping issue. Not sure why their code works with the modal being defined outside the function and not mine, but hey. Programming! Now I just gotta make this thing look not disgusting.

### Session 2 ~ Perfecting the Card Display Functionality

So I've finally gotten the cards looking nice and showing properly when clicked... almost. If you're slow enough, after 2 are clicked they will (for now) cover back up regardless of a match. But you can click them fast enough to beat the code and start screwing things up, so I want to fix that. At the moment, I'm trying to temporarily remove and re-add the event listener on all cover cards upon revealing 2 cards. Lol. Things are getting hairy. It is currently doing some crazy things. I'm actually not sure how to fix this one yet. I'm pretty tired, and have been at this for a while. I can feel my mind slowing. Time to call it a night.

Update: I found an awesome [reddit thread](https://www.reddit.com/r/learnjavascript/comments/8ly7sp/temporarily_disabling_all_event_handlers_in/) that helped me solve this issue. So instead of adding and removing event handlers on the fly, we create a boolean `pauseInput`, and a function `pauseable` to wrap our event callbacks in. So basically instead of giving the callback right to the `addEventListener` function, we pass in `pauseable` and pass our callback in to `pauseable`. So what `pauseable` does is it checks the value of `pauseInput`, and will return the callback only if it's false. This way we can pause our inputs just by changing the boolean value `pauseInput` anywhere we so choose. Wowee

### Session 3 ~ Handling Card Matching

All this time I'd thought having a cover over the cards and removing them on click would be easier, because how would we keep track of the colors? How could I change it from the cover color to the face color, keeping track of each card's corresponding colors? Now that I've gotten to the part where I change player scores and turns depending on matchups, I don't know how to access the colors of the cards I've revealed because the event was bound to the cover, which isn't connected to the face card. Oof. I was able to figure out a way to re-code it without the cover cards, simply changing the colors instead. I didn't my first try was going to work, though!

### Session 4 ~ Reworking the Game

I've gotten this far and realized I missed one small detail... In the instructions for this game, the cards were meant to stay shown if matched, and the game ends when all cards are up. This whole time I'd simply counted the matches, and even kept the colors the same. The players could've simply matched the same cards over and over to win. As hilarious as this is, going back and reworking my solution was a pain. I was having the worst time getting the proper cards to turn back over after a mismatch. Turns out the cards I was pulling that were supposed to be shown weren't getting removed from that list like I'd wanted upon mismatch, and I was having a hard time accessing the right ones from that collection in the first place... But I'd figured it out.

### Final Thoughts

Thanks so much for reading! That's about all I've got.