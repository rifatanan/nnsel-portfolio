import { Sora } from 'next/font/google';
import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                bandColorYellow: '#FF9143',
                bandColorBlack: '#1A1A1A',
                bandColorSemiBlack: '#262A2C',
                bandColorAsh: '#696969',
                bandColorWhite: '#FFFFFF',
            },
            fontFamily: {
                outfit: ['var(--font-outfit)'],
                syne: ['var(--font-syne)'],
                rubik: ['var(--font-rubik)'],
                inter: ['var(--font-inter)'],
                openSans: ['var(--font-open-sans)'],
                sora: 'Sora',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '12px',
                md: '50px',
                lg: '100px',
            },
        },
    },

    plugins: [],
} satisfies Config;
