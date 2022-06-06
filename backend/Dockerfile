FROM bitnami/ruby:3.1.0

WORKDIR /usr/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

EXPOSE 3001

CMD ["rackup", "--host", "0.0.0.0", "-p", "3001"]
