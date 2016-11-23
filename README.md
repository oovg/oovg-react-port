# OOVG REACT PORTFOLIO

This is a React front-end and Node back-end portfolio application, meant to be set up using Docker.

Setup the Docker Host
---

```
eval "$(docker-machine env default)"
```

Confirm

```
docker-machine ls
```


Build the Image
---

```
docker build -t oovg-react-port .
```

Run the Container
---

```
docker run -p 8877:8877 -p 3001:3001 --name oovg-react -v $(pwd)/src:/usr/local/src/src --sig-proxy=false oovg-react-port npm run browsersync


Check IP
---

```
docker-machine ip default
```


# oovg-react-port
