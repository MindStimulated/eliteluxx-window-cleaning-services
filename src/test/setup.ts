import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => React.createElement('div', props, children),
    button: ({ children, ...props }: any) => React.createElement('button', props, children),
    section: ({ children, ...props }: any) => React.createElement('section', props, children),
    h1: ({ children, ...props }: any) => React.createElement('h1', props, children),
    h2: ({ children, ...props }: any) => React.createElement('h2', props, children),
    h3: ({ children, ...props }: any) => React.createElement('h3', props, children),
    p: ({ children, ...props }: any) => React.createElement('p', props, children),
    span: ({ children, ...props }: any) => React.createElement('span', props, children),
    img: ({ children, ...props }: any) => React.createElement('img', props, children),
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));