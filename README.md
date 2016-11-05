# ekibito

It is a mobile application that manages to visited the station of the road.

## Screenshot

![home](https://raw.githubusercontent.com/Slowhand0309/ekibito/master/screenshot/home_screen.png)

## Require

* **[node.js(npm)](https://nodejs.org/en/)**
* **[grunt-cli](https://github.com/gruntjs/grunt-cli)**
* **[bower](https://bower.io)**

## Setup

Clone this repository and install all dependencies via npm.<br>

```sh
$ git clone https://github.com/Slowhand0309/ekibito.git
$ npm install
```

Add the platform and plugins for use in phonegap.<br>
`pg` command is grunt task by [phonegap-grunt](https://github.com/Slowhand0309/phonegap-grunt).

```sh
$ grunt pg:add
```

Add vendor library via bower.

```sh
$ bower install
```

Build and run.

```sh
$ grunt pg:build
$ grunt pg:run
```

## Licence

[MIT](https://opensource.org/licenses/MIT)

## Author

[slowhand0309](https://github.com/Slowhand0309)
