import React from 'react';

export default function GoogleSignInContainer() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-[#e3e3e3] font-['Google_Sans',Roboto,Arial,sans-serif] flex flex-col items-center justify-center sm:p-4">
      {/* Main Card */}
      <div className="bg-[#1f1f1f] sm:bg-[#202124] sm:rounded-[28px] w-full sm:w-[968px] sm:min-h-[400px] flex flex-col p-6 sm:p-9">

        {/* Top Header */}
        <div className="flex items-center mb-8">
          <svg viewBox="0 0 74 24" width="74" height="24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <g fill="none" fillRule="evenodd">
              <path d="M9.32 18.23c-4.14 0-7.7-3.23-7.7-8.1 0-4.88 3.56-8.11 7.7-8.11 2.37 0 4.22.95 5.56 2.21l-2.07 2.01c-.9-.85-2.23-1.57-3.49-1.57-2.85 0-5.1 2.4-5.1 5.46s2.25 5.46 5.1 5.46c3.27 0 4.54-2.28 4.73-3.62h-4.73v-2.73h7.45c.08.41.13.88.13 1.41 0 3.99-2.65 7.58-7.48 7.58z" fill="#4285f4"/>
              <path d="M19.78 12.35c0 3.39-2.58 5.88-5.69 5.88-3.1 0-5.69-2.49-5.69-5.88 0-3.4 2.59-5.88 5.69-5.88 3.11 0 5.69 2.48 5.69 5.88zm-2.66 0c0-2.07-1.42-3.46-3.03-3.46-1.6 0-3.03 1.39-3.03 3.46 0 2.06 1.43 3.46 3.03 3.46 1.61 0 3.03-1.4 3.03-3.46z" fill="#ea4335"/>
              <path d="M31.63 12.35c0 3.39-2.58 5.88-5.69 5.88-3.1 0-5.69-2.49-5.69-5.88 0-3.4 2.59-5.88 5.69-5.88 3.11 0 5.69 2.48 5.69 5.88zm-2.66 0c0-2.07-1.42-3.46-3.03-3.46-1.6 0-3.03 1.39-3.03 3.46 0 2.06 1.43 3.46 3.03 3.46 1.61 0 3.03-1.4 3.03-3.46z" fill="#fbbc05"/>
              <path d="M42.84 6.78v10.96c0 4.51-2.56 6.36-5.46 6.36-2.8 0-4.48-1.87-5.11-3.4l2.33-.97c.41.97 1.42 1.95 2.78 1.95 1.76 0 2.85-1.09 2.85-3.15v-1.15h-.09c-.6.74-1.76 1.47-3.14 1.47-2.98 0-5.55-2.55-5.55-5.89 0-3.32 2.57-5.88 5.55-5.88 1.38 0 2.54.73 3.14 1.46h.09V6.78h2.61zm-2.44 5.57c0-2.04-1.41-3.46-2.95-3.46-1.57 0-3.03 1.42-3.03 3.46 0 2.03 1.46 3.46 3.03 3.46 1.54 0 2.95-1.43 2.95-3.46z" fill="#4285f4"/>
              <path d="M49.37 17.91h-2.6V6.78h2.6v11.13z" fill="#34a853"/>
              <path d="M59.16 14.5l2.13 1.42c-.68 1.01-2.34 2.31-4.72 2.31-3.12 0-5.63-2.44-5.63-5.88 0-3.48 2.54-5.88 5.35-5.88 2.84 0 4.41 2.45 4.88 3.78l.27.68-7.5 3.1c.58 1.15 1.51 1.75 2.65 1.75 1.14 0 2.05-.57 2.57-1.28zm-2.85-3.51l-4.72-1.96c.26-.67.97-1.14 1.78-1.14 1.03 0 1.97.46 2.94 3.1z" fill="#ea4335"/>
            </g>
          </svg>
          <span className="text-[16px]">Sign in with Google</span>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col sm:flex-row flex-1">
          {/* Left Col */}
          <div className="w-full sm:w-[460px] sm:pr-[48px] flex flex-col mb-8 sm:mb-0">
            <h1 className="text-[36px] font-normal mb-2 leading-[44px]">
              Sign in
            </h1>
            <p className="text-[16px] leading-[24px]">
              to continue to WordPress
            </p>
          </div>

          {/* Right Col */}
          <div className="flex-1 flex flex-col">
            {/* Input Form */}
            <div className="w-full">
              <div className="relative mb-2">
                <input
                  type="text"
                  id="identifierId"
                  className="w-full bg-transparent border border-[#5f6368] rounded-[4px] px-[16px] py-[16px] text-white focus:outline-none focus:border-[#a8c7fa] focus:border-2 transition-colors peer placeholder-transparent"
                  placeholder="Email or phone"
                />
                <label
                  htmlFor="identifierId"
                  className="absolute left-[16px] top-[16px] text-[#9aa0a6] text-[16px] transition-all peer-focus:top-[6px] peer-focus:text-[12px] peer-focus:text-[#a8c7fa] peer-[:not(:placeholder-shown)]:top-[6px] peer-[:not(:placeholder-shown)]:text-[12px] pointer-events-none bg-[#1f1f1f] sm:bg-[#202124] px-1 -ml-1"
                >
                  Email or phone
                </label>
              </div>

              <div className="mb-8">
                <button className="text-[#a8c7fa] text-[14px] font-medium hover:text-[#d3e3fd]">
                  Forgot email?
                </button>
              </div>

              <div className="text-[14px] text-[#9aa0a6] mb-8 leading-[20px]">
                Before using this app, you can review WordPress's{' '}
                <a href="#" className="text-[#a8c7fa] hover:text-[#d3e3fd]">Privacy Policy</a> and{' '}
                <a href="#" className="text-[#a8c7fa] hover:text-[#d3e3fd]">Terms of Service</a>.
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row justify-between items-center mt-12 sm:mt-[60px]">
                <button className="text-[#a8c7fa] text-[14px] font-medium px-4 py-2 hover:bg-[#a8c7fa]/[0.08] rounded-full transition-colors">
                  Create account
                </button>
                <button className="bg-[#a8c7fa] text-[#1f1f1f] text-[14px] font-medium px-6 py-2.5 rounded-[100px] hover:bg-[#c2d7fa] transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full sm:w-[968px] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 mt-2 text-[#9aa0a6] text-[12px]">
        <div className="mb-4 sm:mb-0 cursor-pointer hover:bg-[#a8c7fa]/[0.08] px-3 py-2 rounded">
          English (United States)
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:bg-[#a8c7fa]/[0.08] px-3 py-2 rounded">Help</a>
          <a href="#" className="hover:bg-[#a8c7fa]/[0.08] px-3 py-2 rounded">Privacy</a>
          <a href="#" className="hover:bg-[#a8c7fa]/[0.08] px-3 py-2 rounded">Terms</a>
        </div>
      </div>
    </div>
  );
}
