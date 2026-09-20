# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\tintuc.spec.ts >> MuiContainer - News Section Feature >> D_38: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Khuyến Mãi
- Location: tests\ui\dashboard\tintuc.spec.ts:57:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByRole('button', { name: 'XEM THÊM' }).first()
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" getByRole('button', { name: 'XEM THÊM' }).first() with timeout 10000ms
  - waiting for getByRole('button', { name: 'XEM THÊM' }).first()
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

```
Error: browserContext._wrapApiCall: Target page, context or browser has been closed
```