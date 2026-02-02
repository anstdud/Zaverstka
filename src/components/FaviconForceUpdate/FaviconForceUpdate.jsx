// // src/components/FaviconForceUpdate/FaviconForceUpdate.jsx
// import { useEffect } from 'react';
//
// const FaviconForceUpdate = () => {
//     useEffect(() => {
//         // Функция для обновления всех favicon
//         const updateFavicons = () => {
//             const timestamp = Date.now();
//             const baseUrl = window.location.origin;
//
//             // Обновляем все link[rel*="icon"]
//             document.querySelectorAll('link[rel*="icon"]').forEach(link => {
//                 const currentHref = link.getAttribute('href');
//                 if (currentHref && currentHref.startsWith(baseUrl)) {
//                     const cleanHref = currentHref.split('?')[0];
//                     link.setAttribute('href', `${cleanHref}?v=${timestamp}`);
//                 }
//             });
//
//             // Обновляем meta-теги для Microsoft
//             document.querySelectorAll('meta[content*="mstile"]').forEach(meta => {
//                 const currentContent = meta.getAttribute('content');
//                 if (currentContent && currentContent.startsWith(baseUrl)) {
//                     const cleanContent = currentContent.split('?')[0];
//                     meta.setAttribute('content', `${cleanContent}?v=${timestamp}`);
//                 }
//             });
//
//             // Создаем скрытый iframe для принудительной загрузки favicon
//             // (старый трюк для обновления favicon в браузерах)
//             const iframe = document.createElement('iframe');
//             iframe.style.display = 'none';
//             iframe.src = `${baseUrl}/favicon.ico?v=${timestamp}`;
//             document.body.appendChild(iframe);
//             setTimeout(() => {
//                 document.body.removeChild(iframe);
//             }, 100);
//         };
//
//         // Обновляем сразу и через 1 секунду
//         updateFavicons();
//         const timer = setTimeout(updateFavicons, 1000);
//
//         return () => clearTimeout(timer);
//     }, []);
//
//     return null; // Этот компонент ничего не рендерит
// };
//
// export default FaviconForceUpdate;