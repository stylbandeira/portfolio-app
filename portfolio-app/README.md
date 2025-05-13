# portfolio-app
Portfólio

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
