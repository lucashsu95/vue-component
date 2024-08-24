/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{vue,js,ts,jsx,tsx}']
export const plugins = []
export const theme = {
  extend: {
    colors: {
      primary: '#63e2b7',
      warning: '#f2c97d',
      danger: '#e88080',
      info: '#70c0e8'
    }
  }
}
