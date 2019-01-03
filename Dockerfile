FROM golang

RUN apt-get -y update \
    && apt-get install -y curl python-pygments git ssh-client \
    # && curl -sL https://deb.nodesource.com/setup_4.x | bash - \
    && apt-get install -y nodejs \
    && apt-get autoremove -y
