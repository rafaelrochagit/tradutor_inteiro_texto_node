# Tradutor de número inteiro para seu equivalente em português

## Inicializando serviço docker no windows (Necessário rodar powershell como administrador)
```
Net start com.docker.service
```

## Inicializando serviço docker no Linux 
```
sudo systemctl enable docker
```

## Inicilizar docker container
#### (Opção 1) Usando comando docker
```
1. docker build -t tradutor_inteiro_texto_node .
```

```
2. docker run -it -p 3000:3000 tradutor_inteiro_texto_node
```

#### (Opção 2) Usando comando docker-compose
```
docker-compose up
```

## Chmando API

```
λ curl http://localhost:3000/1
{ "extenso": "um" }
```

```
λ curl http://localhost:3000/-1042
{ "extenso": "menos mil e quarenta e dois" }
```

```
λ curl http://localhost:3000/94587
{ "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }
```