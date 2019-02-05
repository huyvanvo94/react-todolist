#!/usr/bin/env bash

docker build -t task_list
docker run -d -p 5003:80 task_list