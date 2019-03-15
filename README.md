# memory_game

A simple card memory game built with the big three HTML, CSS and JS.

## The "rules"

+ Cards will be shuffled and displayed in rows.
+ Two players take turns. Each turn, 2 cards are picked and shown.
+ If they match, the player gets a point, otherwise they are turned over and the next player has their turn.
+ The player with the highest score wins.

## The Plan

I want to try using this readme as a chronological outline of my plan for the project.

### Thursday 3/15 - The Beginning

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

Managing game state is probably the thing I'm least sure about how to do right now. I can't think of another way to do it other than having flag variables, and styling dependent upon them. For example, it might start with a `titleScreen = true` so as to provide a sense of where one is in the process instead of the game just starting, and have a kind of modal or overlay with a start button. Make sure to turn that false when start is clicked, and switch over to `mainScreen`, and `endScreen` when finished. The main game state will be the only one with no overlay.

As for flow: you have a title screen, press start, it's playerOne's turn, the cards are shown briefly before turning black, cards are picked and turns are switched, until they run out, at which point the endScreen comes and tells who got the most matches. I was thinking of having a certain number of turns and refreshing cards, but this is probably easier.

I think that's all I can do to plan for now.