import { useState } from "react"
import { Tag, tags } from "./constants/tags"
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const selectedTagsNames = selectedTags.map((item) => item.name);

  const [isHover, setIsHover] = useState(false);
  const [isLayoutAnimation, setIsLayoutAnimation] = useState(false)

  const reset = (count: number) => {
    if(count == 0) return 

    setTimeout(() => {
      setSelectedTags((arr) => arr.slice(0, -1))
      
      reset(count - 1)
    });
  }
  
  return (
    <section className="w-full h-dvh overflow-x-hidden">
      <section className="w-full h-full flex flex-col pt-10 lg:pt-60 translate-x-[calc(50%-120px)]">
        <section
          className="flex items-center gap-2 relative h-12 z-40"
          onMouseEnter={() => !isLayoutAnimation && setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {isHover && selectedTags.length > 0 && (
              <motion.span
                key="clear-button"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ type: 'spring', bounce: 0 }}
                onClick={() => reset(selectedTags.length)} 
                className="cursor-pointer text-nowrap inline-block h-7 text-gray-500"
              >
                Clear all
              </motion.span>
            )}
          </AnimatePresence>
          {selectedTags.map((tag) => (
            <motion.div 
              key={tag.name}
              layoutId={tag.name}
              onLayoutAnimationStart={() => setIsLayoutAnimation(true)}
              onLayoutAnimationComplete={() => setIsLayoutAnimation(false)}
              className={clsx(
                "capitalize leading-none inline-flex items-center gap-4 px-2 h-7 cursor-pointer",
                tag.className
              )}
              style={{ borderRadius: 20 }}
            >
              <motion.span layout="position">
                {tag.name}
              </motion.span>
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: .1 } }}
                onClick={() => setSelectedTags(selectedTags.filter((item) => item.name != tag.name))}
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </motion.svg>
            </motion.div>
          ))}
        </section>
        <motion.section 
          layout
          className="w-60 p-2"
          style={{
            borderRadius: 12,
            boxShadow: `0px 15px 30px rgba(0, 0, 0, .15)`
          }}
        >
          <div className="flex items-baseline justify-between mb-2">
            <motion.h2 
              layout="position" 
              className="font-medium text-lg"
            >
              Select filter
            </motion.h2>
            <motion.span 
              layout="position"
              onClick={() => reset(selectedTags.length)} 
              className="text-gray-500 text-sm cursor-pointer"
            >
              Clear
            </motion.span>
          </div>
          <section className="flex flex-col gap-2 px-1">
            {
              tags
                .filter((item) => !selectedTagsNames.includes(item.name))
                .map((tag) => (
                  <motion.div 
                    key={tag.name}
                    layoutId={tag.name}
                    onClick={() => setSelectedTags([...selectedTags, tag]) }
                    className={clsx(
                      "capitalize inline-flex w-fit px-2 py-px cursor-pointer relative z-20",
                      tag.className
                    )}
                    style={{ borderRadius: 20 }}
                  >
                    <motion.span layout="position">
                      {tag.name}
                    </motion.span>
                  </motion.div>
              ))
            }

          </section>
        </motion.section>
      </section>
    </section>
  )
}

export default App
