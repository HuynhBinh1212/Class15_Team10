# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\moviesearch.spec.ts >> Movie Search & Listing Feature >> D_39: Xem danh sách phim ở trang thứ 2, chọn phim John Cena WWE và kiểm tra hình ảnh poster/trailer phim
- Location: tests\ui\dashboard\moviesearch.spec.ts:19:7

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: Đường link không tồn tại hoặc không thể truy cập! URL: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABvFBMVEUAAABPT08AAAAAAABFRUX////+/v5RUVFLS0s/Pz9NTU3///8KCgpKSkr5+fn+/v7////////////////////////8/Pz///////9paWlXV1eWlpYQEBD7+/v///+6uroqKirX19eVlZWIiIhQUFAfHx/////19fX39/f////////////////////////n5+fZ2dnj4+O4uLiNjY09PT3///////////////////////////+zs7P///8VFRX///9HR0cxMTH////////////p6en////n5+fb29vq6urU1NTAwMCnp6d5eXlxcXFzc3NeXl5qamoeHh5BQUE4ODj////8/Pzt7e3a2trQ0ND///////+9vb3Pz8/GxsacnJyYmJiUlJSmpqZ2dnb////////////+/v7x8fH09PT///+5ubnU1NSsrKyhoaGJiYmcnJxaWlqRkZE4ODj////x8fHn5+f////////U1NTIyMj///+/v7+1tbWJiYn///+fn5////9BQUEyMjJgYGD////////s7Ozc3NzJycna2tq/v7+GhoZCQkIWFhb///////////////////8kNpXEAAAAk3RSTlNrawBnaPz6a2pmagZraPP8KRY59PIM9M+ti22La/PMnWu3hoCAawLx6+aomoZZGsrJxq+dawT2xLaxo5yciW5ra2toXAre1tXOzcajl5SQi4V0c2trTfbc1MXBvrSvpqShm4x5ZE9A7Onj1Lewq6aaj4aDeDjezsm9sqygoJ+cl5J/enZvQyLj1MC7tIt7Z04kIw15AUOJAAAFPElEQVRYw6XZd3/SQBgH8NBcEgKEQJiitIW2tBXpslRrl917L23VWq177733Hr837KnVEAOXEJ//+X6eu+dy44GrYIY3GMj1xGONYUEIN8biPblA0Mv+BcfStK0H5wUYQjj/YEvzOgG9gT2VYQokbzWnjnVPPX061X0s1XwrKQDhyj0Bb5ng0HI8BPhHj56YT0gehRBZJkTxSIn5E0dH/UAovjxUBpjPrQHi+KMaRSYelyE8RCY1j8ZFYC2XtwtqnQL8remErhnCTeREutUPoVOzBTZlQ1hJ1RC3WdPzdJOa1ApC2SZrULsDtTmtEJdFECXdrOKOZgFmts6goUrRx8rIkihVDTizlWGBkSfA6nXZZTPk66vAk0hpMLgb6r2XxGU7yMt7KnYHS4Gv15GcVNyuMsKtTCax/ro4GLyLaJVp9ixnsiqKu8FiYGQ3og8V6pUpKg+j2B0pAmZpfgyPIdIcs2awD+okcbschJtMquj7FzwdxkVWPdiVuYjwaSPYFENrgnoOxUQrYk2FYKYLDSeJy3GQkw3oyhSAN0WxSveciFWiqOmgdz+a9fE6G3Uz9nv/gjkhmib/B5J0VMj9ASP7kCKe/+EkyaWksC+yDS6r/hriHKPjXVzq/zxXry7/BjNxtBKnmbkPtlfX7fJxHMcfRjzzCwyExLTbmdbeX7eL2w5+TgwFfoF7MJ7wMD8td7GBupcoVhi+Mez5CQ5VoltmeAdPXjdVjOZWTTVj8HtROUTBmyF2SeSrZ+4niGGoi7pWCNbWh25ScACjiocF7gRu18j6WBerfbpiEA9hoILzHsBR2cUERdCT0PV7IunMUa4E2IYDXi54XjhBLEGI7+dlml17ndnRwVl1JMgFhOi8xxoEVneSRZodKxb8QoA7hXMJlx0Qyfu9PMeOVeS4ZxiX7IHAWK2F2IIeLo6Uxy6Ihg2ORfJH0MnFcEyxDUJ9d4NngJcR4xrRTeyDwPAMXxp8jEYujKmyQKx8WCgJTiPMAVdllifJHwUY4xJfCpwBrEDp4K4dRtC/0csxQKsht+/ijeDoDp5jDpldlCUfZwBXLtHFzSwKe9n0+zgD+GaaZ67DDcQYC1ty0X2qEBQmTIvQvLBZn141xxWCDZs+6ll+evrmYPYM4Fv6IVvFMAYN25fJ08GoXg2L7Ss4QjfYEp4ODs/q1WBvsCWOAKnfp4O0Gi8MHPMI+HlImQ/edh+ng+eumKrBOKQqNPMxKi0WbvUvPrE44zGq6Qe98fu1A5Q66OlV5LbxKuKuc8DpV5GKQIfxsiRVO/L4a2JH4BeYN17npCWfM5Be5/LFLpysCWSXRP1ScCXWrzd1nDPwAr0SF7m0S/0OvbmkMGh6VrBXDBts0Z8VNLTth4/zAW+KolbkaSa1O/RunEVX3vx4lNwOB+ybQKypyPPW47QibQifLvYAlx0u6Q3R/ACvyGSRnOKdbQpJZDNFmxj+47wD77i/eBOjIrgO/16+/Pz8WA8WbwR9W2PkyMhv7SujVSW2+fgyOF+byGhV0XnMAhPPedve8wkg+53V7sv3hXF2k+dtcfzmWYT78hYNyVeVUFvmKGnJzbWoqHxlo2Xa1YHkhVpKMrnaC0l0dDXZa+ruF1B/+FovNUtovdcO10PYr9ltO3sH9wHi2N5a3mzyNLm9YyKwb9BbRmM8cireAdQfaptd8FFkO+i2sjDbdqge6Iifijho3YcA1T/ccuTylemZmekrl4+0DPtVIFRm6143tYEDI/gnRg4MMP9csP77Y7CnM9YYAkKNsc6eQcu/P34ANod6sZ/pavoAAAAASUVORK5CYII=

