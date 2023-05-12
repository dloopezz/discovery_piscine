#!/bin/bash

if [[ -z $1 ]]
then
	echo No arguments supplied
else
	for dir in $@
	do
		mkdir ex$dir
	done
fi
