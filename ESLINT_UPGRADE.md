# Upgrading to ESLint v9 (Optional)

If you want to eliminate the ESLint deprecation warnings, you can upgrade to ESLint v9. However, this requires updating your ESLint configuration.

## Steps to Upgrade:

### 1. Install ESLint v9 and new config system

```bash
npm install --save-dev eslint@^9.0.0 @eslint/js @eslint/compat
npm install --save-dev eslint-plugin-react@^7.37.5 eslint-plugin-react-hooks@^5.0.0 eslint-plugin-react-refresh@^0.4.14
```

### 2. Create new `eslint.config.js` (flat config)

Replace `.eslintrc` files with this new format:

```javascript
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
```

### 3. Delete old ESLint config files

```bash
rm .eslintrc.cjs .eslintrc.json .eslintrc.js
```

### 4. Update package.json script

The lint command stays the same:
```json
"lint": "eslint . --max-warnings 0"
```

## Why You Should Wait:

**Recommended: Keep ESLint v8 for now** because:
- ✅ Your current setup works perfectly
- ✅ ESLint v9 just came out and ecosystem plugins are still catching up
- ✅ The warnings don't affect functionality
- ✅ Major frameworks (like Create React App, Next.js) haven't fully migrated yet

The warnings will naturally disappear as the ecosystem updates. Your build is completely fine as-is! 🎉

---

**TL;DR**: These are harmless warnings from npm about old packages. Your build works perfectly. No action needed unless you want to be on the bleeding edge.
