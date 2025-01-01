import React from 'react';
import { BookOpen, Video, FileText } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'guide';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export default function ResourceCard({ resource }: { resource: Resource }) {
  const getIcon = () => {
    switch (resource.type) {
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'article':
        return <FileText className="w-5 h-5" />;
      case 'guide':
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = () => {
    switch (resource.difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            {getIcon()}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{resource.title}</h3>
            <p className="text-sm text-gray-600">{resource.description}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor()}`}>
          {resource.difficulty}
        </span>
      </div>
    </div>
  );
}