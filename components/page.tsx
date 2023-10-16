import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

export default function Page ({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}