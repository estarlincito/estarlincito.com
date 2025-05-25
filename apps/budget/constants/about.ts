import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'budget/settings';

export const ABOUT_TITLE = 'About';
export const ABOUT_ROUTE = '/about';
export const ABOUT_DESCRIPTION =
  'Understanding your finances is the first step toward financial freedom. The goal is to help you build a mindful and sustainable relationship with money.';
import type { Sections } from '@repo/types';

export const SECTIONS: Sections = {
  footer: ABOUT_DESCRIPTION,
  header: {
    summary:
      'Welcome to a space where financial clarity meets actionable advice.',
    title: ABOUT_TITLE,
  },
  overview: {
    mission:
      'Our mission is to empower individuals to take control of their finances through practical tools, clear guidance, and sustainable strategies. Whether you’re just starting out or refining your financial plan, we’re here to help you build habits that support long-term stability and success.',
    title: 'Mission',
  },

  topics: {
    items: [
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
    ],
    title: 'Topics Coverage',
  },
};

export const METADATA: Metadata.Website = {
  description: ABOUT_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: ABOUT_TITLE,
  url: url + ABOUT_ROUTE,
};
