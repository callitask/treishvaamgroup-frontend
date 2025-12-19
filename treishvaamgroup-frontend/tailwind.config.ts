import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        surface: {
          50: '#FFFFFF',  // Pure White
          100: '#F8F9FA', // Pearl
          200: '#E9ECEF', // Platinum
        },
        corporate: {
          900: '#111827', // Obsidian Black (Text)
          800: '#1F2937', // Charcoal
          600: '#4B5563', // Slate (Subtext)
          500: '#6B7280', 
        },
        gold: {
          100: '#FBF5E6', // Champagne
          300: '#D4AF37', // Metallic Gold
          400: '#C5A028',
          500: '#B08D55', // Elegant Gold (Primary)
          600: '#8E703E', // Deep Gold
          shiny: '#F5D061', // High-gloss highlight
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(45deg, #B08D55 25%, #F5D061 50%, #B08D55 75%)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(180, 146, 90, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        textShimmer: {
          '0%': { color: '#B08D55' },
          '100%': { color: '#F5D061' },
        }
      }
    },
  },
  plugins: [],
};
export default config;