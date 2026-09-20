# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Feature >> D_07: Kiểm tra hiển thị và điều hướng chức năng Đăng Nhập
- Location: tests\ui\login.spec.ts:5:7

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
  - main [ref=e31]:
    - generic [ref=e32]:
      - heading "Đăng nhập" [level=1] [ref=e36]
      - generic [ref=e37]:
        - generic [ref=e38]:
          - generic:
            - text: Tài Khoản
            - generic [aria-hidden]: "*"
          - generic [ref=e39]:
            - textbox "Tài Khoản" [ref=e40]
            - group [aria-hidden]
        - generic [ref=e41]:
          - generic:
            - text: Mật Khẩu
            - generic [aria-hidden]: "*"
          - generic [ref=e42]:
            - textbox "Mật Khẩu" [ref=e43]
            - button [ref=e45] [cursor=pointer]
            - group [aria-hidden]
        - generic [ref=e49] [cursor=pointer]:
          - checkbox "Nhớ tài khoản" [ref=e52]
          - generic [ref=e55]: Nhớ tài khoản
        - button "Đăng nhập" [ref=e56] [cursor=pointer]
        - link [ref=e60] [cursor=pointer]:
          - /url: /sign-up
          - heading "Bạn chưa có tài khoản? Đăng ký" [level=3] [ref=e61]
```