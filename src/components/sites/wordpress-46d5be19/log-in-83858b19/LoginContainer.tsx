"use client";

import React from 'react';

const GoogleIcon = () => (
  <svg className="social-icons social-icons__google social-icons--enabled" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="19" height="19">
    <g fill="none" fillRule="evenodd">
      <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4" />
      <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0 0 10 20z" fill="#34A853" />
      <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 0 0 0 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05" />
      <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.192 5.736 7.396 3.977 10 3.977z" fill="#EA4335" />
    </g>
  </svg>
);

const AppleIcon = () => (
  <svg className="social-icons social-icons__apple social-icons--enabled" width="17" height="17" viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
    <path d="m150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zm-31.26-123.01c0 8.1021-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.3113 11.45-8.597 4.62-2.2516 8.99-3.4968 13.1-3.71 0.12 1.0831 0.17 2.1663 0.17 3.2409z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icons social-icons__apple social-icons--enabled">
    <g clipPath="url(#clip0_2014_1339)">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.47169 0C4.23409 0 0 4.26531 0 9.54207C0 13.7601 2.71293 17.3305 6.47648 18.5942C6.94702 18.6892 7.11938 18.3889 7.11938 18.1363C7.11938 17.9151 7.10387 17.1568 7.10387 16.3668C4.46907 16.9356 3.9204 15.2293 3.9204 15.2293C3.49697 14.1234 2.86958 13.8392 2.86958 13.8392C2.00721 13.2546 2.9324 13.2546 2.9324 13.2546C3.88899 13.3178 4.39094 14.2341 4.39094 14.2341C5.2376 15.6874 6.60192 15.2768 7.15079 15.024C7.22911 14.4078 7.48018 13.9813 7.74677 13.7444C5.64533 13.5232 3.43435 12.7017 3.43435 9.03644C3.43435 7.99377 3.81047 7.1407 4.40645 6.47725C4.31242 6.24034 3.98302 5.26067 4.50067 3.94948C4.50067 3.94948 5.30042 3.69666 7.10367 4.92895C7.87571 4.72008 8.6719 4.61382 9.47169 4.61293C10.2714 4.61293 11.0867 4.72363 11.8395 4.92895C13.643 3.69666 14.4427 3.94948 14.4427 3.94948C14.9604 5.26067 14.6308 6.24034 14.5367 6.47725C15.1484 7.1407 15.509 7.99377 15.509 9.03644C15.509 12.7017 13.2981 13.5073 11.1809 13.7444C11.526 14.0445 11.8238 14.6131 11.8238 15.5137C11.8238 16.7933 11.8083 17.8203 11.8083 18.1361C11.8083 18.3889 11.9809 18.6892 12.4512 18.5944C16.2148 17.3303 18.9277 13.7601 18.9277 9.54207C18.9432 4.26531 14.6936 0 9.47169 0Z" fill="#24292F" />
    </g>
    <defs>
      <clipPath id="clip0_2014_1339">
        <rect width="19" height="18.6122" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const MailIcon = () => (
  <svg className="social-icons social-icons__mail social-icons--enabled" width="20" height="20" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <rect id="Rectangle 710" x="0.75" y="0.75" width="16.5" height="12.5" rx="1.25" stroke="#1D2327" fill="none" strokeWidth="1.5" />
      <path id="Vector 107" d="M1 3.5L9 9.5L17 3.5" stroke="#1D2327" strokeWidth="1.5" fill="none" />
    </g>
  </svg>
);

const JetpackIcon = () => (
  <svg className="jetpack-logo social-icons" height="20" width="20" viewBox="0 0 32 32">
    <path className="jetpack-logo__icon-circle" fill="#069e08" d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z" />
    <polygon className="jetpack-logo__icon-triangle" fill="#fff" points="15,19 7,19 15,3 " />
    <polygon className="jetpack-logo__icon-triangle" fill="#fff" points="17,29 17,13 25,13 " />
  </svg>
);

export function LoginContainer() {
  return (
    <div className="login flex flex-col items-center w-full max-w-[660px] mx-auto gap-8">
      <div className="text-center">
        <h1
          className="text-[32px] font-normal text-[#101517]"
          style={{ fontFamily: 'Recoleta, "Noto Serif", Georgia, "Times New Roman", Times, serif' }}
        >
          Log in to WordPress.com
        </h1>
        <p
          className="text-[16px] font-normal text-[#2C3338] mt-4"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif' }}
        >
          By continuing with any of the options below, you agree to our Terms of Service and have read our Privacy Policy.
        </p>
      </div>

      {/* Added form with inspected topology classes, onSubmit prevented to block credential capture */}
      <form
        className="is-social-first flex flex-col md:flex-row w-full md:w-[660px] md:min-h-[275px]"
        method="post"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="card login__form flex flex-col w-full md:w-[282px] md:flex-shrink-0">
          <div className="login__form-userdata">
            <label htmlFor="usernameOrEmail" className="form-label form-label-core-styles form-label-core-styles-no-caps text-[14px] font-bold text-[#2C3338] mb-2 block" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif' }}>
              <span aria-hidden="true">Email address or username</span>
            </label>
            <input
              id="usernameOrEmail"
              name="usernameOrEmail"
              type="text"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              className="form-text-input form-text-input-core-styles text-[14px] text-[#50575E] bg-white px-2 py-1.5 border border-[#C3C4C7] rounded-[2px] h-10 w-full mb-4 focus:outline-none focus:border-[#3858E9] focus:ring-1 focus:ring-[#3858E9]"
            />

            {/* Password field topology included but hidden, strictly no credential capture logic */}
            <div className="login__form-password is-hidden hidden" aria-hidden="true">
              <label htmlFor="password" className="form-label form-label-core-styles form-label-core-styles-no-caps text-[14px] font-bold text-[#2C3338] mb-2 block">
                Password
              </label>
              <div className="form-password-input relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  autoCapitalize="off"
                  tabIndex={-1}
                  className="form-text-input form-text-input-core-styles text-[14px] text-[#50575E] bg-white px-2 py-1.5 border border-[#C3C4C7] rounded-[2px] h-10 w-full mb-4"
                />
              </div>
            </div>
          </div>

          <div className="login__form-blackbox-challenge has-visible-challenge" data-blackbox-challenge="" style={{ maxWidth: '100%' }}></div>

          <div className="login__form-action">
            <button type="submit" className="components-button is-next-40px-default-size is-primary bg-[#3858E9] text-white text-[13px] font-medium py-1 px-3 rounded-[2px] h-10 w-full flex justify-center items-center transition-colors hover:bg-[#2b4cda]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif' }}>
              Continue
            </button>
          </div>
        </div>

        <div className="auth-form__separator flex flex-row md:flex-col items-center justify-center relative my-6 md:my-0 md:mx-[40px] w-full md:w-[1px] h-auto md:h-full">
          <div className="h-[1px] w-full md:w-[1px] md:h-[235px] bg-[#E0E0E0]"></div>
          <div className="auth-form__separator-text absolute bg-[#FCFCFC] text-[12px] text-[#646970] px-6 md:px-0 md:py-6 font-normal">
            or
          </div>
        </div>

        <div className="card auth-form__social is-login is-social-first flex flex-col gap-[12px] w-full md:w-[282px] md:flex-shrink-0" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif' }}>
          <div className="auth-form__social-buttons">
            <div className="auth-form__social-buttons-container flex flex-col gap-[12px]">
              <button
                type="button"
                data-social-service="google"
                className="components-button a8c-components-wp-button social-buttons__button google is-next-40px-default-size is-secondary text-[13px] font-medium text-[#1E1E1E] py-1 px-[18px] border border-[#C3C4C7] rounded-[2px] h-10 flex justify-start items-center gap-2 w-full hover:bg-gray-50 transition-colors"
              >
                <GoogleIcon />
                <span className="social-buttons__service-name">Continue with Google</span>
              </button>

              <button type="button" data-social-service="apple" className="components-button a8c-components-wp-button social-buttons__button apple is-next-40px-default-size is-secondary text-[13px] font-medium text-[#1E1E1E] py-1 px-[18px] border border-[#C3C4C7] rounded-[2px] h-10 flex justify-start items-center gap-2 w-full hover:bg-gray-50 transition-colors">
                <AppleIcon />
                <span className="social-buttons__service-name">Continue with Apple</span>
              </button>

              <button type="button" data-social-service="github" className="components-button a8c-components-wp-button social-buttons__button is-next-40px-default-size is-secondary text-[13px] font-medium text-[#1E1E1E] py-1 px-[18px] border border-[#C3C4C7] rounded-[2px] h-10 flex justify-start items-center gap-2 w-full hover:bg-gray-50 transition-colors">
                <GitHubIcon />
                <span className="social-buttons__service-name">Continue with GitHub</span>
              </button>

              <a href="/log-in/link" data-e2e-link="magic-login-link" className="components-button a8c-components-wp-button social-buttons__button magic-login-link is-next-40px-default-size is-secondary text-[13px] font-medium text-[#1E1E1E] py-1 px-[18px] border border-[#C3C4C7] rounded-[2px] h-10 flex justify-start items-center gap-2 w-full hover:bg-gray-50 transition-colors">
                <MailIcon />
                <span className="social-buttons__service-name">Email me a login link</span>
              </a>

              <a href="/log-in/qr" data-e2e-link="magic-login-link" className="components-button a8c-components-wp-button social-buttons__button is-next-40px-default-size is-secondary text-[13px] font-medium text-[#1E1E1E] py-1 px-[18px] border border-[#C3C4C7] rounded-[2px] h-10 flex justify-start items-center gap-2 w-full hover:bg-gray-50 transition-colors">
                <JetpackIcon />
                <span className="social-buttons__service-name">Log in via Jetpack app</span>
              </a>
            </div>
          </div>
        </div>
      </form>

      <div className="one-login__footer mt-6 md:mt-4 text-center w-full">
        <div className="one-login__footer-links-wrapper">
          <a href="#" className="one-login__footer-link text-[13px] text-[#2C3338] underline font-medium hover:no-underline" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif' }}>
            Lost your password?
          </a>
        </div>
        <div className="one-login__footer-links-wrapper"></div>
      </div>
    </div>
  );
}

export default LoginContainer;
