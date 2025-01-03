# etchAsketch
A javascript etch-a-sketch game, a project from the Odin Project's Foundations course.

Start date 1.1.25

Started with boilerplate html.
Connected stylesheet and javascript files.

Created a div to contain dynamically generated divs.

Created div generation function for columns.
Appended css class to each generation.

1.2.25
Nested column creation inside row creation.
Created button allowing for user input to change the grid size. Includes grid reset functions.

I looked all over for a method to dynamically set the padding for each box. Nothing is showing up utilizing flexbox and maintaining borders.
I set an arbitrary number based on the desktop screen size and it updates depending on the number of boxes called.
Unfortunately, the pixels change (increase) with increasing number of boxes. This is predominently a function of borders taking up
more and more space. I'm not sure if there is a way to overcome this problem. 

Presently, the max number of boxes fits. The assignment called for utilizing flex-box methods rather than grids or arrays, so I am using those.
I asked Claude for some help and its solution was to utilize React first, then used grid functions secondarily. I will stay true to the assignment
and only utilize flexbox, even though a grid function would be way easier to constrain the elements utilizing an arbitrary padding on an empty <div>.

I've spent enough time trying to perfect the grid generation, so I will move on to the hover effect and extra credit options.

Created a block fill function which attached an event listener to each DOM node gathered in the node list of gridBlocks.
The block changes background color to a dark gray when the mouse hovers over it.

15:17EST Joseph Haas
Basic project constraints completed

Next, I will work on the extra credit assignments. The first is applying random colors to the fill function. The second is applying an ever darkening effect 
with opacity. I am taking it upon myself to add toggle buttons for using these effects. Rainbow Fill for random colors. Shade Fill for opacity.

23:03EST Joseph Haas
Rainbow fill feature works. Still sorting out the shading function. Toggle works, but haven't figured out the underlying shading.

1.3.25
For the sake of moving on, I've decided to comment out the shading code I've written. I may come back to it at some point, but I'd like to continue
learning rather than spend an inordinate amount of time on the shading feature.