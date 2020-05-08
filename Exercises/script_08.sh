#!/bin/bash


FILES=$@

for FILE in $FILES

if [ -f $FILE ]
then
    echo "o $FILE é um arquivo comum"

elif [ -d $FILE ]
then
    echo "o $FILE é um diretorio"
else
    echo "é alguma outra coisa"
fi

ls -l $FILE

done
