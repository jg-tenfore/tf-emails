import { Button } from "@/components/base/buttons/button";

/**
 * The Vite app is a lightweight landing page. The real catalog of emails and
 * their components lives in Storybook (`npm run storybook`).
 */
function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="text-sm font-semibold tracking-wide text-brand-secondary uppercase">
        Tenfore Golf
      </span>
      <h1 className="text-display-md font-semibold text-primary">
        Email Style Guide
      </h1>
      <p className="text-lg text-tertiary">
        A catalog of Tenfore Golf transactional and marketing emails, built from
        a shared set of Untitled UI components. Browse every email and its
        broken-out parts in Storybook.
      </p>
      <Button
        size="lg"
        href="https://jg-tenfore.github.io/tf-emails/"
        target="_blank"
      >
        Open the component catalog
      </Button>
    </main>
  );
}

export default App;
