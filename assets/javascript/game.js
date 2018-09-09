/* Show random number at start of game
if image clicked add points to total score
a. images should have values
when image clicked again update points by adding 
    image clicked points to current total points
If total score ===random number
a. WINNER!!
Else if total score > random number 
    b. Loser

    -- show wins and loses 
    -- automatic restart with out refresh page
    random number - 19 - 120 
crystal hidden values btw 1 - 12 */

$(document).ready(function(){
    var ranNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('.ranNumBox').html(ranNum);

    $('.box').on('click', function(){
     
        var demo = $(this).attr('value' , ranNum);
        var demo =$(this).val();
        console.log(demo);
    });

});