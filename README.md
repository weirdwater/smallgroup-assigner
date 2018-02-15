# ESK indeling generator

This is a node.js script written in Typescript to assign smallgroup members to prepare a smallgroup meeting.

## Run it yourself!

Make sure you have node.js installed. Additionally you can install yarn, but npm (which is installed with node) will do. Nothing fancy going on.

```
$ node -v
v8.1.4
```

Clone this repo using git, or download the source code by zip. Once it is set up enter the directory and install all necessary dependencies.

```bash
$ npm install
```

Or using yarn:

```bash
$ yarn
```

Now you can run the script yourself. The start command in the `package.json` will compile the source before executing using node.

```bash
$ npm start
```

Or using yarn:

```bash
$ yarn start
```

That should do the trick.

## Future improvements

One of the many ways this script could be improved is by making the inputs variable. This could be achieved by providing a json file through stdin or an argument.
