#!/bin/bash

#02 Eu sou Tryber e tenho orgulho de fazer parte dessa turma.

#_____01______02________________________________________

VAR="Shell Script é demais"

echo "$VAR"

#____________________03_________________________________

HOSTNAME=$(hostname)

echo "Este script está rodando no computador: $HOSTNAME"

#_________________________04_____________________________

FILE="/ravena/casa/script.sh"

if [ -e $FILE ]
then
    echo "O caminho $FILE está habilidado! "
elif [ -w $FILE ]
then
    echo "Você tem permissão para editar $FILE"
else
    echo "Você NÃO foi autorizado a editar $FILE"
fi

#________________________________05_______________________

arquivo=/home/ravena/lista.txt

for nomes in `cat $arquivo`
do 
    echo $nomes
done

#_________________________________________06_______________

echo "Digite o caminho de um arquivo ou diretorio:"

read FILE

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

#_________________07______________________________________________


FILE=$1

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



