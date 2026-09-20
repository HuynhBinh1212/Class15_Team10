# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\dashboard.spec.ts >> Dashboard Feature >> Movie Search (Quick Booking Bar) >> D_16: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu khi chỉ chọn Phim
- Location: tests\ui\dashboard\dashboard.spec.ts:65:9

# Error details

```
Test timeout of 20000ms exceeded.
```

```
TimeoutError: locator.click: Timeout 20000ms exceeded.
Call log:
  - waiting for locator('text=Phim').first()
    - locator resolved to <option value="" disabled>Phim</option>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    12 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

```
Tearing down "context" exceeded the test timeout of 20000ms.
```