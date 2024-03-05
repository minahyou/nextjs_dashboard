import '@/app/ui/global.css'; //ui안에 기본 css가 있다.
import {inter} from '@/app/ui/font'

//@-decorator : 코드

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className= {`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
