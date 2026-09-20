# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\dashboard.spec.ts >> Dashboard Feature >> Movie Search (Quick Booking Bar) >> D_20: Kiểm tra tìm kiếm suất chiếu với đầy đủ thông tin
- Location: tests\ui\dashboard\dashboard.spec.ts:104:9

# Error details

```
Test timeout of 20000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e5]:
    - generic [ref=e7]:
      - img "Logo" [ref=e9]
      - generic [ref=e10]:
        - heading "Lịch Chiếu" [level=4] [ref=e12] [cursor=pointer]
        - heading "Cụm Rạp" [level=4] [ref=e14] [cursor=pointer]
        - heading "Tin Tức" [level=4] [ref=e16] [cursor=pointer]
        - heading "Ứng Dụng" [level=4] [ref=e18] [cursor=pointer]
      - generic [ref=e19]:
        - link [ref=e20] [cursor=pointer]:
          - /url: /sign-in
          - heading "Đăng Nhập" [level=3] [ref=e23]
        - separator [ref=e24]
        - link [ref=e25] [cursor=pointer]:
          - /url: /sign-up
          - heading "Đăng Ký" [level=3] [ref=e28]
  - img "loading" [ref=e31]
```