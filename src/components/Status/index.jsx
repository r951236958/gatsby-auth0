import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

export default function Status(props) {
  const { isLoading, user } = useAuth0()
  const [showStatus, setShowStatus] = useState(false)

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <>
      <div className="bg-blue-600" aria-labelledby="show-status">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-start sm:items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center sm:mt-0">
              <span className="flex p-2 rounded-lg bg-blue-800">
                {/* Heroicon name: speakerphone */}
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <div className="ml-3 font-medium text-white truncate">
                <div className="inline">
                  <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>
              </div>
            </div>
            <div className="order-2 float-right sm:flex-0 flex-shrink-0 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={() => setShowStatus(!showStatus)}
              >
                <span className="sr-only">Dismiss</span>
                {/* Heroicon name: x */}
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
