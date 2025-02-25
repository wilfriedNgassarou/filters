export type Tag = typeof tags[number]

const tags = [
  {
    name: 'product',
    className: 'bg-lime-200 text-lime-700'
  },
  {
    name: 'marketing',
    className: 'bg-green-200 text-green-700'
  },
  {
    name: 'design',
    className: 'bg-blue-200 text-blue-700'
  },
  {
    name: 'development',
    className: 'bg-pink-200 text-pink-700'
  },
  {
    name: 'sales',
    className: 'bg-orange-200 text-orange-700'
  },
  {
    name: 'stakeholder',
    className: 'bg-gray-200 text-gray-700'
  },
]

export { tags }