export const dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
  {
    id: 't4',
    userId: 'u2',
    title: 'Refactor backend API',
    summary:
      'Improve API performance and restructure endpoints for efficiency.',
    dueDate: '2024-07-10',
  },
  {
    id: 't5',
    userId: 'u4',
    title: 'Design landing page',
    summary: 'Create a responsive and visually appealing landing page.',
    dueDate: '2024-08-20',
  },
  {
    id: 't6',
    userId: 'u5',
    title: 'Optimize database queries',
    summary: 'Analyze and optimize slow SQL queries for better performance.',
    dueDate: '2024-09-05',
  },
  {
    id: 't7',
    userId: 'u6',
    title: 'Write unit tests',
    summary:
      'Ensure application reliability by writing comprehensive unit tests.',
    dueDate: '2024-10-01',
  },
  {
    id: 't8',
    userId: 'u1',
    title: 'Create CI/CD pipeline',
    summary: 'Automate deployment and testing with a CI/CD pipeline.',
    dueDate: '2024-11-15',
  },
  {
    id: 't9',
    userId: 'u2',
    title: 'Improve security measures',
    summary: 'Enhance authentication and authorization mechanisms.',
    dueDate: '2024-12-10',
  },
  {
    id: 't10',
    userId: 'u3',
    title: 'Migrate project to TypeScript',
    summary:
      'Refactor JavaScript codebase to use TypeScript for better maintainability.',
    dueDate: '2025-01-25',
  },
  {
    id: 't11',
    userId: 'u4',
    title: 'Conduct user testing',
    summary: 'Gather user feedback and test UX/UI improvements.',
    dueDate: '2025-02-28',
  },
  {
    id: 't12',
    userId: 'u5',
    title: 'Set up analytics tracking',
    summary: 'Implement Google Analytics and custom event tracking.',
    dueDate: '2025-03-15',
  },
  {
    id: 't13',
    userId: 'u6',
    title: 'Deploy new feature',
    summary: 'Push the latest feature update to production after testing.',
    dueDate: '2025-04-05',
  },
];

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
