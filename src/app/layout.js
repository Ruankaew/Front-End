import './globals.css'; // CSS สำหรับ Global Styles
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'My Website',
  description: 'A sample Next.js project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: '80vh', padding: '1rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
