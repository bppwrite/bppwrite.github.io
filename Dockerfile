FROM golang:1.7

RUN apt-get -y update \
    && apt-get install -y nodejs npm curl python-pygments git ssh-client \
    && npm install jspm -g 

