'use client';

import { Accordion as AccordionContainer, AccordionItem } from '@heroui/react';
import { useState } from 'react';

interface AccordionProps {
  selectionMode?: 'none' | 'single' | 'multiple';
  startOpen?: boolean;
  items: {
    [key: string]: React.ReactNode | undefined;
  }[];
}

export default function Accordion({
  selectionMode,
  startOpen,
  items,
}: AccordionProps) {
  return (
    <AccordionContainer
      selectionMode={selectionMode}
      variant="splitted"
      className="px-0"
      itemClasses={{
        base: 'shadow-none bg-gray-50',
        trigger: 'cursor-pointer',
      }}
      defaultExpandedKeys={
        startOpen ? items.map((item) => Object.keys(item)[0]) : undefined
      }
    >
      {items.map((item) => {
        const key = Object.keys(item)[0];

        return (
          <AccordionItem
            key={key}
            classNames={{
              title: 'font-medium',
            }}
            title={key}
          >
            {item[key]}
          </AccordionItem>
        );
      })}
    </AccordionContainer>
  );
}
