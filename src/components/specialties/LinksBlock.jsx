import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LinksBlock = ({ title, links }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <Card className="bg-gray-50/70 border-gray-200 shadow-md mt-12">
      <CardHeader>
        <div className="flex items-center gap-3">
          <LinkIcon className="w-6 h-6 text-gray-500" />
          <CardTitle className="text-xl font-bold text-gray-800">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-gray-200">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="flex items-center justify-between py-4 px-2 group hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="text-lg font-medium text-blue-600 group-hover:text-blue-800">
                {link.title}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-700 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LinksBlock;
