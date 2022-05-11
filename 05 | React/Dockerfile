FROM node:16-alpine

# UNIX WORKDIR 명령어 - Linix에서 cd 같은 명령어
WORKDIR /app 

# 빈번히 변경되는 파일은 가장 하단에
COPY package.json package-lock.json ./

# RUN npm install
# package-lock.json에 명시된 버전 정확히 설치
RUN npm ci

COPY src ./

RUN npm run build
