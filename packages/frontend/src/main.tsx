import { createRoot } from "react-dom/client"

import { App } from "./App.js"

const root = document.getElementById("root")

// CHANGE: fail fast when the root mount point is missing.
// WHY: avoid rendering into a null container during tests.
// QUOTE(TZ): "\u0421\u0430\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c app \u043d\u043e \u0432\u043e\u0442 \u0447\u0442\u043e \u0431\u044b \u0435\u0433\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0434\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u0438\u043d \u043f\u0440\u043e\u0435\u043a\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0430\u043f\u043f \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c"
// REF: user-2026-01-14-frontend-consumer
// SOURCE: n/a
// FORMAT THEOREM: root = null -> throws(Error)
// PURITY: SHELL
// EFFECT: n/a
// INVARIANT: root element exists before rendering
// COMPLEXITY: O(1)/O(1)
if (root === null) {
  throw new Error("Root element not found")
}

/**
 * Mounts the React application into the root container.
 *
 * @returns void
 *
 * @pure false
 * @effect DOM render
 * @invariant root is non-null
 * @complexity O(1)
 */
// CHANGE: mount the App component into the DOM container.
// WHY: provide a concrete React tree for component tagger tests.
// QUOTE(TZ): "\u0421\u0430\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c app \u043d\u043e \u0432\u043e\u0442 \u0447\u0442\u043e \u0431\u044b \u0435\u0433\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0434\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u0438\u043d \u043f\u0440\u043e\u0435\u043a\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0448 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0430\u043f\u043f \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c"
// REF: user-2026-01-14-frontend-consumer
// SOURCE: n/a
// FORMAT THEOREM: render(App) -> mounted(root)
// PURITY: SHELL
// EFFECT: DOM render
// INVARIANT: App renders once at startup
// COMPLEXITY: O(1)/O(1)
createRoot(root).render(<App />)