expect(received).toBeTruthy()

Received: false
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

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { expect } from "../fixtures/page-fixture";
  3  | 
  4  | export async function verifyImages(page: Page, images: Locator) {
  5  |   const count = await images.count();
  6  |   expect(count).toBeGreaterThan(0);
  7  | 
  8  |   for (let i = 0; i < count; i++) {
  9  |     const img = images.nth(i);
  10 |     await expect(img).toBeVisible();
  11 | 
  12 |     // Lấy URL của thuộc tính src
  13 |     const src = await img.getAttribute('src');
  14 |     expect(src, "Hình ảnh bị thiếu thuộc tính src").toBeTruthy();
  15 | 
  16 |     if (src) {
  17 |       console.log(`Đang kiểm tra ảnh: ${src}`);
  18 |       
  19 |       // Kiểm tra thuộc tính src xem có chứa chuỗi lỗi do render sai dữ liệu không
  20 |       expect(src).not.toContain("undefined");
  21 |       expect(src).not.toContain("null");
  22 |       expect(src.toLowerCase()).not.toContain("error");
  23 |       
  24 |       // Lấy URL tuyệt đối dựa trên URL hiện tại của trang
  25 |       const url = new URL(src, page.url()).toString();
  26 |       
  27 |       // Gửi request tới URL để kiểm tra (chạy ngầm)
  28 |       let response;
  29 |       try {
  30 |         response = await page.request.get(url);
  31 |       } catch (error) {
  32 |         // Bắt lỗi nếu đường link chết (VD: ENOTFOUND do tên miền không tồn tại)
> 33 |         expect(false, `Đường link không tồn tại hoặc không thể truy cập! URL: ${url}`).toBeTruthy();
     |                                                                                        ^ Error: Đường link không tồn tại hoặc không thể truy cập! URL: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABvFBMVEUAAABPT08AAAAAAABFRUX////+/v5RUVFLS0s/Pz9NTU3///8KCgpKSkr5+fn+/v7////////////////////////8/Pz///////9paWlXV1eWlpYQEBD7+/v///+6uroqKirX19eVlZWIiIhQUFAfHx/////19fX39/f////////////////////////n5+fZ2dnj4+O4uLiNjY09PT3///////////////////////////+zs7P///8VFRX///9HR0cxMTH////////////p6en////n5+fb29vq6urU1NTAwMCnp6d5eXlxcXFzc3NeXl5qamoeHh5BQUE4ODj////8/Pzt7e3a2trQ0ND///////+9vb3Pz8/GxsacnJyYmJiUlJSmpqZ2dnb////////////+/v7x8fH09PT///+5ubnU1NSsrKyhoaGJiYmcnJxaWlqRkZE4ODj////x8fHn5+f////////U1NTIyMj///+/v7+1tbWJiYn///+fn5////9BQUEyMjJgYGD////////s7Ozc3NzJycna2tq/v7+GhoZCQkIWFhb///////////////////8kNpXEAAAAk3RSTlNrawBnaPz6a2pmagZraPP8KRY59PIM9M+ti22La/PMnWu3hoCAawLx6+aomoZZGsrJxq+dawT2xLaxo5yciW5ra2toXAre1tXOzcajl5SQi4V0c2trTfbc1MXBvrSvpqShm4x5ZE9A7Onj1Lewq6aaj4aDeDjezsm9sqygoJ+cl5J/enZvQyLj1MC7tIt7Z04kIw15AUOJAAAFPElEQVRYw6XZd3/SQBgH8NBcEgKEQJiitIW2tBXpslRrl917L23VWq177733Hr837KnVEAOXEJ//+X6eu+dy44GrYIY3GMj1xGONYUEIN8biPblA0Mv+BcfStK0H5wUYQjj/YEvzOgG9gT2VYQokbzWnjnVPPX061X0s1XwrKQDhyj0Bb5ng0HI8BPhHj56YT0gehRBZJkTxSIn5E0dH/UAovjxUBpjPrQHi+KMaRSYelyE8RCY1j8ZFYC2XtwtqnQL8remErhnCTeREutUPoVOzBTZlQ1hJ1RC3WdPzdJOa1ApC2SZrULsDtTmtEJdFECXdrOKOZgFmts6goUrRx8rIkihVDTizlWGBkSfA6nXZZTPk66vAk0hpMLgb6r2XxGU7yMt7KnYHS4Gv15GcVNyuMsKtTCax/ro4GLyLaJVp9ixnsiqKu8FiYGQ3og8V6pUpKg+j2B0pAmZpfgyPIdIcs2awD+okcbschJtMquj7FzwdxkVWPdiVuYjwaSPYFENrgnoOxUQrYk2FYKYLDSeJy3GQkw3oyhSAN0WxSveciFWiqOmgdz+a9fE6G3Uz9nv/gjkhmib/B5J0VMj9ASP7kCKe/+EkyaWksC+yDS6r/hriHKPjXVzq/zxXry7/BjNxtBKnmbkPtlfX7fJxHMcfRjzzCwyExLTbmdbeX7eL2w5+TgwFfoF7MJ7wMD8td7GBupcoVhi+Mez5CQ5VoltmeAdPXjdVjOZWTTVj8HtROUTBmyF2SeSrZ+4niGGoi7pWCNbWh25ScACjiocF7gRu18j6WBerfbpiEA9hoILzHsBR2cUERdCT0PV7IunMUa4E2IYDXi54XjhBLEGI7+dlml17ndnRwVl1JMgFhOi8xxoEVneSRZodKxb8QoA7hXMJlx0Qyfu9PMeOVeS4ZxiX7IHAWK2F2IIeLo6Uxy6Ihg2ORfJH0MnFcEyxDUJ9d4NngJcR4xrRTeyDwPAMXxp8jEYujKmyQKx8WCgJTiPMAVdllifJHwUY4xJfCpwBrEDp4K4dRtC/0csxQKsht+/ijeDoDp5jDpldlCUfZwBXLtHFzSwKe9n0+zgD+GaaZ67DDcQYC1ty0X2qEBQmTIvQvLBZn141xxWCDZs+6ll+evrmYPYM4Fv6IVvFMAYN25fJ08GoXg2L7Ss4QjfYEp4ODs/q1WBvsCWOAKnfp4O0Gi8MHPMI+HlImQ/edh+ng+eumKrBOKQqNPMxKi0WbvUvPrE44zGq6Qe98fu1A5Q66OlV5LbxKuKuc8DpV5GKQIfxsiRVO/L4a2JH4BeYN17npCWfM5Be5/LFLpysCWSXRP1ScCXWrzd1nDPwAr0SF7m0S/0OvbmkMGh6VrBXDBts0Z8VNLTth4/zAW+KolbkaSa1O/RunEVX3vx4lNwOB+ybQKypyPPW47QibQifLvYAlx0u6Q3R/ACvyGSRnOKdbQpJZDNFmxj+47wD77i/eBOjIrgO/16+/Pz8WA8WbwR9W2PkyMhv7SujVSW2+fgyOF+byGhV0XnMAhPPedve8wkg+53V7sv3hXF2k+dtcfzmWYT78hYNyVeVUFvmKGnJzbWoqHxlo2Xa1YHkhVpKMrnaC0l0dDXZa+ruF1B/+FovNUtovdcO10PYr9ltO3sH9wHi2N5a3mzyNLm9YyKwb9BbRmM8cireAdQfaptd8FFkO+i2sjDbdqge6Iifijho3YcA1T/ccuTylemZmekrl4+0DPtVIFRm6143tYEDI/gnRg4MMP9csP77Y7CnM9YYAkKNsc6eQcu/P34ANod6sZ/pavoAAAAASUVORK5CYII=
  34 |         continue; // Dừng kiểm tra các bước tiếp theo cho ảnh này
  35 |       }
  36 |       
  37 |       // Mở URL trên một Tab mới để kiểm tra hiển thị thực tế
  38 |       const newTab = await page.context().newPage();
  39 |       await newTab.goto(url);
  40 |       await newTab.waitForTimeout(500); // Dừng nửa giây để bạn có thể nhìn thấy ảnh hiển thị
  41 |       await newTab.close(); // Đóng tab sau khi xem xong
  42 | 
  43 |       // Nếu URL trả về lỗi (như 404, 500), response.ok() sẽ là false
  44 |       expect(response.ok(), `Hình ảnh bị lỗi! URL [${url}] trả về mã trạng thái ${response.status()}`).toBeTruthy();
  45 |       
  46 |       // Kiểm tra Content-Type
  47 |       const headers = response.headers();
  48 |       const contentType = headers['content-type'] || '';
  49 |       expect(contentType.startsWith('image/'), `Hình ảnh bị lỗi cấu trúc! URL [${url}] trả về content-type là: ${contentType}`).toBeTruthy();
  50 |       
  51 |       // Lấy độ phân giải (chiều rộng, chiều cao)
  52 |       const { width, height } = await img.evaluate((image: HTMLImageElement) => ({
  53 |         width: image.naturalWidth,
  54 |         height: image.naturalHeight
  55 |       }));
  56 | 
  57 |       // Lấy dung lượng file (tính bằng KB)
  58 |       const contentLength = headers['content-length'];
  59 |       const sizeKB = contentLength ? (parseInt(contentLength) / 1024).toFixed(2) + " KB" : "Không xác định";
  60 | 
  61 |       console.log(`[SUCCESS] Hình ảnh hợp lệ!`);
  62 |       console.log(`  - Link ảnh (Ctrl + Click để xem): ${url}`);
  63 |       console.log(`  - Độ phân giải: ${width} x ${height} px`);
  64 |       console.log(`  - Dung lượng: ${sizeKB}`);
  65 |       console.log(`-------------------------------------------------`);
  66 |     }
  67 |   }
  68 | }
  69 | 
```