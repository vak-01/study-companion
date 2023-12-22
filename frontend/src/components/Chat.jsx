import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Chat() {
  return (
    <>
      {/* Content */}
      <div className="relative h-screen">
        <div className="py-10 lg:py-14">
          {/* Title */}
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Welcome to Study Copilot AI
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Your AI-powered copilot for studies
            </p>
          </div>
          {/* End Title */}


          {/* -------------------------------------------------------------------------------------------- */}
          {/* THE CHAT ACTUALLY BEGINS HERE, each message is wrapped inside a chat bubble... */}
          {/* the chats are an unordered list of messages <li>s */}

          <ul className="mt-16 space-y-5">

            {/* Chat Bubble */}
            <li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
              <svg
                className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full text-white"
                width={38}
                height={38}
                viewBox="-2.64 -2.64 29.28 29.28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="bgCarrier" stroke-width="0">
                  <rect x="-2.64" y="-2.64" width="29.28" height="29.28" rx="14.64" fill="#2563EB" strokewidth="0">
                  </rect>
                </g>
                <g id="tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="iconCarrier"> <path d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z"
                  stroke="#dfdfeb" stroke-width="1.8719999999999999" stroke-linecap="round" stroke-linejoin="round">
                </path>
                  <path d="M15 12C14.2005 12.6224 13.1502 13 12 13C10.8498 13 9.79952 12.6224 9 12" stroke="#dfdfeb" stroke-width="1.8719999999999999" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M9 8.01953V8" stroke="#dfdfeb" stroke-width="1.8719999999999999" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M15 8.01953V8" stroke="#dfdfeb" stroke-width="1.8719999999999999" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                </g>
              </svg>
              <div className="space-y-3">
                <h2 className="font-medium text-gray-800 dark:text-white">
                  Hi! How can I help?
                </h2>
                <div className="space-y-1.5">
                  <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                    You can try stuff like:
                  </p>
                  <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                    <li className="text-sm text-gray-800 dark:text-white">
                      Generating notes for a particular topic, using generate button in the message box
                    </li>
                    <li className="text-sm text-gray-800 dark:text-white">
                      Ask questions related to your subject
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* End Chat Bubble */}

            {/* Chat Bubble */}
            <li className="py-2 sm:py-4">
              <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="max-w-2xl flex gap-x-2 sm:gap-x-4">
                  <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
                    <span className="text-sm font-medium text-white leading-none">
                      YOU
                    </span>
                  </span>
                  <div className="grow mt-2 space-y-3">
                    <p className="text-gray-800 dark:text-gray-200">
                      what is database sharding?
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* End Chat Bubble */}

            {/* Chat Bubble */}
            <li className="max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4">
              <svg
                className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full text-white"
                width={38}
                height={38}
                viewBox="-2.64 -2.64 29.28 29.28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="bgCarrier" stroke-width="0">
                  <rect x="-2.64" y="-2.64" width="29.28" height="29.28" rx="14.64" fill="#2563EB" strokewidth="0">
                  </rect>
                </g>
                <g id="tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="iconCarrier"> <path d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z"
                  stroke="#dfdfeb" stroke-width="1.8719999999999999" stroke-linecap="round" stroke-linejoin="round">
                </path>
                  <path d="M15 12C14.2005 12.6224 13.1502 13 12 13C10.8498 13 9.79952 12.6224 9 12" stroke="#dfdfeb" stroke-width="1.8719999999999999" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M9 8.01953V8" stroke="#dfdfeb" stroke-width="1.8719999999999999" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M15 8.01953V8" stroke="#dfdfeb" stroke-width="1.8719999999999999" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                </g>
              </svg>
              <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
                {/* Card */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-800 dark:text-white">
                    Database sharding splits a single dataset into partitions or shards. Each shard contains unique rows of information that you can store separately across multiple computers, called nodes. All shards run on separate nodes but share the original database's schema or design.
                  </p>
                </div>
                {/* End Card */}
                {/* Button Group */}
                <div>
                  <div className="sm:flex sm:justify-between">
                    <div>

                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Copy
                      </button>

                    </div>
                    <div className="mt-1 sm:mt-0">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                          <path d="M21 3v5h-5" />
                        </svg>
                        New answer
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Button Group */}
              </div>
            </li>
            {/* End Chat Bubble */}

          </ul>
          {/* THE CHAT ENDS HERE */}
        </div>


        {/* GIVEN BELOW IS THE SEARCH BOX */}
        <footer className="sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-3 sm:pt-4 sm:pb-6 dark:bg-slate-900 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-3">
              <button
                type="button"
                className="inline-flex justify-center items-center gap-x-2 rounded-lg font-medium text-gray-800 hover:text-blue-600 text-xs sm:text-sm dark:text-gray-200 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                New chat
              </button>
              <button
                type="button"
                className="py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
                </svg>
                Stop generating
              </button>
            </div>
            {/* Input */}
            <div className="relative">
              <textarea
                className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Ask me anything..."
                defaultValue={""}
              />
              {/* Toolbar */}
              <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-slate-900">
                <div className="flex justify-between items-center">
                  {/* Button Group */}
                  <div className="flex items-center">
                    {/* Mic Button */}
                    <button
                      type="button"
                      className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="flex-shrink-0 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width={18} height={18} x={3} y={3} rx={2} />
                        <line x1={9} x2={15} y1={15} y2={9} />
                      </svg>
                    </button>
                    {/* End Mic Button */}
                    {/* Attach Button */}
                    <button
                      type="button"
                      className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="flex-shrink-0 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                      </svg>
                    </button>
                    {/* End Attach Button */}
                  </div>
                  {/* End Button Group */}
                  {/* Button Group */}
                  <div className="flex items-center gap-x-1">
                    {/* Mic Button */}
                    <button
                      type="button"
                      className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="flex-shrink-0 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1={12} x2={12} y1={19} y2={22} />
                      </svg>
                    </button>
                    {/* End Mic Button */}
                    {/* Send Button */}
                    <button
                      type="button"
                      className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg>
                    </button>
                    {/* End Send Button */}
                  </div>
                  {/* End Button Group */}
                </div>
              </div>
              {/* End Toolbar */}
            </div>
            {/* End Input */}
          </div>
        </footer>
        {/* End Search */}
      </div>
      {/* End Content */}
    </>

  )
}

export default Chat;