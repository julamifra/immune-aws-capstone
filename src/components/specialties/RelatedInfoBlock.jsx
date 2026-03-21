import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const RelatedInfoBlock = ({ title, text, link, buttonText }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-10 border border-blue-100 shadow-sm">
      <h3 className="text-2xl font-bold text-brand-dark mb-3">{title}</h3>
      <p className="text-lg text-gray-600 mb-6">{text}</p>
      <Button asChild size="lg">
        <Link to={link}>
          {buttonText} <ChevronRight className="w-5 h-5 ml-2" />
        </Link>
      </Button>
    </div>
  );
};

export default RelatedInfoBlock;
