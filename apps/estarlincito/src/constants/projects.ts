import { num } from '@estarlincito/utils';
import { budget, carly, imwriting, myebook, quotely } from '@repo/constants';

class ProjectManager {
  private readonly projects = new Map<
    string,
    { summary: string; key: number }
  >();

  add(label: string, summary: string, key: number) {
    this.projects.set(label, { key, summary });
  }

  get(label: string) {
    return this.projects.get(label);
  }

  getAll(): { label: string; summary: string; key: number }[] {
    return Array.from(this.projects, ([label, { summary, key }]) => ({
      key,
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

manager.add(imwriting.siteName, imwriting.about.description, num('1'));
manager.add(carly.siteName, carly.about.description, num('2'));
manager.add(quotely.siteName, quotely.about.description, num('3'));
manager.add(budget.siteName, budget.about.description, num('4'));
manager.add(myebook.siteName, myebook.about.description, num('5'));

export const PROJECTS = manager.getAll();
