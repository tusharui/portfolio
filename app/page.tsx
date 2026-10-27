export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start gap-10 sm:gap-12 py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Hi, I'm Tushar.
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <a
                href="https://github.com/tusharui"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/tushar-chauhan-3796902a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href="mailto:workwithtushar81@gmail.com"
                className="underline underline-offset-4 hover:text-foreground"
              >
                Email
              </a>
            </div>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl sm:leading-8">
            Applied AI Engineer building RAG pipelines, intelligent AI agents, AI
            products, and high-performance backend systems.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl">
            About
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg">
            Applied AI Engineer focused on building production-ready RAG
            pipelines, LLM-powered applications, intelligent model routing, and
            reliable backend systems. Experienced with Python, TypeScript, API
            development, AI evaluation, and backend reliability.
          </p>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg">
            Open-source contributor to{" "}
            <a
              href="https://github.com/Nano-Collective"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              NanoCollective
            </a>
            ,{" "}
            <a
              href="https://github.com/ciaren-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Cia ren Labs
            </a>
            , and{" "}
            <a
              href="https://github.com/rodrigo-arenas/Sklearn-genetic-opt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              sklearn-genetic-opt
            </a>
            , contributing to AI/ML libraries and developer tooling.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl">
            Work Experience
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-medium text-foreground sm:text-lg">
                  <a
                    href="https://www.linkedin.com/company/avoir-ai/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    Avoir
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aug 2026 – Sep 2026 · Remote
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-2 pl-4">
              <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Fixed IDOR vulnerabilities by enforcing authenticated identity
                from verified Cognito JWTs across protected routes.
              </li>
              <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Prevented concurrent credit-billing bypasses with atomic,
                fail-closed quota enforcement.
              </li>
              <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Built a three-tier trend-data pipeline with fallbacks, circuit
                breaking, and DynamoDB caching.
              </li>
              <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Implemented Stripe checkout, webhooks, subscription transitions,
                and an audit ledger.
              </li>
              <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Improved delivery workflows with CI/CD checks for linting,
                type-checking, tests, and secret scanning.
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl">
            Open Source Contributions
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-medium text-foreground sm:text-lg">
                  <a
                    href="https://github.com/Nano-Collective/nanotune/pulls?q=is%3Apr+state%3Aclosed+author%3Atusharui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    NanoCollective / nanotune
                  </a>
                </h3>
              </div>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Built and integrated core tuning/evaluation utilities to
                  improve reproducibility of LLM experimentation workflows.
                </li>
                <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Improved developer experience with cleaner APIs, better error
                  handling, and test coverage for critical paths.
                </li>
                <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Refactored internal modules for modularity, making them easier
                  to extend and compose.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-medium text-foreground sm:text-lg">
                  <a
                    href="https://github.com/ciaren-labs/Ciaren/pulls?q=is%3Apr+state%3Aclosed+author%3Atusharui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    Ciaren Labs / Ciaren
                  </a>
                </h3>
              </div>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Implemented and extended backend functionality to support
                  AI/agent workflows with cleaner, typed interfaces.
                </li>
                <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Hardened validation and error flows to make services more
                  predictable and production-friendly.
                </li>
                <li className="list-disc text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  Contributed to developer tooling and integration points to
                  streamline local/dev workflows.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "TypeScript",
              "Go",
              "Node.js",
              "FastAPI",
              "React",
              "Next.js",
              "PostgreSQL",
              "DynamoDB",
              "Redis",
              "Docker",
              "Kubernetes",
              "AWS",
              "CI/CD",
              "Git",
              "GitHub Actions",
              "REST APIs",
              "RAG",
              "Hybrid Search",
              "Embeddings",
              "Reranking",
              "LLM Evaluation",
              "Model Routing",
              "AI Agents",
              "pytest",
              "Linux",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-foreground sm:text-lg">
                <a
                  href="https://github.com/tusharui/llm-gateway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  llm-gateway
                </a>
              </h3>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                A multi-provider LLM gateway — one OpenAI-compatible API in front
                of Groq, Gemini and OpenRouter, with auto-routing, caching,
                failover and a Next.js dashboard to monitor cost and usage.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-foreground sm:text-lg">
                <a
                  href="https://github.com/tusharui/luman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  luman
                </a>
              </h3>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                A retrieval-augmented generation engine over your own documents.
                Point it at a folder, ask questions, get answers that cite the
                exact passage they came from — and an honest "the documents do
                not say" when the evidence is missing.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
