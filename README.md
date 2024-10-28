📱 blogDev_f3m
Aplicação Web de Rede Social para Desenvolvedores

Este é um projeto acadêmico desenvolvido em sala de aula na Fatec de Matão. A aplicação, construída em React com Firebase, é uma plataforma social para desenvolvedores compartilharem conteúdo, interagirem e se conectarem.

🔍 Visão Geral do Projeto
O blogDev_f3m utiliza Firebase como backend, Firestore como banco de dados e foi configurado para deploy com Firebase Hosting. A interface é responsiva, oferecendo uma experiência agradável em dispositivos móveis.

🛠️ Tecnologias Utilizadas
Frontend: React — Interface web responsiva.
Backend: Firebase (Autenticação e Firestore).
Banco de Dados: Firestore.
Deploy: Firebase Hosting.
🌟 Funcionalidades
Cadastro e Login: Autenticação gerenciada pelo Firebase.
Postagens e Interações: Usuários podem criar, editar e visualizar publicações.
Responsividade: Estilização adaptada para dispositivos móveis com CSS customizado.
🚀 Como Iniciar o Projeto Localmente
Clone o Repositório

bash
Copiar código
git clone https://github.com/seuusuario/blogDev_f3m.git
cd blogDev_f3m
Instale as Dependências

bash
Copiar código
npm install
Configurações de Firebase

Crie um projeto no Firebase e ative Firestore e Authentication.
Adicione suas credenciais do Firebase no arquivo .env (ou conforme a configuração da aplicação).
Execute o Projeto

Código:
npm start
Acesse a Aplicação

Abra o navegador e acesse ["blogdev-lemuel.web.app"](https://blogdev-lemuel.web.app/)
🌐 Deploy
O projeto está implantado no Firebase Hosting e acessível através do link disponibilizado. Para configurar o seu próprio deploy no Firebase:

Instale a CLI do Firebase:

Código:
npm install -g firebase-tools
Inicie a configuração de hospedagem:

Código:
firebase login
firebase init
firebase deploy
🤝 Contribuições
Contribuições são bem-vindas! Para colaborar:

Faça um fork do projeto.
Crie uma branch com a sua feature (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -m 'Adiciona nova feature').
Envie para a branch principal (git push origin feature/nova-feature).
Abra um pull request.
Divirta-se explorando o blogDev_f3m!
