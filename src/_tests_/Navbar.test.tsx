import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { getPage, initTestHelpers } from 'next-page-tester';

initTestHelpers();

/* describeの中にテストケースを書く */
describe('Navigatiton by Link', () => {
  /* next-page-testerを使用する際は非同期で書く */
  /* Home画面から各4画面へ遷移するテスト */
  it('Should route to selected page in home navbar', async () => {
    const { page } = await getPage({
      route: '/index',
    });

    render(page);

    userEvent.click(screen.getByTestId('blog-nav'));
    expect(await screen.findByText('Blog Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('comment-nav'));
    expect(await screen.findByText('Comment Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('context-nav'));
    expect(await screen.findByText('Context Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('todo-nav'));
    expect(await screen.findByText('Todo Page')).toBeInTheDocument();
  });

  /* Blog画面から各4画面へ遷移するテスト */
  it('Should route to selected blog page in navbar', async () => {
    const { page } = await getPage({
      route: '/blog',
    });

    render(page);

    userEvent.click(screen.getByTestId('home-nav'));
    expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('comment-nav'));
    expect(await screen.findByText('Comment Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('context-nav'));
    expect(await screen.findByText('Context Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('todo-nav'));
    expect(await screen.findByText('Todo Page')).toBeInTheDocument();
  });

  /* Comment画面から各4画面へ遷移するテスト */
  it('Should route to selected comment page in navbar', async () => {
    const { page } = await getPage({
      route: '/comment',
    });

    render(page);

    userEvent.click(screen.getByTestId('home-nav'));
    expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('blog-nav'));
    expect(await screen.findByText('Blog Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('context-nav'));
    expect(await screen.findByText('Context Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('todo-nav'));
    expect(await screen.findByText('Todo Page')).toBeInTheDocument();
  });

  /* Context画面から各4画面へ遷移するテスト */
  it('Should route to selected context page in navbar', async () => {
    const { page } = await getPage({
      route: '/context',
    });

    render(page);

    userEvent.click(screen.getByTestId('home-nav'));
    expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('blog-nav'));
    expect(await screen.findByText('Blog Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('comment-nav'));
    expect(await screen.findByText('Comment Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('todo-nav'));
    expect(await screen.findByText('Todo Page')).toBeInTheDocument();
  });

  /* Todo画面から各4画面へ遷移するテスト */
  it('Should route to selected todo page in navbar', async () => {
    const { page } = await getPage({
      route: '/todo',
    });

    render(page);

    userEvent.click(screen.getByTestId('home-nav'));
    expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('blog-nav'));
    expect(await screen.findByText('Blog Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('comment-nav'));
    expect(await screen.findByText('Comment Page')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('context-nav'));
    expect(await screen.findByText('Context Page')).toBeInTheDocument();
  });
});
