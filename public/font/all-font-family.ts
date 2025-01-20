import { Outfit, Syne, Rubik, Inter, Open_Sans } from 'next/font/google';

const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
});

const syne = Syne({
    variable: '--font-syne',
    subsets: ['latin'],
});

const rubik = Rubik({
    variable: '--font-rubik',
    subsets: ['latin'],
});

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

const openSans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ['latin'],
});

export { outfit, syne, rubik, inter, openSans };
