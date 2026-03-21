import React from 'react';
import { CheckCircle } from 'lucide-react';

const SectionBlock = ({
  title,
  content,
  finalContent,
  list,
  icon: Icon,
  id,
}) => {
  const renderListItem = (item, index, isChild = false) => {
    const ItemIcon = item.icon || CheckCircle;
    const iconSize = isChild ? 'w-4 h-4' : 'w-6 h-6';
    if (typeof item === 'string') {
      return (
        <li key={index} className="flex items-start">
          <ItemIcon
            className={`${iconSize} text-blue-500 mr-3 mt-1 flex-shrink-0`}
          />
          <span
            className="text-gray-700 text-base text-justify"
            dangerouslySetInnerHTML={{ __html: item }}
          ></span>
        </li>
      );
    } else if (
      typeof item === 'object' &&
      item !== null &&
      (item.content || item.title)
    ) {
      const divClassName = `flex items-start w-full ${item.title ? 'mt-4' : ''}`;
      return (
        <li key={index} className={'flex flex-col items-start'}>
          <div className={divClassName}>
            <ItemIcon
              className={`${iconSize} text-blue-500 mr-3 mt-1 flex-shrink-0`}
            />
            <div className="flex-grow">
              {item.title && (
                <h3
                  className="text-lg font-bold text-gray-800 mb-2"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
              )}
              {item.content && (
                <span
                  className="text-gray-700 text-base text-justify"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></span>
              )}
            </div>
          </div>
          {item.childList && item.childList.length > 0 && (
            <ul className="mt-2 space-y-2 pl-4">
              {item.childList.map((childItem, childIndex) => {
                return renderListItem(childItem, childIndex, true);
              })}
            </ul>
          )}
          {item.finalContent && (
            <div
              className="text-base text-gray-700 mt-4 text-justify"
              dangerouslySetInnerHTML={{ __html: item.finalContent }}
            />
          )}
        </li>
      );
    }
    return null;
  };

  return (
    <section id={id} className="scroll-mt-24">
      {/* Row 1: Icon and Title */}
      <div className="flex items-center gap-4 mb-6">
        {Icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        )}
        <h2 className="flex-grow text-xl md:text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>

      {/* Row 2: Content */}
      {content && (
        <div
          className="text-base text-gray-700 leading-relaxed mt-4 text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {/* Row 3: List */}
      {list && list.length > 0 && (
        <ul className="mt-6 space-y-3 text-gray-600">
          {list.map((item, index) => renderListItem(item, index))}
        </ul>
      )}

      {/* Row 4: Final Content */}
      {finalContent && (
        <div
          className="text-base text-gray-700 mt-6 space-y-3 text-justify"
          dangerouslySetInnerHTML={{ __html: finalContent }}
        />
      )}
    </section>
  );
};

export default SectionBlock;
