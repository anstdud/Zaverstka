// // src/components/FaviconManager/FaviconManager.jsx
// import React from 'react';
// import { Helmet } from 'react-helmet-async';
//
// const FaviconManager = () => {
//     const baseUrl = window.location.origin;
//
//     return (
//         <Helmet>
//             {/* Базовые иконки */}
//             <link rel="icon" href={`${baseUrl}/favicon.ico`} type="image/x-icon" />
//             <link rel="shortcut icon" href={`${baseUrl}/favicon.ico`} />
//
//             {/* PNG иконки разных размеров */}
//             <link rel="icon" type="image/png" sizes="16x16" href={`${baseUrl}/favicon-16x16.png`} />
//             <link rel="icon" type="image/png" sizes="32x32" href={`${baseUrl}/favicon-32x32.png`} />
//             <link rel="icon" type="image/png" sizes="96x96" href={`${baseUrl}/favicon-96x96.png`} />
//             <link rel="icon" type="image/png" sizes="192x192" href={`${baseUrl}/favicon-192x192.png`} />
//
//             {/* SVG иконка */}
//             <link rel="icon" type="image/svg+xml" href={`${baseUrl}/favicon.svg`} />
//
//             {/* Apple Touch Icon */}
//             <link rel="apple-touch-icon" sizes="180x180" href={`${baseUrl}/apple-touch-icon.png`} />
//             <meta name="apple-mobile-web-app-title" content="Zaverstka" />
//
//             {/* Microsoft Tiles */}
//             <meta name="msapplication-TileColor" content="#4C5C13" />
//             <meta name="msapplication-TileImage" content={`${baseUrl}/mstile-144x144.png`} />
//             <meta name="msapplication-square70x70logo" content={`${baseUrl}/mstile-70x70.png`} />
//             <meta name="msapplication-square150x150logo" content={`${baseUrl}/mstile-150x150.png`} />
//             <meta name="msapplication-square310x310logo" content={`${baseUrl}/mstile-310x310.png`} />
//             <meta name="msapplication-config" content={`${baseUrl}/browserconfig.xml`} />
//
//             {/* Яндекс.Браузер */}
//             <meta name="yandex-tableau-widget" content={`logo=${baseUrl}/favicon-32x32.png, color=#4C5C13`} />
//
//             {/* Тема и прочее */}
//             <meta name="theme-color" content="#4C5C13" />
//             <meta name="description" content="Сайты, которые рассказывают историю вашего бренда и привлекают клиентов." />
//
//             {/* Динамическое обновление для Edge/Yandex */}
//             <script type="application/javascript">
//                 {`
//           // Принудительное обновление favicon для проблемных браузеров
//           if (navigator.userAgent.includes('Edge') || navigator.userAgent.includes('YaBrowser')) {
//             setTimeout(() => {
//               const timestamp = Date.now();
//               const favicon = document.querySelector('link[rel="icon"]');
//               if (favicon) {
//                 favicon.href = favicon.href.split('?')[0] + '?v=' + timestamp;
//               }
//               // Создаем скрытое изображение для "прогрева" кэша
//               const preloadImg = new Image();
//               preloadImg.src = '${baseUrl}/favicon.ico?v=' + timestamp;
//             }, 500);
//           }
//         `}
//             </script>
//         </Helmet>
//     );
// };
//
// export default FaviconManager;