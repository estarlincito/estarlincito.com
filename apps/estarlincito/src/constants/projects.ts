import { budget, carly, imwriting, myebook, quotely } from '@repo/constants';

class ProjectManager {
  private projects = new Map<string, { summary: string }>();

  add(label: string, summary: string) {
    this.projects.set(label, { summary });
  }

  get(label: string) {
    return this.projects.get(label);
  }

  getAll(): { label: string; summary: string }[] {
    return Array.from(this.projects, ([label, { summary }]) => ({
      label,
      summary,
    }));
  }

  has(label: string): boolean {
    return this.projects.has(label);
  }

  remove(label: string): boolean {
    return this.projects.delete(label);
  }
}

const manager = new ProjectManager();

manager.add(imwriting.siteName, imwriting.about.description);
manager.add(carly.siteName, carly.about.description);
manager.add(quotely.siteName, quotely.about.description);
manager.add(budget.siteName, budget.about.description);
manager.add(myebook.siteName, myebook.about.description);

export const PROJECTS = manager.getAll();
