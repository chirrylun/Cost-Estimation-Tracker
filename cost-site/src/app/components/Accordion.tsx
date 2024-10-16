import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

interface AccordionProps {
  items: {
    id: string
    title: React.ReactNode
    content: React.ReactNode
  }[]
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="border border-gray-200 rounded-md">
      {items.map(item => (
        <div key={item.id} className="border-b border-gray-200 last:border-b-0">
          <button
            className="flex justify-between items-center w-full px-4 py-2 text-left"
            onClick={() => toggleItem(item.id)}
          >
            <span>{item.title}</span>
            <FaChevronDown
              className={`transition-transform duration-200 ${
                openItems.includes(item.id) ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {openItems.includes(item.id) && (
            <div className="px-4 py-2">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}