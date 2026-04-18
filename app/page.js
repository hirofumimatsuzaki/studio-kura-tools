import { ComingSoonCard } from "@/components/coming-soon-card";
import { ToolCard } from "@/components/tool-card";
import { availableTools, upcomingTools } from "@/data/tools";

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="hero">
        <p className="eyebrow">Studio Kura</p>
        <h1>Studio Kura Tools</h1>
        <p className="subtitle">
          Tools for Studio Kura operations, exhibitions, and artist workflows
        </p>
      </header>

      <section className="section" aria-labelledby="available-tools-title">
        <div className="section-heading">
          <h2 id="available-tools-title">Available Tools</h2>
          <p>
            Practical entry points for day-to-day residency, exhibition, and posting
            workflows.
          </p>
        </div>
        <div className="card-grid" aria-label="Available Studio Kura tools">
          {availableTools.map((tool, index) => (
            <ToolCard key={tool.name} index={index} {...tool} />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="coming-soon-title">
        <div className="section-heading">
          <h2 id="coming-soon-title">Coming Soon</h2>
          <p>Additional internal tools can be added here as the portal expands.</p>
        </div>
        <div className="card-grid" aria-label="Upcoming Studio Kura tools">
          {upcomingTools.map((tool) => (
            <ComingSoonCard key={tool.name} {...tool} />
          ))}
        </div>
      </section>
    </main>
  );
}
