import React from 'react';
import './Home.css'; // Import your CSS file for styling

const TaskManagementSystemPage = () => {
  const data = {
    problem: {
      background: 'A list of tasks for employees within an organization outlining their responsibilities, quantity of work, and performance evaluation criteria',
      problemDesc: 'The absence of an organized system to manage tasks, responsibilities, work quantity, and performance evaluation criteria for employees within the organization',
      whyMatter: 'Without this system, employees may lack clear guidance on their responsibilities, leading to confusion, inefficiency, and potential performance issues.',
      evidence: 'High employee turnover rates, decreased productivity, or increased error rates could be indicators. Surveys, feedback, or direct reports of employees struggling due to unclear tasks/responsibilities could provide evidence.',
    },
    approach: {
      roughSolution: 'Develop a Jira-like platform to create, assign, track, and evaluate tasks for employees, incorporating features for defining responsibilities, workload, and performance criteria.',
    },
    goals: {
      goalsDesc: 'Implement a comprehensive task management system that enhances clarity, productivity, and accountability for employees.',
      successMetrics: 'Success will be defined by increased task completion rates, improved employee satisfaction, reduced errors, and enhanced performance.',
    },
    solution: {
      keyFeatures: [
        'Task creation and assignment',
        'Clear delineation of responsibilities',
        'Workload management tools',
        'Performance evaluation criteria integration',
        'Task tracking and progress monitoring',
        'Reporting and analytics for performance assessment',
      ],
    },
    userFlows: {
      basicUserFlows: 'A basic sketch of the screen',
      lowFidelityUI: 'Low-fidelity sketches of the UI',
    },
    technicalArchitecture: {
      technicalDesignDoc: 'Link to Technical Design Document',
      dataModel: 'Data model',
      systemArchitecture: 'System architecture',
    },
    openClosedQuestions: {
      remainingQuestions: 'Any unresolved issues, pending decisions, or topics needing clarification within the project.',
      discussedDecisions: 'A summary of topics already covered, decisions made, and agreements reached during the project discussions.',
    },
  };

  return (
    <div className="page-container">
      <header>
        {/* <h1>Task Management System</h1> */}
      </header>

      <main className="container">
        <section className="section">
          <h2>Problem</h2>
          <p><strong>Background:</strong> {data.problem.background}</p>
          <p><strong>The Problem:</strong> {data.problem.problemDesc}</p>
          <p><strong>Why It Matters to the User:</strong> {data.problem.whyMatter}</p>
          <p><strong>Evidence/Data:</strong> {data.problem.evidence}</p>
        </section>

        <section className="section">
          <h2>Our Approach</h2>
          <p><strong>Rough Solution:</strong> {data.approach.roughSolution}</p>
        </section>

        <section className="section">
          <h2>Goals & Success</h2>
          <p><strong>Goals:</strong> {data.goals.goalsDesc}</p>
          <p><strong>Success Metrics:</strong> {data.goals.successMetrics}</p>
        </section>

        <section className="section">
          <h2>Solution</h2>
          <ul>
            {data.solution.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>User Flows & Mocks</h2>
          <p><strong>Basic User Flows:</strong> {data.userFlows.basicUserFlows}</p>
          <p><strong>Low-fidelity UI:</strong> {data.userFlows.lowFidelityUI}</p>
        </section>

        <section className="section">
          <h2>Technical Architecture</h2>
          <p><strong>Technical Design Doc:</strong> {data.technicalArchitecture.technicalDesignDoc}</p>
          <p><strong>Data Model:</strong> {data.technicalArchitecture.dataModel}</p>
          <p><strong>System Architecture:</strong> {data.technicalArchitecture.systemArchitecture}</p>
        </section>

        <section className="section">
          <h2>Open and Closed Questions</h2>
          <p><strong>Remaining Questions:</strong> {data.openClosedQuestions.remainingQuestions}</p>
          <p><strong>Discussed Decisions:</strong> {data.openClosedQuestions.discussedDecisions}</p>
        </section>
      </main>
    </div>
  );
};

export default TaskManagementSystemPage;
