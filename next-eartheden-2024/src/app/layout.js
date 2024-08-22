import "./globals.css";
import "./main.css";

export const metadata = {
  title: "어디든",
  description: "위치 기반 편의 시설 제공 서비스",
  charset: "UTF-8",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Gowun+Dodum&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
