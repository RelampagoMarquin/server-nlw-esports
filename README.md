# server-nlw-esports

# Antes de executar

Crie seu .env e coloque a variavel DATABASE_URL, caso contrario o banco não irá executar
verifique o time de banco que deseja usar na dacumentação do prisma
ex:
```bash
DATABASE_URL="postgresql://user:senha@host:port/nomedatabase"
```

```bash
npm i # instalar dependencias
npx prisma migrate dev # executar migração e construir banco
npx prisma db seed # para cadastrar algumas informações no banco
```

# Executando
```bash
npm run dev
```

# Rotas
### Games:
- **GET:**  `/games`
- **POST:** `/games/:id/ads`
- **GET:**  `/games/:id/ads`

### ADs:
- **GET:** `/ads/{id}/discord`