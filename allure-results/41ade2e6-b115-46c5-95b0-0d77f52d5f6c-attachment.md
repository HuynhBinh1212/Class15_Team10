# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\dashboard.spec.ts >> Dashboard Feature >> Movie Listing >> D_25: Hiển thị nút 'Play' và 'Mua vé' khi rê chuột
- Location: tests\ui\dashboard\dashboard.spec.ts:155:9

# Error details

```
Test timeout of 20000ms exceeded.
```

```
TimeoutError: locator.hover: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.movie-card, .film-item, .card').first()

```

```
Tearing down "context" exceeded the test timeout of 20000ms.
```