/*
 * @Description: 
 * @Author: web.wangxingren
 * @Date: 2023-04-19 23:06:38
 * @LastEditors: web.wangxingren
 * @LastEditTime: 2023-05-25 22:47:14
 * @FilePath: /blog-web/tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */

const spacing = {
  0: 0,
  2: '2px',
  4: '4px',
  8: '8px',
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  30: '30px',
  40: '40px'
};
const colors = {
  'high-color': '#1f2d3d',
  'white-color': '#fff',
  'font-color': '#4c4948',
  'a-hover': '#49b1f5;',
  'btn-color': '#49b1f5',
  'desc-color': '#858585'
};
const fontFamily = {
  'sans': ['Titillium Web', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft JhengHei', 'Microsoft YaHei', 'sans-serif'],
};
const screens = {
    'sm': {'max': '640px'},
    // => @media (min-width: 640px) { ... }
    'md': {'max': '768px'},
    // => @media (min-width: 768px) { ... }
    'lg': {'max': '1024px'},
    // => @media (min-width: 1024px) { ... }
    'xl': {'max': '1280px'},
    // => @media (min-width: 1280px) { ... }
}
module.exports = {
  important: true,
  content: [],
  theme: {
    extend: {
      spacing,
      colors,
      screens,
      fontFamily
    },
    colors
  },
  plugins: []
}