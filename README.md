# InterviewMate

## Overview
InterviewMate is an AI-powered project designed to help users prepare for technical interviews. It offers a comprehensive suite of tools and resources, including mock interviews, and personalized feedback, to help users improve their technical skills and boost their confidence.

## Technologies Used
- **Next.js**: A React framework for server-side rendering and generating static websites.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Firebase**: A platform developed by Google for creating mobile and web applications.
- **VAPI**: A hypothetical API service used for various integrations.
- **DevIcons**: A set of icons for programming languages, designing & development tools.

## Setup

### Install Dependencies
Run the following command to install the necessary npm packages:
```bash
npm install
```

### ESLint and Prettier Configuration
This project uses ESLint and Prettier to enforce code quality and formatting standards.

#### ESLint Configuration
The ESLint configuration is located in `.eslintrc.js`:
```javascript
module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-unused-modules': 'warn',
    'import/no-duplicates': 'warn',
  },
};
```

#### Prettier Configuration
The Prettier configuration is located in `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### VSCode Settings
To ensure ESLint and Prettier run on save, update your VSCode settings in `.vscode/settings.json`:
```jsonc
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## Live Site
The live demo site can be found [here](https://interview-mate-vl8u.vercel.app/)

## Usage
To lint and format your code, simply save your files in VSCode. ESLint and Prettier will automatically run and fix any issues.

## Acknowledgements
Special thanks to the YouTube channel [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) for the inspiration and guidance in creating this project.
