import './styles/globals.css';

export const metadata = {
  title: 'Devacity - Capacity Management for Developers',
  description: 'Easily monitor and handle developer capacity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
