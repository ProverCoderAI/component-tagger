/**
 * Renders a minimal UI for verifying component tagger output.
 *
 * @returns JSX.Element
 *
 * @pure true
 * @invariant title and description test ids are present
 * @complexity O(1)
 */
// CHANGE: add a tiny React tree for Playwright assertions.
// WHY: ensure the component tagger can be verified in a real frontend runtime.
// QUOTE(TZ): "\u0421\u0430\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c app \u043d\u043e \u0432\u043e\u0442 \u0447\u0442\u043e \u0431\u044b \u0435\u0433\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0434\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u0438\u043d \u043f\u0440\u043e\u0435\u043a\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0430\u043f\u043f \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c"
// REF: user-2026-01-14-frontend-consumer
// SOURCE: n/a
// FORMAT THEOREM: forall render: render(App) -> has(testIds)
// PURITY: CORE
// EFFECT: n/a
// INVARIANT: title/description are stable for e2e checks
// COMPLEXITY: O(1)/O(1)
export const App = (): JSX.Element => (
  <main className="app">
    <h1 data-testid="title">Component Tagger Demo</h1>
    <p data-testid="description">Every JSX element is tagged with path.</p>
  </main>
)
