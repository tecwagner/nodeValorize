# nodeValorize

## Regras

- Cadastro de Usuário

  [x] Não será permitido o cadastro de um usuário com mesmo e-mail.

  [x] Não será permitido o cadastro de usuário sem e-mail.

- Cadastro de Tags

  [x] Não será permitido cadastrar mais de uma tag com o mesmo nome.

  [x] Não será permitido cadastrar tag sem nome.

  [x] Não será permitido o cadastro de tag por usuário que não seja administrador.

- Cadastro de Elogios

  [x] Não será permitido o usuário inserir um elogio para si mesmo.

  [x] Não será permitido inserir elogio para usuário inválidos.

  [x] O usuário precisa está authenticado na aplicação.

## Conceitos

- Server => Etities => Controllers => Services

## Metodos

- GET => Buscar informação
- POST => Inserir (Criar) uma informação
- PUT => Alterar uma informação
- DELETE => Remover um dado
- PATCH => Alterar uma informação especifica

- Tipos de Parametros

- Routes Params => http://localhost:3333/produtos/7895463254 busca por id

- Query Params => http://localhost:3333/produtos?name=teclado&description=otimo busca por descrição

- Body Params => { - "name": "teclado", - "description": "teclado otimo"
  } Paramentros que vem no corpo da requisição

## Instalando o tsconfig.json

- yarn tsc --init

## Instalando dependencida de desenvolvimento

- As tipagem de desenvolvimento devem ser instaladas com o comando a baixo
- As @types devem ser disponiveis somente para o desenvolvimento.
- yarn add @types/node --save -D

## Instalando Type ORM squelite3

- yarn add typeorm reflect-metadata sqlite3

## Instalar e configurar as migrations type orm

- https://typeorm.io/#/migrations

## Instatalar e configurar o UsingCLI para executar as migrations

- https://typeorm.io/#/using-cli

- No arquivo: package.json em script. Foi adicionado uma linha para ser executada para instalação.

## Instalar biblioteca uuid

- yarn add uuid => definir chave unica

## instalar tratativa de erros async do node.js express

- yarn add express-async-errors
- importar para classe de server
- import "express-async-errors"

## instalar JWT

- yarn add jsonwebtoken.
- yarn add@types/jsonwebtoken -D

## Criar uma entidade.

- yarn typeorm migration:create -n CreateUsers

## Para Entities se comunicar é preciso criar uma camada repositories.

## Configurar Type ORM para typescript

- link doc: https://typeorm.io/#/
- exe: Arquivo = tsconfig.json
- descomente as duas linhas

  - "emitDecoratorMetadata": true,
  - "experimentalDecorators": true,

- no mesmo arquivo: tsconfig.json
- "strictPropertyInitialization": false,
- Alterar para false para não apresentar erro na criação de entidade de classe

---

## Comandos para excusão das migrations

- para que esses comandos funcione deve está configurado o 'ormconfig.json'

- yarn typeorm -help : lista comandos
- yarn typeorm migration:create -n CreateUsers : Criação de entidade
- yarn typeorm migration:run : Executar script de migrations criadas
- yarn typeorm entity:create -n User : Cria uma entity com nome entity e cria uma estrutura

## Costomizar os erros

- Criar classe de erro customizadas

## Para geração de uma senha secreta do usuário usaremos MD5 generator

- https://www.md5hashgenerator.com/

## Melhorias na aplicação

- Criar um serviço de envio de e-mail para pessoa notificada.
- Criar documentação no swagger.
- Hospedar no heroku
- Criar erros customizado
- Add morga para logs
