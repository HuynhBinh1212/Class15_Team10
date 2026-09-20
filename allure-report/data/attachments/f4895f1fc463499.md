# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Feature >> I_01: Kiểm tra chức năng Quên mật khẩu
- Location: tests\ui\login.spec.ts:37:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText(/Quên mật khẩu/i)

```

```
Error: browserContext._wrapApiCall: Target page, context or browser has been closed
```