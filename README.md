SwapStudy

Plataforma de micro-serviços para formação de micro-equipes e entregas rápidas

Visão geral

SwapStudy permite que estudantes e profissionais formem micro-equipes para entregar projetos em formato de milestones, utilizando uma economia interna com moedas e reputação. A plataforma conecta quem precisa de serviços com quem pode entregá-los, promovendo colaboração ágil entre disciplinas, startups e pequenas empresas.

Público-alvo

Estudantes

Pequenas empresas / Startups

Integrantes de disciplinas acadêmicas

Proposta de valor

Montar times rápidos focados em entregas por milestones.

Uso de moeda interna e sistema de reputação para incentivar qualidade.

Integração com fluxos ágeis e com plataformas como GitHub.

Funcionalidades principais
Essenciais

Cadastro / autenticação via email, Google ou GitHub.

Perfil com skills, portfólio e reputação.

Feed de vagas/projetos filtráveis por skills.

Criação de vagas/projetos e gerenciamento de candidaturas.

Chat em tempo real (WebSocket).

Workspace com milestones e tarefas.

Administração & Analytics

Painel de administração de usuários e conteúdo.

Dashboard de métricas (engajamento, taxas de uso).

Ferramentas de moderação, sistema de denúncias.

Relatórios de pagamentos e transações.

Integrações

GitHub (sincronização de repositórios).

Gateway de pagamento para comissões/transações.

Armazenamento em S3 e uso de CDN.

Observabilidade com Sentry/Prometheus.

Carteira & Reputação

Carteira interna: moedas, pacotes e destaques de vaga.

Transações entre usuários e histórico de entregas.

Avaliações de participantes ao final de cada milestone.

MVP (Produto Mínimo Viável)

Para validar o fluxo principal da plataforma, focar em:

Criação de vaga.

Candidatura de usuário.

Chat entre candidato e criador.

Perfis mínimos com skills e portfólio.

Componentes mínimos:

Autenticação básica.

CRUD de vagas (título, descrição, skills).

Sistema de candidaturas.

Chat simples via WebSocket.

Fluxo do Usuário

Usuário cria conta (login social ou e-mail).

Preenche perfil com skills e portfólio.

Criador publica vaga com milestone(s) e recompensa(s).

Candidatos se inscrevem, iniciam chat.

Time negocia escopo e inicia milestone.

Conclusão da entrega, avaliação dos participantes.

Papéis e Permissões

Owner: Cria projetos, gerencia pagamentos e membros.

Member: Participa de vagas, executa tarefas, recebe pagamento.

Reviewer: Avalia entregas e garante qualidade.

Admin: Modera conteúdo, administra métricas e usuários.

Arquitetura Técnica (Resumo)

Frontend: React + Tailwind (web); Mobile: React Native / Flutter.

Backend: Java Spring Boot, JWT, Postgres, WebSocket (STOMP), Redis, S3.

CI/CD & Observabilidade: GitHub Actions, Sentry, Prometheus, logs centralizados.

Segurança: Proteção contra fraude, rate limiting, validação de documentos e KYC para pagamentos.

Modelo de Dados (tabelas principais)

users: id, name, email, password_hash, role, created_at

profiles: user_id, bio, skills, linkedin, portfolio

projects: id, owner_id, title, description, status

vacancies: id, project_id, title, requirements, reward

applications: id, vacancy_id, user_id, message, status

teams: id, project_id, members

milestones: id, team_id, title, due_date, status

tasks: id, milestone_id, title, assignee, status

messages: id, channel_id, sender_id, content, created_at

wallets / transactions / reviews: registros financeiros e avaliações

API - Endpoints Principais

POST /auth/register

POST /auth/login

GET /projects

POST /projects

POST /vacancies/{id}/apply

GET /users/{id}/profile

WebSocket: /ws/projects/{id} para chat

Wireframes / UX rápido (telas previstas)

Feed: Cards filtráveis por skills, destaques de vaga paga.

Página de Projeto: Milestones, equipe, chat e histórico.

Perfil do Candidato: Skills, avaliações, histórico de entregas.

Workspace: Kanban simples para milestone com checklist e arquivos.

Wallet: Saldo, transações, compra de pacotes e destaque de vagas.

Roadmap / Sprints (Exemplo)

Sprint 0 (2 semanas): Setup infra, protótipo low-fi, autenticação básica.

Sprint 1: CRUD de vagas, perfis mínimos e candidaturas.

Sprint 2: Chat em tempo real e workspace inicial.

Sprint 3: Carteira, transações e destaque de vaga.

Sprint 4: Dashboard admin, analytics e moderação.

Sprint 5-6: Aprimoramentos gerais, testes e lançamento beta.

Tarefas por integrante (sugestão)

Frontend: Implementar UI, responsividade, integração com API.

Backend & DevOps: APIs, banco de dados, autenticação, pipelines CI/CD.

Design / QA / PM: Prototipação, testes, gerenciamento de sprint.

Métricas / KPIs: Nº de vagas publicadas, taxa de candidatura, tempo médio de match, engajamento no chat, taxa de conclusão de milestones.

Monetização

Modelo freemium + planos pagos.

Comissão sobre transações entre usuários.

Pacotes de moedas e destaque de vagas para aumentar visibilidade.

Riscos & Mitigações

Baixa adesão → parcerias com universidades e divulgação focada.

Fraude / reputação → moderação, verificação de perfis e sistema de penalidades.

Pagamentos inseguros → gateway confiável + escrow para retenção de fundos até entrega.

Apresentação curta

SwapStudy conecta estudantes e PMEs para formar micro-equipes por milestones, usando uma economia interna para facilitar pagamentos e reputação. Validamos rapidamente com um MVP focado em criação de vagas, candidaturas e chat em tempo real.

Checklist imediato

 Escolher stack final e definir responsáveis.

 Criar repositório e estrutura de branches.

 Protótipo rápido (ex: Figma) para principais telas.

 Definir Sprint 1 e fazer reunião de kickoff.

Equipe

Pedro Cesar Camargo dos Santos 

Leonardo Barros 

Luana Moreira de Arruda 

Yasmin Kamilly da Silva Antunes 

Eduardo Sobral Leite 

Pedro Paulo Salvetti 
