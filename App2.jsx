import React from "react";

/*
Instruções rápidas (substitua conforme necessário):
- Criar projeto com Vite (ou CRA) e configurar Tailwind CSS.
  Exemplos:
    npm create vite@latest my-app -- --template react
    cd my-app
    npm install
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    // configurar tailwind.config.js e adicionar @tailwind directives em src/index.css
- Coloque este arquivo como src/App.jsx (substitua o template default).
- Comentários "/* Substitua aqui * /" indicam onde trocar imagens/links.
- Use exatamente: <img src="Coloque a foto aqui" alt="Foto do grupo The Code Breakers" /> para a foto do grupo.
- Para todos os links que precisam ser substituídos, use exatamente href="Deixe o link assim".
*/

/* Observação de Acessibilidade:
 - Navegação com aria-labels, cores com contraste e textos alternativos.
 - Micro-animações via classes Tailwind (transition, transform).
*/

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      {/* Navegação fixa */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16" aria-label="Navegação principal">
            <div className="flex items-center gap-4">
              <div className="text-indigo-600 font-bold text-lg">The Code Breakers</div>
              <span className="hidden sm:inline text-sm text-gray-600">SwapStudy</span>
            </div>
            <ul className="hidden md:flex items-center gap-6 text-sm">
              <li><a href="#home" className="hover:text-indigo-600 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-indigo-600 transition-colors">Sobre</a></li>
              <li><a href="#funcionalidades" className="hover:text-indigo-600 transition-colors">Funcionalidades</a></li>
              <li><a href="#mvp" className="hover:text-indigo-600 transition-colors">MVP</a></li>
              <li><a href="#roadmap" className="hover:text-indigo-600 transition-colors">Roadmap</a></li>
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="Deixe o link assim" /* Substitua aqui */
                className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition"
                aria-label="Nos conheça melhor aqui"
              >
                Nos conheça melhor aqui
              </a>
              <a
                href="Deixe o link assim" /* Substitua aqui */
                className="hidden sm:inline text-sm text-indigo-600 hover:underline"
              >
                Materias do projeot
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO */}
        <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                The Code Breakers
              </h1>
              <p className="mt-3 text-indigo-600 font-medium text-lg">
                SwapStudy — troque micro-serviços e forme micro-equipes para entregar projetos rápidos.
              </p>
              <p className="mt-4 text-gray-600 max-w-xl">
                Plataforma que facilita conectar estudantes e profissionais para completar milestones com
                entregas rápidas e colaboração por micro-serviços.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="Deixe o link assim" /* Substitua aqui */
                  className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:scale-[1.02] transform transition"
                  aria-label="Nos conheça melhor aqui"
                >
                  Nos conheça melhor aqui
                </a>
                <a
                  href="Deixe o link assim" /* Substitua aqui */
                  className="inline-flex items-center px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
                  aria-label="Materias do projeot"
                >
                  Materias do projeot
                </a>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                <strong>Propósito:</strong> acelerar a entrega de projetos educativos e protótipos comerciais por
                formação rápida de times.
              </div>
            </div>

            <div className="relative">
              {/* Imagem do grupo - usar exatamente este placeholder no src */}
              <div className="w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                {/* Substitua aqui: coloque a foto do grupo no atributo src */}
                <img src="Coloque a foto aqui" alt="Foto do grupo The Code Breakers" className="w-full h-64 object-cover" />
                {/* Fim da instrução exata de placeholder */}
              </div>

              <div className="mt-3 flex gap-3 justify-end">
                <span className="text-xs text-gray-500">Foto do time (substitua acima) /* Substitua aqui */</span>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE O PROJETO */}
        <section id="sobre" className="bg-white border-t border-b py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Sobre o Projeto</h2>
            <p className="mt-3 text-gray-600 max-w-3xl">
              Plataforma mobile + web onde estudantes trocam ou vendem micro-serviços por moedas internas,
              formando micro-equipes para entregar milestones de projetos.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">Público-alvo</h3>
                <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
                  <li>Estudantes</li>
                  <li>Pequenas empresas / Startups</li>
                  <li>Integrantes de disciplinas acadêmicas</li>
                </ul>
              </div>

              <div className="p-5 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">Proposta de valor</h3>
                <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
                  <li>Montar times rápidos para entregas por milestones.</li>
                  <li>Economia interna com moedas e reputação.</li>
                  <li>Integração com GitHub e fluxo de trabalho ágil.</li>
                </ul>
              </div>

              <div className="p-5 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">Resumo</h3>
                <p className="mt-3 text-gray-600">Foco em usabilidade, verificação de perfis e comunicação direta entre candidatos e criadores de vagas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FUNCIONALIDADES */}
        <section id="funcionalidades" className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Funcionalidades (Visão Geral)</h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800">Essenciais</h3>
                  <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
                    <li>Cadastro / Autenticação (email, Google, GitHub)</li>
                    <li>Perfil com skills, portfólio e reputação</li>
                    <li>Feed de vagas / projetos com filtros</li>
                    <li>Criar vaga/projeto e gerenciar candidaturas</li>
                    <li>Chat em tempo real (WebSocket)</li>
                    <li>Workspace com milestones e tarefas</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800">Admin & Analytics</h3>
                  <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
                    <li>Painel de administração de conteúdo e usuários</li>
                    <li>Dashboard de métricas (engajamento, taxas)</li>
                    <li>Moderation tools e sistema de denúncias</li>
                    <li>Relatórios de pagamentos e transações</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800">Integrações</h3>
                  <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
                    <li>Integração com GitHub (sync de repositórios)</li>
                    <li>Gateway de pagamento (Pagamentos/Comissões)</li>
                    <li>Armazenamento (S3) e CDN</li>
                    <li>Sentry / Prometheus para observabilidade</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800">Wallet & Reputação</h3>
                  <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
                    <li>Wallet interna com moedas</li>
                    <li>Transações, packs e pacotes de destaque</li>
                    <li>Avaliações e histórico de entregas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MVP */}
        <section id="mvp" className="bg-white border-t py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">MVP (Fluxo Priorizado)</h2>
            <p className="mt-3 text-gray-600">Foco mínimo viável para validar o fluxo de matchmaking e comunicação.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">Prioridade</h3>
                <ol className="mt-3 list-decimal list-inside text-gray-600 space-y-1">
                  <li>Criar vaga</li>
                  <li>Candidatar-se</li>
                  <li>Chat entre candidato e criador</li>
                  <li>Perfis mínimos com skills e portfólio</li>
                </ol>
              </div>

              <div className="p-5 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">Componentes mínimos</h3>
                <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
                  <li>Autenticação básica</li>
                  <li>CRUD de vagas (título, descrição, skills)</li>
                  <li>Sistema de candidaturas</li>
                  <li>Chat simples via WebSocket</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fluxo do usuário */}
        <section id="fluxo" className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Fluxo do Usuário</h2>
            <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-600">
              <li>Usuário cria conta (login social ou email).</li>
              <li>Preenche perfil com skills e portfólio.</li>
              <li>Criador publica vaga com milestones e recompensa.</li>
              <li>Candidatos se inscrevem e iniciam chat.</li>
              <li>Time negocia escopo e começa milestone.</li>
              <li>Concluir milestone e avaliar participantes.</li>
            </ol>
          </div>
        </section>

        {/* Papéis */}
        <section id="papeis" className="bg-white border-t py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Papéis e Permissões</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold">Owner</h4>
                <p className="text-sm text-gray-600 mt-2">Cria projetos, gerencia pagamentos e membros.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold">Member</h4>
                <p className="text-sm text-gray-600 mt-2">Participa de vagas, realiza tarefas e recebe pagamento.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold">Reviewer</h4>
                <p className="text-sm text-gray-600 mt-2">Avalia entregas e garante qualidade.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold">Admin</h4>
                <p className="text-sm text-gray-600 mt-2">Modera conteúdo e administra métricas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Arquitetura técnica */}
        <section id="arquitetura" className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Arquitetura Técnica (Resumo)</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">Frontend</h4>
                <p className="mt-2 text-gray-600">React + Tailwind (web). Mobile: React Native / Flutter.</p>
                <h4 className="font-semibold mt-4">Backend</h4>
                <p className="mt-2 text-gray-600">Java Spring Boot, JWT, Postgres, WebSocket (STOMP) para chat, Redis, S3, gateway de pagamento.</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">CI/CD & Observability</h4>
                <p className="mt-2 text-gray-600">GitHub Actions, Sentry, Prometheus, logs centralizados.</p>
                <h4 className="font-semibold mt-4">Segurança</h4>
                <p className="mt-2 text-gray-600">Proteção contra fraude, rate limiting, validação de documentos e KYC para pagamentos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modelo de dados */}
        <section id="modelo-dados" className="bg-white border-t py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Modelo de Dados (tabelas principais)</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>users</strong>: id, name, email, password_hash, role, created_at</li>
                <li><strong>profiles</strong>: user_id, bio, skills, linkedin, portfolio</li>
                <li><strong>projects</strong>: id, owner_id, title, description, status</li>
                <li><strong>vacancies</strong>: id, project_id, title, requirements, reward</li>
                <li><strong>applications</strong>: id, vacancy_id, user_id, message, status</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>teams</strong>: id, project_id, members</li>
                <li><strong>milestones</strong>: id, team_id, title, due_date, status</li>
                <li><strong>tasks</strong>: id, milestone_id, title, assignee, status</li>
                <li><strong>messages</strong>: id, channel_id, sender_id, content, created_at</li>
                <li><strong>wallets / transactions / reviews</strong>: registros financeiros e avaliações</li>
              </ul>
            </div>
          </div>
        </section>

        {/* API / Endpoints */}
        <section id="api" className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">API / Endpoints Principais</h2>
            <div className="mt-4 text-gray-600 space-y-2">
              <code className="block bg-gray-100 p-3 rounded">POST /auth/register</code>
              <code className="block bg-gray-100 p-3 rounded">POST /auth/login</code>
              <code className="block bg-gray-100 p-3 rounded">GET /projects</code>
              <code className="block bg-gray-100 p-3 rounded">POST /projects</code>
              <code className="block bg-gray-100 p-3 rounded">POST /vacancies/{'{id}'}/apply</code>
              <code className="block bg-gray-100 p-3 rounded">GET /users/{'{id}'}/profile</code>
              <code className="block bg-gray-100 p-3 rounded">/ws/projects/{'{id}'} (WebSocket para chat)</code>
            </div>
          </div>
        </section>

        {/* Wireframes / UX */}
        <section id="ux" className="bg-white border-t py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Wireframes / UX rápido (telas)</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Feed:</strong> Cards filtráveis por skills, destaque de vaga paga.</li>
              <li><strong>Project:</strong> Página do projeto com milestones, equipe e canal de chat.</li>
              <li><strong>Candidate:</strong> Perfil do candidato com skills, avaliações e histórico.</li>
              <li><strong>Workspace:</strong> Kanban simples por milestone com checklist e arquivos.</li>
              <li><strong>Wallet:</strong> Saldo, transações, compra de packs e destaque de vagas.</li>
            </ul>
          </div>
        </section>

        {/* Roadmap / Sprints */}
        <section id="roadmap" className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Roadmap / Sprints (Exemplo)</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Sprint 0 (2 semanas)</h4>
                <p className="text-sm mt-2">Setup infra, protótipo low-fi e autenticação básica.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Sprint 1</h4>
                <p className="text-sm mt-2">CRUD de vagas, perfis mínimos e candidaturas.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Sprint 2</h4>
                <p className="text-sm mt-2">Chat em tempo real e workspace inicial.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Sprint 3</h4>
                <p className="text-sm mt-2">Wallet, transações e destaque de vagas.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Sprint 4</h4>
                <p className="text-sm mt-2">Admin dashboard, analytics e moderação.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Sprint 5–6</h4>
                <p className="text-sm mt-2">Aprimoramentos, testes e lançamento beta.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tasks por integrante */}
        <section id="tasks" className="bg-white border-t py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Tasks por integrante (sugestão)</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Frontend</h4>
                <p className="text-sm mt-2">Implementar UI, responsividade e integração com API.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Backend & DevOps</h4>
                <p className="text-sm mt-2">APIs, banco, autenticação e pipelines CI/CD.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Design / QA / PM</h4>
                <p className="text-sm mt-2">Prototipação, testes e gerenciamento do sprint.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Métricas / Monetização / Riscos */}
        <section id="metrics" className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">Métricas / KPIs</h4>
                <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
                  <li>Nº de vagas publicadas</li>
                  <li>Taxa de candidatura</li>
                  <li>Tempo médio de match</li>
                  <li>Engajamento no chat</li>
                  <li>Taxa de conclusão de milestones</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">Monetização</h4>
                <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
                  <li>Freemium + planos pagos</li>
                  <li>Comissão sobre transações</li>
                  <li>Packs de moedas e destaque de vaga</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold">Riscos & Mitigações</h4>
                <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
                  <li>Abuse / reputação → moderação e verificação de perfis</li>
                  <li>Pagamentos → gateway confiável e escrow</li>
                  <li>Baixa adesão → parcerias com universidades e divulgação</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Script curto para pitch */}
        <section id="pitch" className="bg-white border-t py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Script curto para apresentar ao time</h2>
            <p className="mt-3 text-gray-600">
              SwapStudy conecta estudantes e PMEs para formar micro-equipes por milestones, usando uma
              economia interna para facilitar pagamentos e reputação. Validamos rapidamente com um MVP
              focado em criação de vagas, candidaturas e chat em tempo real.
            </p>
          </div>
        </section>

        {/* Checklist imediato */}
        <section id="checklist" className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Checklist imediato</h2>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-2">
              <li>Escolha de stack e definir responsáveis.</li>
              <li>Criar repositório e branch model.</li>
              <li>Protótipo rápido no Figma.</li>
              <li>Definir Sprint 1 e reunião de kickoff.</li>
            </ul>
          </div>
        </section>

        {/* Equipe / Avatares */}
        <section id="team" className="bg-white border-t py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-gray-900">Equipe</h2>
            <p className="mt-2 text-gray-600">Fotos e LinkedIn (substitua os links abaixo)</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Pedro Cesar Camargo dos Santos",
                "Leonardo Barros",
                "Luana moreira de arruda",
                "Yasmin Kamilly Da Silva Antunes",
                "Eduardo Sobral Leite",
                "Pedro Paulo Salvetti",
              ].map((name) => (
                <div key={name} className="p-4 bg-gray-50 rounded-lg flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                    {/* Substitua aqui: avatar da pessoa */}
                    <img src="Coloque a foto aqui" alt={`Avatar de ${name}`} className="w-14 h-14 rounded-full object-cover" />
                    {/* /Substitua aqui */}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{name}</div>
                    <a
                      href="Deixe o link assim" /* Substitua aqui */
                      className="text-sm text-indigo-600 hover:underline"
                      aria-label={`LinkedIn de ${name}`}
                    >
                      Deixe o link assim
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-lg font-bold text-indigo-400">The Code Breakers</div>
              <p className="mt-2 text-sm text-gray-300 max-w-md">SwapStudy — micro-equipes, entregas rápidas e aprendizado prático.</p>
            </div>

            <div className="flex gap-3">
              <a
                href="Deixe o link assim" /* Substitua aqui */
                className="px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 transition"
                aria-label="Nos conheça melhor aqui"
              >
                Nos conheça melhor aqui
              </a>
              <a
                href="Deixe o link assim" /* Substitua aqui */
                className="px-4 py-2 border border-indigo-600 rounded-md hover:bg-indigo-800/60 transition"
                aria-label="Materias do projeot"
              >
                Materias do projeot
              </a>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-400">
            © {new Date().getFullYear()} The Code Breakers — Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Pequeno botão de voltar ao topo */}
      <a
        href="#home"
        className="fixed right-5 bottom-5 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition transform"
        aria-label="Voltar ao topo"
      >
        {/* SVG seta para cima */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
}

/*
Deploy / Observações finais (colocar em README do repositório):

- Como rodar localmente:
  1) Criar app (Vite recomendado):
     npm create vite@latest my-app -- --template react
     cd my-app
     npm install
  2) Instalar Tailwind:
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     // editar tailwind.config.js e src/index.css conforme docs oficiais
  3) Substituir src/App.jsx pelo arquivo atual. Importar src/index.css no src/main.jsx.
  4) npm run dev

- Como buildar:
  npm run build
  Serve estático com Vercel, Netlify ou qualquer host estático.

- Onde substituir:
  - Foto principal do time: procurar a tag exata:
      <img src="Coloque a foto aqui" alt="Foto do grupo The Code Breakers" />
    /* Substitua aqui */
 