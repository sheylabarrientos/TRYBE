#!/bin/bash

if [ $USER = root ] || [ -x operadores.sh ]
then 
	echo "O usuário eh o $USER e tem permissao sobre o arquivo"
else
	echo "Ou o usuário n eh o root ou não tem permissao sobre o arquivo"
fi 
