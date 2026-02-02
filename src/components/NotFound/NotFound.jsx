import React, { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.title = '404 - Страница не найдена | Zaverstka';
        }
    }, []);

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
                    backgroundColor: '#007bff',
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