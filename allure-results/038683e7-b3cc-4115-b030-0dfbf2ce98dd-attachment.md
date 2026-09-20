# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\moviesearch.spec.ts >> Movie Search & Listing Feature >> D_41: Kiểm tra logo hiển thị tại màn hình chi tiết phim John Cena WWE
- Location: tests\ui\dashboard\moviesearch.spec.ts:54:7

# Error details

```
Error: Hình ảnh bị lỗi cấu trúc! URL [https://demo1.cybersoft.edu.vn/detail/logo.png] trả về content-type là: text/html

expect(received).toBeTruthy()

Received: false
```

```
Tearing down "context" exceeded the test timeout of 20000ms.
```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - banner [ref=f1e5]:
    - generic [ref=f1e7]:
      - img "Logo" [ref=f1e9]
      - generic [ref=f1e10]:
        - heading "Lịch Chiếu" [level=4] [ref=f1e12] [cursor=pointer]
        - heading "Cụm Rạp" [level=4] [ref=f1e14] [cursor=pointer]
        - heading "Tin Tức" [level=4] [ref=f1e16] [cursor=pointer]
        - heading "Ứng Dụng" [level=4] [ref=f1e18] [cursor=pointer]
      - generic [ref=f1e19]:
        - link [ref=f1e20] [cursor=pointer]:
          - /url: /sign-in
          - heading "Đăng Nhập" [level=3] [ref=f1e23]
        - separator [ref=f1e24]
        - link [ref=f1e25] [cursor=pointer]:
          - /url: /sign-up
          - heading "Đăng Ký" [level=3] [ref=f1e28]
  - generic [ref=f1e34]:
    - button [ref=f1e38] [cursor=pointer]:
      - img "video-button" [ref=f1e40]
    - generic [ref=f1e42]:
      - heading "02.11.2023" [level=4] [ref=f1e44]
      - heading "John Cena WWE" [level=1] [ref=f1e46]
      - heading "120phút" [level=5] [ref=f1e48]
      - generic [ref=f1e49]: Mua vé
    - generic [ref=f1e52]:
      - generic [ref=f1e53]:
        - progressbar [ref=f1e54]
        - progressbar [ref=f1e58]
        - generic [ref=f1e61]: "9"
      - img "5 Stars"
    - generic [ref=f1e65]:
      - tablist [ref=f1e69]:
        - tab [selected] [ref=f1e70] [cursor=pointer]:
          - img "Galaxy Cinema" [ref=f1e73]
      - tabpanel [ref=f1e76]:
        - generic [ref=f1e78]:
          - heading "GLX - Nguyễn Văn Quá" [level=3] [ref=f1e80]
          - link [ref=f1e83] [cursor=pointer]:
            - /url: /purchase/46577
            - paragraph [ref=f1e84]: 12-10-2023
            - paragraph [ref=f1e85]: ~
            - paragraph [ref=f1e86]: 10:51
```