# reactjs_base_structure

Steps to configure the base enviroment:

1 - Create the package.json:
`yarn init -y`

2 - Install the react components
`yarn add react`

3 - Install dependency to react access the DOM in the web.
`yarn add react-dom`

4 - Install dependency to Babel. Babel will convert the javascript N version to javascript vanilla. (code: all functionalities, cli: to use command line, preset-env: library to identify the enviroment to convert in the best performatic way)
`yarn add @babel/code @babel/cli @babel/preset-env -D`

5 - Install the babel dependency to understand react code to convert.
`yarn add @babel/preset-react -D`

6 - Install the webpack, to help the browser understand a lot of type files. (Ex: sass to css)
`yarn add webpack webpack-cli webpack-dev-server -D`

7 - Dependency to integrate babel and webpack (for that reason in the imports we do need add the file extention)
`yarn add babel-loader -D`

8 - To inject the reference of the bundle we need add this component.
`yarn add html-webpack-plugin -D`

9 - This dependence will help to change the code and the page automaticle reload.
`yarn webpack-dev-server -D`
NOTE: To run, execute `yarn webpack serve -D`

10 - Add to windows understand the enviroment variables
`yarn add cross-env -D`

11 - Read CSS to import in jsx files
`yarn add style-loader css-loader -D `

12 - Use the css by pre processor
`yarn add sass-loader node-sass -D`

13 - Install the typescript                        
` yarn add typescript -D`

14 - Start the typescript plugin
`yarn tsc --init`

NOTES:
Source maps: Turn easy to understand the codes. Its a good way to track the codes. Help to fin errors.
What is a typescript? is a superset, group of functionalities hover of javascript
Why use typescript?
Prós
- Rastreabilily
- Avoid errors
- checked types during the development