'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useState, useRef } from 'react'
import { FaList } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

interface TocItem {
  value: string
  url: string
  depth: number
}

interface TableOfContentsProps {
  toc: TocItem[]
}

const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const [isTocVisible, setIsTocVisible] = useState(false)
  const tocRef = useRef(null)

  const onToggleToc = () => {
    setIsTocVisible((prevState) => {
      return !prevState
    })
  }

  return (
    <>
      <button
        aria-label="Scroll To Table of Contents"
        onClick={onToggleToc}
        className="rounded-full bg-gray-200 p-2 text-gray-700 transition-all hover:bg-gray-300 lg:hidden"
      >
        <FaList size={20} className="text-gray-500" />
      </button>

      <Transition appear show={isTocVisible} as={Fragment}>
        <Dialog as="div" onClose={onToggleToc}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-60 bg-black/25" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-95"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-95"
            leaveTo="translate-x-full opacity-0"
          >
            <DialogPanel className="fixed top-0 left-0 z-70 h-full w-full bg-white dark:bg-gray-950/98">
              <div ref={tocRef} className="p-6 tracking-wider">
                <h2 className="mt-6 text-2xl font-bold">Table of Contents</h2>
                <div className="mt-4 space-y-2">
                  {toc.length > 0 ? (
                    toc.map((item, index) => (
                      <div key={index} className={item.depth === 3 ? 'pl-4' : 'font-bold'}>
                        <a
                          href={item.url}
                          className="hover:text-primary-500 py-2 pr-4 text-lg text-gray-900"
                          onClick={onToggleToc}
                        >
                          {item.value}
                        </a>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No content available.</p>
                  )}
                </div>
              </div>
              <button
                className="hover:text-primary-500 fixed top-7 right-4 z-80 h-16 w-16 p-4 text-gray-900"
                aria-label="Close Table of Contents"
                onClick={onToggleToc}
              >
                <FaX size={20} className="text-gray-500" />
              </button>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default TableOfContents
