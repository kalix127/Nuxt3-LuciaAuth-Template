import antfu from '@antfu/eslint-config';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
    trailingComma: null,
  },
  typescript: true,
  vue: true,
}, {
  plugins: {
    tailwind,
  },
  rules: {
    'no-multiple-empty-lines': 'error',
    'node/prefer-global/process': 'off',
    'style/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/no-v-for-template-key': 'off',
    'vue/multi-word-component-names': 'off',
    'tailwind/classnames-order': ['warn'],
    'tailwind/enforces-negative-arbitrary-values': ['warn'],
    'tailwind/enforces-shorthand': ['error'],
    'tailwind/no-contradicting-classname': ['error'],
    'tailwind/no-unnecessary-arbitrary-value': ['error'],
  },
});
