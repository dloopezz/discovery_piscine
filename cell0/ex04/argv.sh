#!/bin/bash

# `-z` is a conditional expression used in the if statement to check if the
# length of the first argument passed to the script is zero or not. If the
# length is zero, it means no arguments were supplied to the script.

if [[ -z $1 ]]
then
	echo No arguments supplied
else
	for i in $1 $2 $3
		do
		echo $i
	done
fi
