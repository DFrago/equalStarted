The new repo is broken into two main directories : frontend and backend
As far as the repo goes, the main thing to be concerned about in the frontend is the src folder, and the pb_data folder in the backend.
The default brach is set to working, so we will have the main branch as a backup. 
I've also added a todo.txt file as a place we can leave detailed notes regarding what needs to be done.

#CLI instructions (or jsut use vscode extension if u want)
To add your changes{
  git add [What you want to add] #You can use . to add all changes
  git commit -m "Your commit message here"
  git push
}

To get new changes{
  git fetch #Fetches new changes from origin
  git pull
}

Useful tips{
  git branch -a (Useful for seeing what branch you are on)
  git checkout branch [branch] (Changing branches)
}

I've written a small cross-platform script called qDraw ( as in quickDraw lmao). It's a small optional thing that you can use if you want to. Or not idc.
This script will automatically launch the frontend and backend guis (as well as the required background process ).

It can be passed command line arguments. 
The options are as follows{
  1: Only open the frontend page
  2: Only open the backend page
  3: Open both the frontend and backend pages
}

Example usage (open both frontend and backend){
  python qDraw.py 3 
}

Alternatively, you can just run the program with no paramters and allow the script to prompt you for an option(or if you just forget to pass a paramter)
Example usage (open both frontend and backend){
  python qDraw.py  
}
I would recommend opening the whole equalStarted folder in vsCode, running the qDraw script in the integrated terminal, then opening whatever code you want to edit and do you thing.
