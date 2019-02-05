FROM php:7.0-apache

RUN apt-get update && \
    apt-get install php5.6 && \
    apt-get clean

COPY build /var/www/html/

