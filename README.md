Dockerizing
===========

Dockerize your node application

# Install

```npm i dockerizing --save```

# Integrate

Just add to your `package.json` in section `scripts`. It should be like this:

```
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dockerizing": "node ./node_modules/dockerizing/dockerize",
      "dockerizing-build": "node ./node_modules/dockerizing/build",
      "dockerizing-run": "node ./node_modules/dockerizing/run"
    },
```

# Docker config

Add `docker` section into your `package.json`

### Port forwarding

if you need forward port from container to host machine add configuration :

```
      "docker": {
        "ports": [
          {
            "in": 3000,
            "out": 3000
          }
        ]
      },
```

Ports section include array of object, which port should be forward:
  * `in` - port in cotainer,
  * `out` - port in host machine

# Dockerizing

For create Dockerfile just run
```
    npm run dockerizing
```

For build your docker image run

```
   npm run dockerizing-build
```

For run your docker container run

```
   npm run dockerizing-run
```

