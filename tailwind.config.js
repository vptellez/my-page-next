/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '60%': { transform: 'translateX(-100%)', opacity: 0.6 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          '90%': {
            opacity: 0.8,
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 0.45s ease-out forwards',
        fadeInUp: 'fadeInUp 200ms ease 300ms',
      },
    },
  },
  plugins: [],
};
