# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\moviesearch.spec.ts >> Movie Search & Listing Feature >> D_26: Kiểm tra click vào hình poster hoặc nút 'Mua vé' trên thẻ phim
- Location: tests\ui\dashboard\moviesearch.spec.ts:10:7

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 20000ms.
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
  - generic [ref=e34]:
    - button [ref=e38] [cursor=pointer]:
      - img "video-button" [ref=e40]
    - generic [ref=e42]:
      - heading "08.08.2026" [level=4] [ref=e44]
      - heading "The Gentlemen Dangbk" [level=1] [ref=e46]
      - heading "120phút" [level=5] [ref=e48]
      - generic [ref=e49]: Mua vé
    - generic [ref=e52]:
      - generic [ref=e53]:
        - progressbar [ref=e54]
        - progressbar [ref=e58]
        - generic [ref=e61]: "10"
      - img "5 Stars"
    - generic [ref=e65]:
      - tablist [ref=e69]:
        - tab [selected] [ref=e70] [cursor=pointer]:
          - img "cgv" [ref=e73]
        - tab [ref=e74] [cursor=pointer]:
          - img "Galaxy Cinema" [ref=e77]
      - tabpanel [ref=e80]:
        - generic [ref=e82]:
          - heading "CGV - Golden Plaza" [level=3] [ref=e84]
          - link [ref=e87]:
            - /url: /purchase/46716
            - paragraph [ref=e88]: 07-12-2025
            - paragraph [ref=e89]: ~
            - paragraph [ref=e90]: 06:00
          - link [ref=e93]:
            - /url: /purchase/46717
            - paragraph [ref=e94]: 07-07-2026
            - paragraph [ref=e95]: ~
            - paragraph [ref=e96]: 20:00
```