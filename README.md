etm
===

[![Travis](https://img.shields.io/travis/JumpLink/etm.svg)](https://travis-ci.org/JumpLink/etm)
[![npm](https://img.shields.io/npm/v/etm.svg)](https://www.npmjs.com/package/etm)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Join the chat at https://gitter.im/migme/beachball](https://img.shields.io/badge/gitter-join%20chat-brightgreen.svg)](https://gitter.im/JumpLink/etm)

An theme manager for Express.js.

Forked from [ied by Alexander Gugel](https://github.com/alexanderGugel/ied).

Installation
------------

The easiest way to install etm is using [npm](https://www.npmjs.org/):

```
  npm i -g etm
```

Alternatively you can also "bootstrap" etm.
After an initial installation via npm, etm will install its own dependencies:

```
  git clone https://github.com/JumpLink/etm etm && cd $_ && make install
```

Usage
-----

The goal of `etm` is to support ~ 80 per cent of the npm commands that one uses
on a daily basis. Feature parity with npm **other than** with its installation
process itself is not an immediate goal. Raw performance is the primary concern
during the development process.

A global [configuration](lib/config.js) can be suppletm via environment
variables. `NODE_DEBUG` can be used in order to debug specific sub-systems. The
progress bar will be disabled in that case.

Although `run-script` is supported, lifecycle scripts are not.

At this point in time, the majority of the command API is
[self-documenting](bin/cmd.js). More extensive documentation will be available
once the API is stabilized.

A high-level [USAGE](bin/USAGE.txt) help is also suppletm. The main goal is to
keep the API predictable for regular npm-users. This means certain flags, such
as for example `--save`, `--save-dev`, `--only`, are supported.

```
  etm is a theme manager for Express.js

  Usage:

    etm command [arguments]

  The commands are:

    install     fetch packages and dependencies
    run         run a package.json script
    test        run the test-suite of the current package
    shell       enter a sub-shell with augmented PATH
    ping        check if the registry is up
    ls          print the dependency graph
    expose      make a sub-dependency `require`able
    config      print the used config
    init        initialize a new package
    link        link the current package or into it
    unlink      unlink the current package or from it

  Flags:
    -h, --help      show usage information
    -v, --version   print the current version
    -S, --save      update package.json dependencies
    -D, --save-dev  update package.json devDependencies
    -o, --only      install a subset of the dependencies
    -r, --registry  use a custom registry (default: http://registry.npmjs.org/)

  Example:
    etm install
    etm install <pkg>
    etm install <pkg>@<version>
    etm install <pkg>@<version range>

    Can specify one or more: etm install semver@^5.0.1 tape
    If no argument is suppletm, installs dependencies from package.json.
    Sub-commands can also be called via their shorthand aliases.

  README:  https://github.com/JumpLink/etm
  ISSUES:  https://github.com/JumpLink/etm/issues
```

Development notes
-----------------

To run the test suite, run `npm test`. The test suite mocks all HTTP requests,
with fixtures cached inside `fixtures/generated/`. If you make new tests that
perform HTTP requests, it'll be saved there.

```
npm test
```

Credits
-------

etm is forked from [ied by Alexander Gugel](https://github.com/alexanderGugel/ied), thank you for this greate project!

FAQ
---

* What does etm stand for?

  Express Theme Manager

License
-------

Licensed under the MIT license. See [LICENSE](LICENSE.md).

