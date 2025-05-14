# PORTFOLIO-APP
Portfólio e estudo de React com Laravel

## Como iniciar
- Entre na raiz do projeto **portfolio-app**
- Instale as dependências: 
  - ``composer install``
- Crie um .env baseado no .env.example:
  - ``cp .env.example .env``
- Gere uma chave nova para o laravel:
  - ``php artisan key:generate``
- Inicie o docker:
  - ``docker compose up -d``
- Entre no container:
  - ``docker compose exec -it app bash``
> O 'app' no comando pode ser substituído pelo nome do container,
>
> caso isso seja feito, o 'compose' se torna dispensável.


## Inicializando o banco de dados
- Dentro do container, execute o comando para fazer as migrations iniciais
  - ``php artisan migrate``
- Abra o phpmyadmin para conferir:
  - http://localhost:8080/

## Outros passos

- Instalei o breeze: 
  - ``composer require laravel/breeze``
- Defini o front do breeze como react: 
  - ``php artisan breeze:install react``
- Adicionei a instalação do Node no container, dentro do Dockerfile: 
  - ``RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \ apt-get install -y nodejs``
  - Após isso, buildei novamente o container:
  - ``docker compose down`` / ``docker compose up --build``
  - Dentro do container:
  - ``npm install`` & ``npm run dev``
