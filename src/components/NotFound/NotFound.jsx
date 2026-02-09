import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
    const location = useLocation();

    useEffect(() => {
        document.title = '404 - Страница не найдена | Zaverstka';

        if (typeof window !== 'undefined') {
            const meta = document.createElement('meta');
            meta.name = 'prerender-status-code';
            meta.content = '404';
            document.head.appendChild(meta);
        }

        console.log('404 page accessed:', location.pathname);
    }, [location]);

    return (
        <div style={{
            textAlign: 'center',
            padding: '100px 20px',
            minHeight: '60vh'
        }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>404</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
                Страница не найдена
            </p>
            <a
                href="/"
                style={{
                    display: 'inline-block',
                    padding: '12px 30px',
                    backgroundColor: '#4C5C13',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px'
                }}
            >
                Вернуться на главную
            </a>
        </div>
    );
}