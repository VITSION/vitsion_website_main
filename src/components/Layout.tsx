import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();

    // Check if the current path starts with '/admin' to exclude footer
    const isAdminPage = location.pathname.startsWith('/admin');

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                {children}
            </main>
            {!isAdminPage && <Footer />}
        </div>
    );
};

export default Layout;
