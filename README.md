# nodeValorize

## Regras
 
 - Cadastro de Usuário

    [ ] Não será permitido o cadastro de um usuário com mesmo e-mail.

    [ ] Não será permitido o cadastro de usuário sem e-mail. 

 - Cadastro de Tags

    [ ] Não será permitido cadastrar mais de uma tag com o mesmo nome.

    [ ] Não será permitido cadastrar tag sem nome.

    [ ] Não será permitido o cadastro de tag por usuário que não seja administrador.

  - Cadastro de Elogios   

    [ ] Não será permitido o usuário inserir um elogio para si mesmo. 

    [ ] Não será permitido inserir elogio para usuário inválidos.

    [ ] O usuário precisa está authenticado na aplicação.

## Conceitos

 - Server => Etities => Controllers => Services

## Metodos
 - GET    => Buscar informação
 - POST   => Inserir (Criar) uma informação
 - PUT    => Alterar uma informação
 - DELETE => Remover um dado
 - PATCH  => Alterar uma informação especifica


/*
Tipos de Parametros
Routes Params => http://localhost:3333/produtos/7895463254 busca por id
Query Params => http://localhost:3333/produtos?name=teclado&description=otimo busca por descrição
Body Params => {
    "name": "teclado",
    "description": "teclado otimo"
} Paramentros que vem no corpo da requisição
*/

#Instalando Type ORM squelite3
 yarn add typeorm reflect-metadata sqlite3 

#Instalar e configurar as migrations type orm
 https://typeorm.io/#/migrations 

#Instatalar e configurar o UsingCLI para executar as migrations
 https://typeorm.io/#/using-cli 
 No arquivo: package.json em script. Foi adicionado uma linha para ser executada para instalação. 

#Instalar biblioteca uuid
 yarn add uuid => definir chave unica 

#Criar uma entidade.
 yarn typeorm migration:create -n CreateUsers 

#Para Entities se comunicar é preciso criar uma camada repositories. 

#Configurar Type ORM para typescript
 link doc: https://typeorm.io/#/
 exe: Arquivo = tsconfig.json
 descomente as duas linhas
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,

no mesmo arquivo: tsconfig.json
"strictPropertyInitialization": false,  
Alterar para false para não apresentar erro na criação de entidade de classe
----------------------------------------
    

#Comandos para excusão das migrations
 para que esses comandos funcione deve está configurado o 'ormconfig.json'

- yarn typeorm -help : lista comandos
- yarn typeorm migration:create -n CreateUsers : Criação de entidade
- yarn migration:run : Executar script de migrations criadas  
- yarn typeorm entity:create -n User : Cria uma entity com nome entity e cria uma estrutura

