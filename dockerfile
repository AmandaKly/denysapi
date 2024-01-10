FROM node:16-alpine

WORKDIR /app

# Instalação do Git
RUN apk update && apk upgrade && \
    apk add --no-cache git

# Clonar o repositório
RUN git clone -b (nameBranch) https://github.com/AmandaKly/denysapi.git .

# Copiar arquivos relacionados a dependências
COPY package*.json ./

# Instalar dependências do NPM
RUN npm install

# Copiar os arquivos do aplicativo (evitando copiar arquivos desnecessários se possível)
COPY . .

CMD ["sh", "-c", "git pull && node index.js"]

EXPOSE 3000
