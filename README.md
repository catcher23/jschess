
# JSChess
Chess engine written in pure Javascript with a fully-playable JQuery front-end.

## Play here
[link][game]

[game]: http://catcher23.github.io/jschess

Play full-featured chess in the browser!

![screenshot_1]
![screenshot_2]

[screenshot_1]: ./images/screenshots/chess1.png
[screenshot_2]: ./images/screenshots/chess2.png

## Technology
Technology used
- jQuery
- JavaScript

### Game
Click on a square to select a piece. The selected square will be highlighted in green, and all possible moves from that position are highlighted in blue. The game ends when there is a checkmate, and resets.


#### Enemy Movement AI
Boid objects has their sights. Currently, the logic is having them flock
with the same kind when they 'see' each other. Thanks to the prototypical
inheritance implementation and modular design, this AI can be easily used on
other fun logics, including:
- Chasing Mode
- Scaring Away Mode
- Protecting Weapons from Picked up Mode
