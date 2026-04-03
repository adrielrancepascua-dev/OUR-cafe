import './globals.css';
import './design-tokens.css';
import { ReactNode } from 'react';
import { Navigation } from '../components/Navigation';

export const metadata = {
  title: 'OUR Cafe - San Fernando',
  description: 'The largest cafe in the Philippines. Exclusive. Seamless. Warm.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-stone-50 text-stone-900 antialiased">
        {/* Navigation */}
        <Navigation />

        {/* Main Content with Top Padding for Fixed Nav */}
        <main className="pt-20 sm:pt-24">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-amber-900 text-stone-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
            <div>
              <h4 className="font-display font-bold text-xl sm:text-2xl mb-4 text-white">☕ OUR Cafe</h4>
              <p className="text-amber-50 text-sm leading-relaxed opacity-90">
                San Fernando, Pampanga's largest cafe. Where warm hospitality meets seamless service.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg sm:text-xl mb-4 text-white">Hours</h4>
              <p className="text-amber-50 text-sm opacity-90">Mon - Sun</p>
              <p className="text-amber-50 text-sm opacity-90">6:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg sm:text-xl mb-4 text-white">Location</h4>
              <p className="text-amber-50 text-sm opacity-90">SACOP Grounds</p>
              <p className="text-amber-50 text-sm opacity-90">San Fernando, Pampanga</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-lg sm:text-xl mb-4 text-white">Contact</h4>
              <p className="text-amber-50 text-sm opacity-90">📱 +63 9XX XXXX XXX</p>
              <p className="text-amber-50 text-sm opacity-90">📧 hello@ourcafe.ph</p>
            </div>
          </div>

          <div className="border-t border-amber-800 pt-8 text-center text-amber-100 text-sm opacity-80">
            <p>© 2026 OUR Cafe. Crafted with ☕ and ❤️ | Pro-tip: This demo is ready for Supabase integration!</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
