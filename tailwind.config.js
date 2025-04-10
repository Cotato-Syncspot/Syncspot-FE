/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tt: 'TT Interphases Pro Trl Variable',
        suit: 'SUIT',
        pre: 'Pretendard',
      },
      fontSize: {
        // 로고 - SUIT Bold 38pt
        logo: ['2.375rem', { letterSpacing: '-2.5%', fontWeight: '700' }],
        // 제목 - SUIT Bold 26pt
        title: [
          '1.625rem',
          {
            letterSpacing: '-2.5%',
            fontWeight: '700',
          },
        ],
        // 소제목 - SUIT Bold 22pt
        subtitle: [
          '1.375rem',
          {
            letterSpacing: '-2.5%',
            fontWeight: '700',
          },
        ],
        // 메뉴 - SUIT Regular 18pt
        menu: [
          '1.125rem',
          {
            letterSpacing: '-2.5%',
            fontWeight: '400',
          },
        ],
        // 메뉴 선택 - SUIT Bold 18pt
        'menu-selected': [
          '1.125rem',
          {
            letterSpacing: '-2.5%',
            fontWeight: '700',
          },
        ],
        // 본문 - SUIT Medium 16pt
        content: [
          '1rem',
          {
            letterSpacing: 'base',
            fontWeight: '500',
          },
        ],
        // 본문 강조 - SUIT Bold 16pt
        'content-bold': [
          '1rem',
          {
            letterSpacing: '-2.5%',
            fontWeight: '700',
          },
        ],
        // 부가 설명 - SUIT Medium 14pt
        description: [
          '0.875rem',
          {
            letterSpacing: 'base',
            fontWeight: '500',
          },
        ],
      },
      colors: {
        white: {
          default: 'var(--white)',
        },
        black: {
          default: 'var(--black)',
        },
        blue: {
          light01: 'var(--blue-light01)',
          light02: 'var(--blue-light02)',
          normal01: 'var(--blue-normal01)',
          normal02: 'var(--blue-normal02)',
          dark01: 'var(--blue-dark01)',
          dark02: 'var(--blue-dark02)',
          dark03: 'var(--blue-dark03)',
        },
        gray: {
          light: 'var(--gray-light)',
          normal: 'var(--gray-normal)',
          dark: 'var(--gray-dark)',
        },
        red: {
          light: 'var(--red-light)',
          normal: 'var(--red-normal)',
        },
      },
      textColor: {
        primary: 'var(--blue-normal01)',
        secondary: 'var(--blue-normal02)',
        tertiary: 'var(--blue-dark02)',
        error: {
          light: 'var(--red-light)',
          normal: 'var(--red-normal)',
        },
        white: {
          default: 'var(--white)',
        },
        black: {
          default: 'var(--black)',
        },
      },
      backgroundColor: {
        primary: 'var(--blue-normal01)',
        secondary: 'var(--blue-normal02)',
        tertiary: 'var(--blue-dark02)',
        disabled: 'var(--gray-normal)',
        error: {
          light: 'var(--red-light)',
          normal: 'var(--red-normal)',
        },
        overlay: 'var(--black-alpha-60)',
      },
      borderColor: {
        primary: 'var(--blue-normal01)',
        secondary: 'var(--blue-normal02)',
        tertiary: 'var(--blue-dark02)',
        disabled: 'var(--gray-normal)',
        error: {
          light: 'var(--red-light)',
          normal: 'var(--red-normal)',
        },
        gray: {
          light: 'var(--gray-light)',
          normal: 'var(--gray-normal)',
          dark: 'var(--gray-dark)',
        },
      },
      borderWidth: {
        login: '0.0625rem',
      },
      borderRadius: {
        default: '0.875rem',
        login: '1.875rem',
      },
      fill: {
        primary: 'var(--blue-normal01)',
        secondary: 'var(--blue-normal02)',
        tertiary: 'var(--blue-dark02)',
        disabled: 'var(--gray-normal)',
        error: {
          light: 'var(--red-light)',
          normal: 'var(--red-normal)',
        },
      },
      boxShadow: {
        default: '0 0 20px 0 rgba(47, 95, 221, 0.50)',
        focus: '0 0 0 2px rgba(235, 248, 255, 1)',
        black: '0 0 8px 0 rgba(0,0,0,0.25)',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        customBounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            '-webkit-transform': 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-25px)',
            '-webkit-transform': 'translateY(-25px)',
          },
        },
      },
      animation: {
        slideDown: 'slideDown 0.2s ease-in-out',
        slideUp: 'slideUp 0.2s ease-in-out',
        customBounce: 'customBounce 2s ease-in-out infinite',
        slideInRight: 'slideInRight 0.3s ease-in-out',
        slideOutRight: 'slideOutRight 0.3s ease-in-out',
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.3s ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
};
