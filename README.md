# Aplicação base de API Rest

Aplicação base simples de API Rest para uso em testes de conexão http.

## Comandos auxiliares para o terminal

```Invoke-WebRequest -UseBasicParsing http://127.0.0.1/api/v1/post -ContentType "application/json" -Method POST -Body '{"nome":"rex","raca":"pastor","idade":5,"peso":20,"tipoRacao":"DogS","pesoDispenser":22,"pesoPote":1.2,"agendas":[{"hora":1,"minuto":10,"peso":10},{"hora":20,"minuto":20,"peso":30}]}'```