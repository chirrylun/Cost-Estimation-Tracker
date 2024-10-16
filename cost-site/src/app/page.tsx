import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectData, ProjectGroup, ProjectItem } from './data/projectData'
import { Checkbox } from './components/Checkbox'
import { Card, CardContent, CardHeader, CardTitle } from './components/Card'
import { Accordion } from './components/Accordion'
import { Tooltip } from './components/Tooltip'
import { Progress } from './components/Progress'
import { Button } from './components/Button'
import { FaDollarSign, FaPercent } from 'react-icons/fa'

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount)
}

const ProjectEstimator: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
  const [viewMode, setViewMode] = useState<'list' | 'summary'>('list')

  const toggleItem = (itemId: string) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const { groupTotals, grandTotal, maxGroupTotal } = useMemo(() => {
    const groupTotals = projectData.reduce((acc, group) => {
      acc[group.id] = group.items.reduce(
        (sum, item) => (selectedItems.has(item.id) ? sum + item.cost : sum),
        0
      )
      return acc
    }, {} as Record<string, number>)

    const grandTotal = Object.values(groupTotals).reduce((sum, groupTotal) => sum + groupTotal, 0)
    const maxGroupTotal = Math.max(...Object.values(groupTotals))

    return { groupTotals, grandTotal, maxGroupTotal }
  }, [selectedItems])

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project Cost Estimator
      </motion.h1>
      <motion.div
        className="mb-6 flex justify-center space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button
          variant={viewMode === 'list' ? 'primary' : 'outline'}
          onClick={() => setViewMode('list')}
        >
          List View
        </Button>
        <Button
          variant={viewMode === 'summary' ? 'primary' : 'outline'}
          onClick={() => setViewMode('summary')}
        >
          Summary View
        </Button>
      </motion.div>
      <AnimatePresence mode="wait">
        {viewMode === 'list' ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Accordion
              items={projectData.map((group) => ({
                id: group.id,
                title: (
                  <div className="flex justify-between w-full pr-4">
                    <span className="font-semibold">{group.name}</span>
                    <span className="text-blue-600">{formatCurrency(groupTotals[group.id])}</span>
                  </div>
                ),
                content: (
                  <Card>
                    <CardContent>
                      {group.items.map((item) => (
                        <motion.div
                          key={item.id}
                          className="flex items-center space-x-2 mb-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Checkbox
                            id={item.id}
                            checked={selectedItems.has(item.id)}
                            onChange={() => toggleItem(item.id)}
                          />
                          <Tooltip content={item.description}>
                            <label
                              htmlFor={item.id}
                              className={`flex-grow cursor-pointer ${
                                selectedItems.has(item.id) ? 'text-blue-600' : 'text-gray-500'
                              }`}
                            >
                              {item.name}
                            </label>
                          </Tooltip>
                          <span
                            className={`${
                              selectedItems.has(item.id) ? 'text-blue-600' : 'text-gray-500'
                            }`}
                          >
                            {formatCurrency(item.cost)}
                          </span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                ),
              }))}
            />
          </motion.div>
        ) : (
          <motion.div
            key="summary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Cost Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {projectData.map((group) => (
                  <div key={group.id} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{group.name}</span>
                      <span className="text-blue-600">{formatCurrency(groupTotals[group.id])}</span>
                    </div>
                    <Progress
                      value={groupTotals[group.id]}
                      max={maxGroupTotal}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="mt-6 p-4 bg-blue-500 text-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">Grand Total:</span>
          <span className="text-3xl font-bold">{formatCurrency(grandTotal)}</span>
        </div>
        <div className="mt-2 flex items-center justify-end space-x-2">
          <FaDollarSign className="h-5 w-5" />
          <span>
            {((grandTotal / 100000000) * 100).toFixed(2)}% of ₦100,000,000 budget
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectEstimator