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

## 📊 Database Schema

Below is the initial entity-relationship diagram for the project:

<!-- 
  TODO: Paste your database diagram image link below.
  Example: ![Database Schema](./docs/schema.png) 
-->

<img width="1393" height="872" alt="image" src="https://github.com/user-attachments/assets/6886199b-01e5-48e7-badc-53a26edf52d1" />



---

## ⚙️ Getting Started

### Prerequisites

- Ruby 3.3.11
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

- **Ruby:** `bundle exec rubocop`
- **JavaScript:** `pnpm lint`

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
