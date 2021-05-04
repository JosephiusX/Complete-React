# Complete-React

sec.2 L.2

     install yarn glabally:
        npm install -g yarn

sec.3 Hello React

     Indecision app
        page : https://indecision.mead.io

        source : https://github.com/andrewjmead/react-course-2-indecision-app

    installing live-server with yarn:
        yarn global add live-server

    installing live-server with npm if yarn isin't working:
        npm i -g live-server

    to run the public directory run live server from inside its parent directory like so:
        live-server public

L.9 Setting up Babel

    instead of installing individual plugins , we can use React Presets instead that will have the plugins that we need

        install babel:
            yarn global add babel-cli@6.24.1
            npm i -g bable-cli@6.24.1

            I had trouble with the yarn and when I tryed npm the issue was the same, to fix this I uninstalled them both and used the npm command again
            yarn global remove babel-cli
            npm uninstall -g babel-cli 
            npm install -g babel-cli
        then to check if it worked
            babel --help

        initalize package.json using yarn
            yarn init

        install react preset:
            yarn add babel-preset-react@6.24.1

        install env preset:
            yarn add babel-preset-env@1.5.2
            
        our first babel command(to compile the code):
            babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
        we leave this running in the background

L.10 Exploring JSX

         some extensions that are helpful with JSX:
            Babel ES6/ES7
            Path Intellisense


        



        