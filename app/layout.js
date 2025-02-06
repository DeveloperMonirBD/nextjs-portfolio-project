import { Outfit as OutfitFont, Ovo as OvoFont } from 'next/font/google';
import './globals.css';

const outfitFont = OutfitFont({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});

const ovoFont = OvoFont({
    subsets: ['latin'],
    weight: ['400']
});

export const metadata = {
    title: 'PortFolio-Monirul-Islam',
    description: ''
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfitFont.className} ${ovoFont.className} antialiased`}>{children}</body>
        </html>
    );
}
