import React from 'react';

export default function SectionNavBar({ categoryFilter, sections }) {
  return (
    <div className="text-center">
      {sections.map((element, index) => (
        <button
          className="border-r-4 p-2 md:py-3 md:px-3 hover:bg-gray-100"
          key={index}
          onClick={() => {
            categoryFilter(element._id);
          }}
        >
          {element.name}
        </button>
      ))}
    </div>
  );
}
