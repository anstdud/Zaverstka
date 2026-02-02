// // src/hooks/useFavicon.js
// import { useEffect } from 'react';
//
// export const useFavicon = () => {
//     useEffect(() => {
//         // Определяем браузер
//         const isEdge = navigator.userAgent.includes('Edge');
//         const isYandex = navigator.userAgent.includes('YaBrowser');
//
//         if (isEdge || isYandex) {
//             // Специальная обработка для проблемных браузеров
//             const fixFaviconForProblemBrowsers = () => {
//                 const baseUrl = window.location.origin;
//                 const timestamp = Date.now();
//
//                 // 1. Удаляем все существующие favicon
//                 document.querySelectorAll('link[rel*="icon"]').forEach(el => el.remove());
//
//                 // 2. Добавляем минимальный набор
//                 const favicon = document.createElement('link');
//                 favicon.rel = 'icon';
//                 favicon.href = `${baseUrl}/favicon.ico?v=${timestamp}`;
//                 favicon.type = 'image/x-icon';
//                 document.head.appendChild(favicon);
//
//                 const favicon32 = document.createElement('link');
//                 favicon32.rel = 'icon';
//                 favicon32.href = `${baseUrl}/favicon-32x32.png?v=${timestamp}`;
//                 favicon32.type = 'image/png';
//                 favicon32.sizes = '32x32';
//                 document.head.appendChild(favicon32);
//
//                 // 3. Для Edge добавляем meta
//                 if (isEdge) {
//                     const msTile = document.createElement('meta');
//                     msTile.name = 'msapplication-TileImage';
//                     msTile.content = `${baseUrl}/mstile-144x144.png?v=${timestamp}`;
//                     document.head.appendChild(msTile);
//                 }
//             };
//
//             // Запускаем сразу и с задержкой
//             fixFaviconForProblemBrowsers();
//             setTimeout(fixFaviconForProblemBrowsers, 500);
//         }
//     }, []);
// };