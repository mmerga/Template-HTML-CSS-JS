//////////////////////---------------------///////////////////

Project Name

//////////////////////---------------------///////////////////

Some description

//////////////////////---------------------///////////////////

Package Tutorial if you don't know how to use it, like I didn't know at the beginning and it's not easy to find information on the internet about how to use it.

This Package uses 'Vite' to run its code, if you use React (JSX) you may need to change the file name 'index.js' to 'index.jsx'.

Ok. Currently the Package has two dependencies:

"dependencies": {
     "react": "17.0.1",
     "react-dom": "17.0.1"
   },
   
You can remove or add whatever is necessary for your project.

And to run your project, you will open your console (Ctrl + Shit + ' on VSCode) and type the command:

  npm install

This will take a few seconds to install your project's dependencies, and when finished, to view your project:

  npm run dev

Or, 'npm run start', also works

It will generate a local link so you can view it in your browser.

And finally, if you want to create a 'bundle' of your project, type:

  npm run build

This will create a folder within your project with a new project, which you can use anywhere.

!!!!DO NOT DELETE YOUR MAIN PROJECT, THE 'bundle' IS NOT SOMETHING HUMANS CAN READ!!!!