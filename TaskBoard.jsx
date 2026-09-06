import React from "react";

const tasks = {
  todo: [
    { id: 1, title: "Create dashboard layout", priority: "High" },
    { id: 2, title: "Review API requirements", priority: "Medium" },
  ],
  progress: [
    { id: 3, title: "Build user management", priority: "High" },
    { id: 4, title: "Update project documentation", priority: "Low" },
  ],
  completed: [
    { id: 5, title: "Set up project structure", priority: "Medium" },
  ],
};

export default function TaskBoard() {
  return (
    <main>
      <header>
        <h1>Project Tasks</h1>
        <p>Organize tasks, priorities, and project progress.</p>
      </header>

      <section>
        {Object.entries(tasks).map(([status, items]) => (
          <div key={status}>
            <h2>{status}</h2>

            {items.map((task) => (
              <article key={task.id}>
                <h3>{task.title}</h3>
                <span>{task.priority}</span>
              </article>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
