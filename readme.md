# Higiene

Starter kit for modern, hygienic web development. This is meant to simplify starting a new project, and will most likely work with whatever framework or build tool you may want to use. I'm creating this as the "zero-level" setup often seems to be lacking in projects I partake in. There's usually some hygiene for doing what a certain framework expects, but none of the "boring" stuff like making sure trash doesn't make its way to master, or that there is some linting in place. My repo Hiperf uses many of the same techniques as Higiene but may be too focused on the performance/Webpack bits for you.

Higiene might also be nice to look at if you are learning and want to have some directions on how to pull of CI/CD scripts, pre-commit checking and so on.

## Features

* CI/CD: Simple starter files for running build scripts at Bitbucket (Pipelines), Travis CI, and Netlify
* Pre-commit checks: Uses Husky to run tests before allowing committing or pushing
* Zero-config linting: Why spend time setting up linting, when we can have XO just do all of the work with zero work :)
* Asset optimization: Static asset optimization for images via Imageoptim and SVGO
