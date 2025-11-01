# Configuração do WakaTime

## Como obter sua API Key do WakaTime

1. **Acesse o WakaTime**: Faça login em https://wakatime.com
2. **Vá para Configurações**: Clique no seu perfil → Settings → Account
3. **Gere uma API Key**:
   - Role até a seção "API Key"
   - Se já tiver uma, copie ela
   - Se não tiver, clique em "Generate API Key"
   - **IMPORTANTE**: A API Key é privada e não deve ser compartilhada

## Configurar no projeto

1. **Crie o arquivo `.env.local`** na raiz do projeto:

```bash
# Na raiz do projeto
touch .env.local
```

2. **Adicione sua API Key**:

```env
WAKATIME_API_KEY=sua_api_key_aqui
```

3. **Reinicie o servidor de desenvolvimento**:

```bash
pnpm dev
```

## Como funciona

- A API do WakaTime busca estatísticas do seu perfil
- Os dados são atualizados automaticamente a cada 24 horas (cache)
- A função `getWakaTimeWebStats()` filtra apenas tecnologias relacionadas a web
- Você pode escolher o período: `all_time`, `last_7_days`, `last_30_days`, `last_year`

## Endpoints da API

- **All Time**: `getWakaTimeStats('all_time')` - Todas as linguagens
- **Web Technologies**: `getWakaTimeWebStats('all_time')` - Apenas tecnologias web

## Nota de Segurança

⚠️ **NUNCA** commite o arquivo `.env.local` no Git! Ele já está no `.gitignore`.
