# AVISO

Todas as coisas listadas abaixo eu enviei como sugestão para os setores
responsáveis na universidade e, enquanto não for implementado, 
continuarei a desenvolver a extensão.

# Lembrete

Em breve, teremos eleições na universidade. Lembrem-se bem de como está a sua
vida de universitário quando forem votar e, principalmente, não se esqueçam da
diferença entre comida que servem nas unidades e a que servem na reitoria.
Não se esqueçam também dos problemas de estrutura e segurança nas unidades.

---

# UEA+

Fiz essa extensão por conta de algumas ressalvas que eu e a maioria dos 
alunos, senão todos, têm sobre o site da UEA.\
No momento, só implementei a feature para poder utilizar gerenciadores de 
senha no site.

## Instalação

Até agora só consegui fazer a versão para o Firefox porque, infelizmente, 
a Google é mercenária e, por causa disso, a publicação de uma extensão para
o Chrome é 5 dólares.\
Então, até que eu consiga pagar isso não vai ter a
versão do Chrome e de navegadores baseados nele (Opera, Brave, Edge, etc. e tal).

### Firefox

A instalação no Firefox é muito simples. Na direita dessa página tem as
Releases da extensão. Basta procurar por alguma coisa escrito uea-plus v1.2
ou semelhante (nem sempre vai estar v1.2 porque as versões mudam quando a
extensão atualiza).\
[inserir imagem de onde fica as releases] \
Clique aí, procure pelo arquivo .zip e faça o _download_.\
Depois disso, vá ao painel de extensões do navegador e clique em 
gerenciar extensões.\
[inserir imagem de gerenciar extensões] \
Na página de gerenciamento de extensões, clique no símbolo de engrenagem e,
dentro do menu que aparece, clique em "Instalar de um arquivo" (ou coisa
parecida).\
[inserir imagem de instalar de um arquivo] \
Selecione o arquivo baixado anteriormente e aceite as permissões necessárias
para a extensão funcionar.\
Pronto! A sua vida de acessar o portal da UEA já tá 50% melhor. Agora você tem
que configurar a extensão.

## Configuração

Depois de já ter baixado e instalado a extensão, agora você tem que configurar.\
Clique no símbolo da extensão e um popup vai abrir. Ele é assim:\
[inserir imagem do popup]\
Como você poder ver, temos um botão de autologin e os campos de email e senha.
Acredito que os nomes expliquem o que cada um faz, mas, de qualquer jeito, 
segue a explicação.\
Quando o botão de autologin está ativado, assim que você tentar acessar o portal
a extensão vai fazer o login por você, sem necessidade de colocar as informações
toda vez.\
Logo abaixo, estão os campos de email e senha. Você precisa preencher eles para
que o autologin funcione. Não se esqueça de apertar em salvar.\
Parabéns! Você terminou de configurar a extensão!\
\
O texto abaixo fala sobre como cada coisa na extensão funciona, você não precisa
se preocupar em ler ele, exceto se você tiver curiosidade.

## Gerenciadores de senha

Na página de login do portal, por algum motivo, o tipo do campo da senha 
está definido como `text`, ao invés de `password`. Essa feature não faz 
nada além de ajeitar isso.

## Autologin

O autologin funciona de um jeito bem básico. Você coloca as suas informações
no popup e, quando aperta em salvar, os dados são guardados no seu computador,
ou seja, só tem acesso a eles quem pode acessar o seu computador fisicamente.\
Quando você entra na página de login do portal, a extensão verifica se você
ligou o autologin. No caso positivo, ela insere as suas informações e faz login
automaticamente. Não é instantâneo, mas nos meus testes, o processo foi
acelerado em cerca de 12 segundos.

## Próximos passos

Futuramente vou implementar as seguintes features:
* Mostrar informações sobre as notas e frequência dos alunos

### Informações sobre notas e frequência

Nesse caso, não precisa ser resolvido, é apenas algo adicional (por isso 
o "plus" no nome da extensão).\
A ideia é verificar informações das notas para mostrar o aluno a sua 
média atual, quanto falta para passar, quantas faltas são permitidas, 
quantas faltam para atingir o máximo, entre outras coisas do tipo.