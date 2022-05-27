# RENTX 

## 1 - Link da documentação da API rest full - SWAGGER
[http://localhost:3333/api-docs/](http://localhost:3333/api-docs/)


## 2 - Sobre a Aplicação


## 3 - Como rodar o backend localmente - passo a passo

### 3.1 - pré-requisitos em sua máquina.

#### O que você precisa ter instalado em sua máquina ? só 2 coisinhas, são elas:

[3.1.1 - Docker](https://docs.docker.com/engine/install/) <br />
[3.1.2 - Docker Compose](https://docs.docker.com/compose/install/)

### 3.2 - caso não tenha instalado em sua máquina os 2 itens acima, segue o link da documentação abaixo para instalar cada um(docker e docker compose).

[3.1.1 - https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/) <br />
[3.1.2 - https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

### 3.3 - faça o fork deste repositório em sua conta do github <br />
### (uma vez dentro deste repositório, o botão do Fork fica no canto superior direito da tela)

## agora em seu computador, abra o terminal e rode os comandos abaixo de acordo com cada tópico

### 3.4 - com o repositório presente em sua conta do github, faça o clone para vincular a sua máquina.

`https://github.com/DgSantos017/rental_x.git` <br />
ou
`git@github.com:DgSantos017/rental_x.git`

#### obs: no momento que voce fez o Fork, se voce alterou o nome do repositório, altere também o link acima de acordo com o nome que voce escolheu.

## 4 - mapeamento de requisitos

## 5 - comandos docker
## Listar todos os containers
` docker ps -a `

## Listar todos os containers em execução
` docker ps `

## Apagar todos os containers
` docker compose down `

## Apagar um container especifico
` docker rm id_container `

## Levantar e iniciar um container do zero
` docker compose up `

## Levantar e iniciar um container do zero rodando em plano de fundo
` docker compose up -d `

## ver os logs do container rodando em plano de fundo
` docker logs name_container -f `

### 6 - comandos typeorm - migrations

## Criar uma migration
` yarn typeorm migration:create -n NameMigration `

## Rodar uma migration 
` yarn typeorm migration:run `


# Cadastro de carro

**Requisitos Funcionais**
1- deve ser possível cadastrar um novo carro

**Requisitos NÃO Funcionais**

**Regras de Negocio**

## 7 - tecnologias ultilizadas

## 8 - contatos do desenvolvedor