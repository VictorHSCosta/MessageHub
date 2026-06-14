# MessageHub

MessageHub is a WhatsApp clone built for educational purposes. The main goal of this project is to master modern Ruby on Rails features and frontend integration patterns.

## 🚀 Learning Goals

This project is a deep dive into:
- **Hotwire (Turbo & Stimulus):** Building reactive, SPA-like interfaces without complex JavaScript frameworks.
- **Stimulus JS:** Creating reusable and modular frontend components to enhance user experience.
- **Pure Rails Pagination:** Implementing efficient data handling and navigation using native Rails patterns.
- **Tiptap Integration:** Mastering rich-text editing and real-time feedback within the Rails ecosystem.
- **Modern Asset Pipeline:** Using `pnpm`, `esbuild`, and `Tailwind CSS v4` for a fast development workflow.

## 🛠 Tech Stack

- **Backend:** Ruby on Rails 8.1.x
- **Frontend:** Hotwire (Turbo Drive/Frames/Streams), Stimulus JS
- **Styling:** Tailwind CSS v4
- **Package Manager:** pnpm
- **Database:** PostgreSQL
- **Testing:** RSpec, Factory Bot
- **Linter:** RuboCop (Ruby), ESLint (JavaScript)

## 📦 Installed Libraries

### Ruby gems

- **Rails 8.1:** Main web framework for the application.
- **Devise:** Authentication layer for user registration, login, password recovery, and account flows.
- **ViewComponent:** Component-based UI architecture for reusable Rails views.
- **Lookbook:** Development preview environment for visualizing components.
- **Lucide Rails:** Icon system used across interface components.
- **Turbo Rails and Stimulus Rails:** Hotwire stack for reactive Rails screens.
- **Propshaft, Importmap Rails, Jbuilder, Puma, PostgreSQL, Image Processing:** Core Rails app, assets, API, server, database, and media support.
- **RSpec Rails and Factory Bot Rails:** Test suite and test data setup.
- **RuboCop Rails Omakase, Brakeman, Bundler Audit:** Ruby style, security scanning, and dependency auditing.
- **Letter Opener, Dotenv Rails, Foreman, Listen, Web Console, Debug:** Development workflow, local environment, preview, and debugging tools.
- **Solid Cache, Solid Queue, Solid Cable, Action Cable:** Rails-backed cache, jobs, and realtime infrastructure.

### JavaScript packages

- **Vite:** Frontend build pipeline.
- **Tailwind CSS v4 and Tailwind CLI:** Utility-first styling and CSS build output.
- **Hotwired Turbo Rails and Hotwired Stimulus:** Browser-side Hotwire behavior.
- **PostCSS and Autoprefixer:** CSS processing and browser compatibility.
- **ESLint, @eslint/js, globals:** JavaScript linting for the app code.

## 📊 Database Schema

Below is the initial entity-relationship diagram for the project:

<!-- 
  TODO: Paste your database diagram image link below.
  Example: ![Database Schema](./docs/schema.png) 
-->

![alt text](<Captura de tela de 2026-06-01 22-18-25.png>)


---

## ⚙️ Getting Started

### Prerequisites

- Ruby 3.x
- Node.js & pnpm
- PostgreSQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/MessageHub.git
   cd MessageHub
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.sample .env
   # Update .env with your local database credentials if necessary
   ```

3. **Install dependencies and setup database:**
   ```bash
   ./bin/setup
   ```

4. **Run the development server:**
   ```bash
   ./bin/dev
   ```

## 🧪 Running Tests

To run the RSpec test suite:
```bash
bundle exec rspec
```

## 🧹 Quality Control

- **Ruby lint:** `bundle exec rubocop`
- **Ruby auto-fix:** `bundle exec rubocop -A`
- **RSpec:** `bundle exec rspec`
- **JavaScript lint:** `pnpm lint`
- **JavaScript auto-fix:** `pnpm lint --fix`

Ruby commands use `bundle exec` because RuboCop and RSpec are installed inside the project's bundle, not as global shell commands.

## 🗓️ Branch Addition Log

Branch: `Create-login-with-divise-and-add-some-importants-gems`

- **14 de junho de 2026, 19:00 (BRT):** Foi adicionada a base de autenticacao do MessageHub, abrindo caminho para cadastro, login e recuperacao de acesso com uma experiencia mais completa para o usuario.
- **14 de junho de 2026, 19:00 (BRT):** Foi adicionada uma camada visual mais refinada para as telas de autenticacao, deixando a entrada no app mais consistente, moderna e alinhada com a identidade do projeto.
- **14 de junho de 2026, 19:00 (BRT):** Foi adicionada uma estrutura de componentes reutilizaveis para inputs, melhorando manutencao, padronizacao e evolucao da interface.
- **14 de junho de 2026, 19:00 (BRT):** Foi adicionada uma experiencia mais inteligente para campos de senha, incluindo alternancia de visibilidade e feedback visual durante o preenchimento.
- **14 de junho de 2026, 19:00 (BRT):** Foi adicionada uma camada de validacao e orientacao para senhas, tornando o fluxo de criacao de conta mais claro e confiavel.
- **14 de junho de 2026, 19:00 (BRT):** Foi adicionada a integracao com Lookbook, permitindo visualizar componentes em isolamento e acelerar o desenvolvimento da UI.
- **14 de junho de 2026, 19:00 (BRT):** Foi adicionada uma base moderna de assets com Vite, pnpm e Tailwind CSS v4, preparando o projeto para uma evolucao frontend mais organizada.
- **14 de junho de 2026, 19:00 (BRT):** Foi adicionada a visualizacao local de emails em desenvolvimento, facilitando testes de fluxos como confirmacao e recuperacao de senha.
- **14 de junho de 2026, 19:00 (BRT):** Foi adicionado um componente de toast com animacoes, criando uma base para mensagens rapidas e feedbacks elegantes dentro da aplicacao.
- **14 de junho de 2026, 19:00 (BRT):** Foi adicionada uma estrutura inicial de qualidade com RSpec, Factory Bot, RuboCop e ESLint, fortalecendo a confiabilidade da branch.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
