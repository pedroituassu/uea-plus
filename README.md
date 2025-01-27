# AVISO

Todas as coisas listadas abaixo eu enviei como sugestão para os setores
responsáveis na universidade e, enquanto não for implementado, 
continuarei a desenvolver a extensão.

---

# UEA+

Fiz essa extensão por conta de algumas ressalvas que eu e a maioria dos 
alunos, senão todos, têm sobre o site da UEA.\
No momento, só implementei a feature para poder utilizar gerenciadores de 
senha no site.

## Gerenciadores de senha

Na página de login do portal, por algum motivo, o tipo do campo da senha 
está definido como `text`, ao invés de `password`. Essa feature não faz 
nada além de ajeitar isso.

## Próximos passos

Futuramente vou implementar as seguintes features:
* Tirar a necessidade de inserir as informações de login de novo a cada
30 minutos
* Mostrar informações sobre as notas e frequência dos alunos

### Login

Atualmente, os cookies de autenticação do site duram apenas 30 minutos, 
causando incômodo nos alunos, que por sua vez têm de refazer o login 
infinitas vezes.\
Essa feature será implementada ou por meio da extensão do tempo do 
cookie, ou por meio do login automatizado ao entrar no site.

### Informações sobre notas e frequência

Nesse caso, não precisa ser resolvido, é apenas algo adicional (por isso 
o "plus" no nome da extensão).\
A ideia é verificar informações das notas para mostrar o aluno a sua 
média atual, quanto falta para passar, quantas faltas são permitidas, 
quantas faltam para atingir o máximo, entre outras coisas do tipo.