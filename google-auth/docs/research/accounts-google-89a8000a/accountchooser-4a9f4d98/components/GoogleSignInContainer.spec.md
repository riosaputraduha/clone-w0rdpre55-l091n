# GoogleSignInContainer Specification

## Overview
- **Target file:** `src/components/sites/accounts-google-89a8000a/accountchooser-4a9f4d98/GoogleSignInContainer.tsx`
- **Screenshot:** `google-auth/docs/design-references/accounts-google-89a8000a/accountchooser-4a9f4d98/desktop.png`
- **Interaction model:** static

## DOM Structure
- Page Background (`bg-[#1f1f1f]`, `min-h-screen`, `flex-col`, `items-center`, `justify-center`)
  - Main Card
    - Top header (Google logo, "Sign in with Google")
    - Content Wrapper (flex-row desktop)
      - Left Col (H1, Subtitle)
      - Right Col (Input, Forgot email, Disclaimers, Action Buttons)
  - Footer
    - Language select
    - Links (Help, Privacy, Terms)

## Computed Styles (Exact Values)

### Main Card
- backgroundColor: #1f1f1f (match body or slightly different, #202124 usually, or based on image)
- width: 968px (desktop)
- height: auto (approx 400px)
- borderRadius: 28px
- display: flex
- flexDirection: column

### Left Column
- width: 460px
- padding: 48px

### Title (H1)
- fontSize: 36px
- fontWeight: 400
- fontFamily: "Google Sans", roboto, "Noto Sans Myanmar UI", "Noto Sans Khmer", arial, sans-serif
- color: rgb(227, 227, 227)

### Subtitle
- fontSize: 16px
- color: rgb(227, 227, 227)

### Next Button
- fontSize: 14px
- fontWeight: 500
- color: #1f1f1f
- backgroundColor: rgb(168, 199, 250) (Light Blue)
- borderRadius: 100px (Pill shape)
- padding: 10px 24px

### Input Field
- border: 1px solid #5f6368
- borderRadius: 4px
- padding: 16px
- color: white

## Assets
- Icons: Google 'G' Logo (colored)

## Text Content
- "Sign in with Google"
- "Sign in"
- "to continue to WordPress"
- "Email or phone"
- "Forgot email?"
- "Before using this app, you can review WordPress's Privacy Policy and Terms of Service."
- "Create account"
- "Next"
- "English (United States)"
- "Help"
- "Privacy"
- "Terms"
