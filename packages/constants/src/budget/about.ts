import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';
import { addingKey } from '@repo/lib';

import { about as estarlincito } from '../estarlincito/about.js';
import { overviewSchema, type OverviewTypes } from '../schema/overview.js';
import { locale, siteName, url } from './settings.js';

const constants = ObjectUtils.create({
  description:
    'A structured approach to managing money, ensuring financial stability and goal achievement.',

  overview: overviewSchema.parse({
    bio: estarlincito.overview.bio,
    closing:
      'Understanding your finances is the first step toward financial freedom. The goal is to help you build a mindful and sustainable relationship with money.',
    greeting:
      'Welcome to a space where financial clarity meets actionable advice.',
    mission:
      'Our mission is to empower individuals to take control of their finances through practical tools, clear guidance, and sustainable strategies. Whether you’re just starting out or refining your financial plan, we’re here to help you build habits that support long-term stability and success.',
    topics: addingKey([
      {
        label: 'Personal Finance',
        value:
          'Foundational concepts to help you manage your income, expenses, and financial goals.',
      },
      {
        label: 'Expense Tracking',
        value:
          'Tools and strategies to monitor your spending habits and identify areas for improvement.',
      },
      {
        label: 'Savings',
        value:
          'Tips on building an emergency fund, setting savings goals, and making your money work for you.',
      },
      {
        label: 'Financial Planning',
        value:
          'Guidance on budgeting, investments, and preparing for life’s major milestones.',
      },
    ]),
  } satisfies OverviewTypes),
  path: '/about',
  title: 'About',
});

const { description, title, path } = constants;

const metadata = GenerateMetadata.website({
  description,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title,
  url: `${url}${path}`,
});

export const about = ObjectUtils.freeze({ ...constants, metadata });
