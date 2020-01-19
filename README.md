# Tradutor de número inteiro para seu equivalente em português

## Inicializando serviço docker no windows (Necessário rodar powershell como administrador)
### Net start com.docker.service

## Inicializando serviço docker no Linux 
### sudo systemctl enable docker

## Inicilizar docker manualmente
### (Opção 1) Usando comando docker
#### 1. docker build -t tradutor_inteiro_texto_node .
#### 2. docker run -it -p 3000:3000 tradutor_inteiro_texto_node

### (Opção 2) Usando comando docker-compose
#### docker-compose up