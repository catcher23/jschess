(function () {
  if (typeof JSChess === "undefined") {
    window.JSChess = {};
  }
  var Pawn = JSChess.Pawn = function (options) {
    this.className = options.className;
    JSChess.Stepable.call(this, options)
  };
    JSChess.Util.inherits(Pawn, JSChess.Stepable);
    Pawn.prototype.validMove = function (oldPos, pos) {
      // Black
      if (this.board.grid[oldPos[0]][oldPos[1]].color == 'black') {
        // second to last square
        if (oldPos[0] == 6 &&
          this.board.grid[oldPos[0]][oldPos[1]].color == 'black') {

            // Enemy to front left and front right and not blocked in front
               if (this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null &&
                 this.board.grid[oldPos[0] + 1][oldPos[1] - 1] != null &&
                 this.board.grid[oldPos[0] + 1][oldPos[1]] == null) {
                   console.log('enemy to front left and front right not blocked in front');
                  return (
                    (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1) ||
                    (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1) ||
                    (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1])
                  )
                };

              // Enemy to front left and front right and blocked in front
               if (this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null &&
                 this.board.grid[oldPos[0] + 1][oldPos[1] - 1] != null &&
                 this.board.grid[oldPos[0] + 1][oldPos[1]] != null) {
                   console.log('enemy to front left and front right blocked in front');
                   return (
                     (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1) ||
                     (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1)
                   )
                  };
              // Enemy to front left and blocked in front
               if (this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null &&
                 this.board.grid[oldPos[0] + 1][oldPos[1]] != null) {
                   console.log('enemy to front left and blocked in front');
                   return (
                     (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1)
                   )
                  };
              // Enemy to front right and blocked in front
               if (this.board.grid[oldPos[0] + 1][oldPos[1] - 1] != null &&
                 this.board.grid[oldPos[0] + 1][oldPos[1]] != null) {
                   console.log('enemy to front right and blocked in front');
                   return (
                     (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1)
                   )
                  };

              // Enemy to front left and and not blocked in front
                 if (this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null &&
                   this.board.grid[oldPos[0] + 1][oldPos[1]] == null) {
                     console.log('enemy to front left and not blocked in front');
                     return (
                       (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1) ||
                       (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1])
                     )
                    };

              // Enemy to front right and and not blocked in front
                 if (this.board.grid[oldPos[0] + 1][oldPos[1] - 1] != null &&
                   this.board.grid[oldPos[0] + 1][oldPos[1]] == null) {
                     console.log('enemy to front right and not blocked in front');
                     return (
                       (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1) ||
                       (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1])
                     )
                    };
        }
      // First turn enemy to left and two spaces ahead
         if (this.board.grid[oldPos[0] + 2][oldPos[1]] !== null && this.pos[0] == 6 &&
           this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null) {
             console.log('first turn enemy to left and two spaces ahead')
           return (
           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1]) ||
           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1)
            )
          };
      // First turn enemy to right and two spaces ahead
         if (this.board.grid[oldPos[0] + 2][oldPos[1]] !== null && this.pos[0] == 6 &&
          this.board.grid[oldPos[0] + 1][oldPos[1] - 1] !== null) {
            console.log('first turn enemy to right and two spaces ahead');

           return (
           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1]) ||
           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1)
            )
          };
      // First turn enemy to left
         if (this.board.grid[oldPos[0] + 1][oldPos[1]] == null && this.pos[0] == 6 &&
           this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null) {
             console.log('first turn enemy to left');
               console.log(pos);

           return (
           (pos[0] == oldPos[0] + 2 && pos[1] == oldPos[1]) ||
           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1]) ||
           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1)
            )
          };
      // First turn enemy to right
         if (this.board.grid[oldPos[0] + 1][oldPos[1]] == null && this.pos[0] == 6 &&
          this.board.grid[oldPos[0] + 1][oldPos[1] - 1] != null) {
            console.log('first turn enemy to right');


           return (
           (pos[0] == oldPos[0] + 2 && pos[1] == oldPos[1]) ||
           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1]) ||
           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1)
            )
          };
      // Enemy to front left and front right and not blocked in front
       if (this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null &&
         this.board.grid[oldPos[0] + 1][oldPos[1] - 1] != null &&
         this.board.grid[oldPos[0] + 1][oldPos[1]] == null) {
           console.log('enemy to front left and front right not blocked in front');
          return (
            (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1) ||
            (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1) ||
            (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1])
          )
        };

      // Enemy to front left and front right and blocked in front
       if (this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null &&
         this.board.grid[oldPos[0] + 1][oldPos[1] - 1] != null &&
         this.board.grid[oldPos[0] + 1][oldPos[1]] != null) {
           console.log('enemy to front left and front right blocked in front');
           return (
             (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1) ||
             (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1)
           )
          };
      // Enemy to front left and blocked in front
       if (this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null &&
         this.board.grid[oldPos[0] + 1][oldPos[1]] != null) {
           console.log('enemy to front left and blocked in front');
           return (
             (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1)
           )
          };
      // Enemy to front right and blocked in front
       if (this.board.grid[oldPos[0] + 1][oldPos[1] - 1] != null &&
         this.board.grid[oldPos[0] + 1][oldPos[1]] != null) {
           console.log('enemy to front right and blocked in front');
           return (
             (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1)
           )
          };

      // Enemy to front left and and not blocked in front
         if (this.board.grid[oldPos[0] + 1][oldPos[1] + 1] != null &&
           this.board.grid[oldPos[0] + 1][oldPos[1]] == null) {
             console.log('enemy to front left and not blocked in front');
             return (
               (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] + 1) ||
               (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1])
             )
            };

      // Enemy to front right and and not blocked in front
         if (this.board.grid[oldPos[0] + 1][oldPos[1] - 1] != null &&
           this.board.grid[oldPos[0] + 1][oldPos[1]] == null) {
             console.log('enemy to front right and not blocked in front');
             return (
               (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1] - 1) ||
               (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1])
             )
            };

      // First turn enemy 2 spaces ahead
         if (this.board.grid[oldPos[0] + 1][oldPos[1]] == null &&
            this.pos[0] == 6 &&
            this.board.grid[oldPos[0] + 2][oldPos[1]] !== null) {
              console.log('first turn enemy 2 spaces ahead')
           return (

           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1])
            )
          };
      // First turn
         if (this.board.grid[oldPos[0] + 1][oldPos[1]] == null && this.pos[0] == 1) {

           return (
           (pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1]) ||
           (pos[0] == oldPos[0] + 2 && pos[1] == oldPos[1])
            )
          };
      // No Enemy to front left or right and not blocked in front
         if (this.board.grid[oldPos[0] + 1][oldPos[1]] == null) {
            return pos[0] == oldPos[0] + 1 && pos[1] == oldPos[1];
            };
      }
      // White
      if (this.board.grid[oldPos[0]][oldPos[1]].color == 'white') {
      // second to last square
      if (oldPos[0] == 1 &&
        this.board.grid[oldPos[0]][oldPos[1]].color == 'white') {

          // Enemy to front left and front right and not blocked in front
             if (this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null &&
               this.board.grid[oldPos[0] - 1][oldPos[1] + 1] != null &&
               this.board.grid[oldPos[0] - 1][oldPos[1]] == null) {
                 console.log('enemy to front left and front right not blocked in front');
                return (
                  (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1) ||
                  (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1) ||
                  (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1])
                )
              };

            // Enemy to front left and front right and blocked in front
             if (this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null &&
               this.board.grid[oldPos[0] - 1][oldPos[1] + 1] != null &&
               this.board.grid[oldPos[0] - 1][oldPos[1]] != null) {
                 console.log('enemy to front left and front right blocked in front');
                 return (
                   (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1) ||
                   (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1)
                 )
                };
            // Enemy to front left and blocked in front
             if (this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null &&
               this.board.grid[oldPos[0] - 1][oldPos[1]] != null) {
                 console.log('enemy to front left and blocked in front');
                 return (
                   (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1)
                 )
                };
            // Enemy to front right and blocked in front
             if (this.board.grid[oldPos[0] - 1][oldPos[1] + 1] != null &&
               this.board.grid[oldPos[0] - 1][oldPos[1]] != null) {
                 console.log('enemy to front right and blocked in front');
                 return (
                   (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1)
                 )
                };

            // Enemy to front left and and not blocked in front
               if (this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null &&
                 this.board.grid[oldPos[0] - 1][oldPos[1]] == null) {
                   console.log('enemy to front left and not blocked in front');
                   return (
                     (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1) ||
                     (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1])
                   )
                  };

            // Enemy to front right and and not blocked in front
               if (this.board.grid[oldPos[0] - 1][oldPos[1] + 1] != null &&
                 this.board.grid[oldPos[0] - 1][oldPos[1]] == null) {
                   console.log('enemy to front right and not blocked in front');
                   return (
                     (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1) ||
                     (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1])
                   )
                  };
      }
  // First turn enemy to left and two spaces ahead
       if (this.board.grid[oldPos[0] - 2][oldPos[1]] !== null && this.pos[0] == 6 &&
         this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null) {
           console.log('first turn enemy to left and two spaces ahead')
         return (
         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1]) ||
         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1)
          )
        };
    // First turn enemy to right and two spaces ahead
       if (this.board.grid[oldPos[0] - 2][oldPos[1]] !== null && this.pos[0] == 6 &&
        this.board.grid[oldPos[0] - 1][oldPos[1] + 1] !== null) {
          console.log('first turn enemy to right and two spaces ahead');

         return (
         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1]) ||
         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1)
          )
        };
    // First turn enemy to left
       if (this.board.grid[oldPos[0] - 1][oldPos[1]] == null && this.pos[0] == 6 &&
         this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null) {
           console.log('first turn enemy to left');
             console.log(pos);

         return (
         (pos[0] == oldPos[0] - 2 && pos[1] == oldPos[1]) ||
         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1]) ||
         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1)
          )
        };
    // First turn enemy to right
       if (this.board.grid[oldPos[0] - 1][oldPos[1]] == null && this.pos[0] == 6 &&
        this.board.grid[oldPos[0] - 1][oldPos[1] + 1] != null) {
          console.log('first turn enemy to right');


         return (
         (pos[0] == oldPos[0] - 2 && pos[1] == oldPos[1]) ||
         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1]) ||
         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1)
          )
        };
  // Enemy to front left and front right and not blocked in front
     if (this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null &&
       this.board.grid[oldPos[0] - 1][oldPos[1] + 1] != null &&
       this.board.grid[oldPos[0] - 1][oldPos[1]] == null) {
         console.log('enemy to front left and front right not blocked in front');
        return (
          (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1) ||
          (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1) ||
          (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1])
        )
      };

    // Enemy to front left and front right and blocked in front
     if (this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null &&
       this.board.grid[oldPos[0] - 1][oldPos[1] + 1] != null &&
       this.board.grid[oldPos[0] - 1][oldPos[1]] != null) {
         console.log('enemy to front left and front right blocked in front');
         return (
           (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1) ||
           (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1)
         )
        };
    // Enemy to front left and blocked in front
     if (this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null &&
       this.board.grid[oldPos[0] - 1][oldPos[1]] != null) {
         console.log('enemy to front left and blocked in front');
         return (
           (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1)
         )
        };
    // Enemy to front right and blocked in front
     if (this.board.grid[oldPos[0] - 1][oldPos[1] + 1] != null &&
       this.board.grid[oldPos[0] - 1][oldPos[1]] != null) {
         console.log('enemy to front right and blocked in front');
         return (
           (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1)
         )
        };

    // Enemy to front left and and not blocked in front
       if (this.board.grid[oldPos[0] - 1][oldPos[1] - 1] != null &&
         this.board.grid[oldPos[0] - 1][oldPos[1]] == null) {
           console.log('enemy to front left and not blocked in front');
           return (
             (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] - 1) ||
             (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1])
           )
          };

    // Enemy to front right and and not blocked in front
       if (this.board.grid[oldPos[0] - 1][oldPos[1] + 1] != null &&
         this.board.grid[oldPos[0] - 1][oldPos[1]] == null) {
           console.log('enemy to front right and not blocked in front');
           return (
             (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1] + 1) ||
             (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1])
           )
          };

    // First turn enemy 2 spaces ahead
       if (this.board.grid[oldPos[0] - 1][oldPos[1]] == null &&
          this.pos[0] == 6 &&
          this.board.grid[oldPos[0] - 2][oldPos[1]] !== null) {
            console.log('first turn enemy 2 spaces ahead')
         return (

         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1])
          )
        };
    // First turn
       if (this.board.grid[oldPos[0] - 1][oldPos[1]] == null && this.pos[0] == 6) {

         return (
         (pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1]) ||
         (pos[0] == oldPos[0] - 2 && pos[1] == oldPos[1])
          )
        };
    // No Enemy to front left or right and not blocked in front
       if (this.board.grid[oldPos[0] - 1][oldPos[1]] == null) {
          return pos[0] == oldPos[0] - 1 && pos[1] == oldPos[1];
          };
 }
 }
})();
