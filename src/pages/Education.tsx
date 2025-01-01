import React from 'react';
import ResourceCard from '../components/education/ResourceCard';

const resources = [
  {
    id: '1',
    title: 'Introduction to Algorithmic Trading',
    description: 'Learn the basics of automated trading strategies',
    type: 'guide' as const,
    difficulty: 'beginner' as const
  },
  {
    id: '2',
    title: 'Advanced Technical Analysis',
    description: 'Master technical indicators and chart patterns',
    type: 'video' as const,
    difficulty: 'advanced' as const
  },
  {
    id: '3',
    title: 'Risk Management Fundamentals',
    description: 'Essential principles of trading risk management',
    type: 'article' as const,
    difficulty: 'intermediate' as const
  }
];

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Learning Resources</h1>
      <div className="grid gap-4">
        {resources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
}