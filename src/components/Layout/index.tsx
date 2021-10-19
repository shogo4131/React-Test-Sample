import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/Link';

interface Props {
  children: ReactNode;
  title: string;
}

const Layout: FC<Props> = ({ children, title = 'Next.js' }) => {
  const headers = [
    {
      href: '/',
      label: 'HOME',
      testId: 'home-nav',
    },
    {
      href: '/blog',
      label: 'Blog',
      testId: 'blog-nav',
    },
    {
      href: '/comment',
      label: 'Comment',
      testId: 'comment-nav',
    },
    {
      href: '/context',
      label: 'Context',
      testId: 'context-nav',
    },
    {
      href: '/todo',
      label: 'Todo',
      testId: 'todo-nav',
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h14">
            <div className="flex space-x-4">
              {headers.map(({ href, label, testId }) => (
                <Link href={href} key={href}>
                  <a
                    data-testid={testId}
                    className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                  >
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="flex items-center">
        <small>©️ React Test Sample</small>
      </footer>
    </div>
  );
};

export default Layout;
