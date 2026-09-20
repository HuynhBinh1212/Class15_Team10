# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\dashboard.spec.ts >> Dashboard Feature >> Banner >> D_09: Kiểm tra slider banner hiển thị hình ảnh
- Location: tests\ui\dashboard\dashboard.spec.ts:11:9

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: Kiểm tra banner hiển thị

expect(locator).toBeVisible() failed

Locator:  locator('.slick-slider img, .carousel img, .jss81 img').first()
Expected: visible
Received: hidden
Timeout:  10000ms

Call log:
  - Kiểm tra banner hiển thị locator('.slick-slider img, .carousel img, .jss81 img').first() with timeout 10000ms
  - waiting for locator('.slick-slider img, .carousel img, .jss81 img').first()
    6 × locator resolved to <img class="jss198" alt="video-button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABvFBMVEUAAABPT08AAAAAAABFRUX////+/v5RUVFLS0s/Pz9NTU3///8KCgpKSkr5+fn+/v7////////////////////////8/Pz///////9paWlXV1eWlpYQEBD7+/v///+6uroqKirX19eVlZWIiIhQUFAfHx/////19fX39/f////////////////////////n5+fZ2dnj4+O4uLiNjY09PT3///////////////////////////+zs7P///8VFRX///9HR0cxMTH////////////p6en////n5+fb29vq6urU1NTAwMCnp6d5eXlxcXFzc3NeXl5qamoeHh5BQUE4ODj////8/Pzt7e3a2trQ0ND///////+9vb3Pz8/Gxsacn…/>
      - unexpected value "hidden"

```

```yaml
- banner:
  - img "Logo"
  - heading "Lịch Chiếu" [level=4]
  - heading "Cụm Rạp" [level=4]
  - heading "Tin Tức" [level=4]
  - heading "Ứng Dụng" [level=4]
  - link "Đăng Nhập":
    - /url: /sign-in
    - heading "Đăng Nhập" [level=3]
  - separator
  - link "Đăng Ký":
    - /url: /sign-up
    - heading "Đăng Ký" [level=3]
- img "Img alt"
- button "Next"
- button "Previous"
- button
- button
- button
- combobox:
  - option "Phim" [disabled] [selected]
  - option "The Gentlemen Dangbk"
  - option "Man of Steel"
  - option "AVATAR 2"
  - option "gái già lắm chiêu"
  - 'option "SPIDER-MAN: NO WAY HOME"'
  - option "doctor stranger 2"
  - option "Nhà Bà Nữ"
  - option "RỪNG SĂN NGƯỜI"
  - option "Captain Marvel 2"
  - option "iron man 4"
  - option "Thor 6"
  - option "CÔ GÁI TỪ QUÁ KHỨ"
  - option "BỖNG DƯNG TRÚNG SỐ"
  - option "John Cena WWE"
  - option "HÀNH TRÌNH CỦA MOANA 2"
  - option "Địa đạo"
  - option "########################################################################3333"
- combobox:
  - option "Rạp" [disabled] [selected]
- combobox:
  - option "Ngày giờ chiếu" [disabled] [selected]
- button "MUA VÉ NGAY"
- link "C18 The Gentlemen Dangbk Quý ông thế giới ngầm là một bộ phim phim hành động hài Anh-Mỹ năm 2019 biên soạn, đạo diễn và sản xuất bởi Guy Ritchie, từ một câu chuyện của Ivan Atkinson, Marn Davies, và Ritchie":
  - /url: /detail/8898
  - text: C18 The Gentlemen Dangbk
  - heading "Quý ông thế giới ngầm là một bộ phim phim hành động hài Anh-Mỹ năm 2019 biên soạn, đạo diễn và sản xuất bởi Guy Ritchie, từ một câu chuyện của Ivan Atkinson, Marn Davies, và Ritchie" [level=4]
- link "C18 Man of Steel Bộ phim xoay quanh Clark Kent, trong Man Of Steel, chàng trai từ Krypton được gửi đến Trái Đất do hành tinh của anh bị tấn công và hủy diệt. Phim Man Of Steel kể từ lúc Clark Kent còn nhỏ cho đến lúc trưởng anh, anh được một cặp vợ chồng tốt bụng nhận nuôi và càng lớn Clark Kent càng nhận thức được sức mạnh sẵn có trong người mình. Cho đến một ngày kẻ thù ngày xưa đã tàn phá hành tinh của anh tìm đến để hủy diệt trái đất, anh phải đứng ra bảo vệ trái đất nơi mình đã lớn lên.":
  - /url: /detail/9387
  - text: C18 Man of Steel
  - heading "Bộ phim xoay quanh Clark Kent, trong Man Of Steel, chàng trai từ Krypton được gửi đến Trái Đất do hành tinh của anh bị tấn công và hủy diệt. Phim Man Of Steel kể từ lúc Clark Kent còn nhỏ cho đến lúc trưởng anh, anh được một cặp vợ chồng tốt bụng nhận nuôi và càng lớn Clark Kent càng nhận thức được sức mạnh sẵn có trong người mình. Cho đến một ngày kẻ thù ngày xưa đã tàn phá hành tinh của anh tìm đến để hủy diệt trái đất, anh phải đứng ra bảo vệ trái đất nơi mình đã lớn lên." [level=4]
- link "C18 AVATAR 2 Khi tất cả những người thù địch trong Avatar – Pandora đều đã bị trục xuất khỏi Pandora. Hòa bình lại được trở lại nhưng những người thổ dân này lại bị đe dọa và bị thuộc địa hóa. Jake Sully (Sam Worrthington) đã trở thành một trong số bọn họ. Khi anh biết nhà mới của mình đã từng là nơi ở của những kẻ phải ra đi thì anh vẫn luôn cảnh giác. Các khu rừng nhiệt đới vẫn còn rất nhiều điều bất ngờ, ngay cả độ sâu của đại dương Pandora cũng là một nơi mà hoàn toàn không ai biết cả.":
  - /url: /detail/9390
  - text: C18 AVATAR 2
  - heading "Khi tất cả những người thù địch trong Avatar – Pandora đều đã bị trục xuất khỏi Pandora. Hòa bình lại được trở lại nhưng những người thổ dân này lại bị đe dọa và bị thuộc địa hóa. Jake Sully (Sam Worrthington) đã trở thành một trong số bọn họ. Khi anh biết nhà mới của mình đã từng là nơi ở của những kẻ phải ra đi thì anh vẫn luôn cảnh giác. Các khu rừng nhiệt đới vẫn còn rất nhiều điều bất ngờ, ngay cả độ sâu của đại dương Pandora cũng là một nơi mà hoàn toàn không ai biết cả." [level=4]
- link "C18 gái già lắm chiêu Cuộc chiến “Chị - Em máu mủ tình thâm” chỉ vì hai chữ TÌNH- TIỀN của ba chị em gái Lý gia tại Biệt thự Bạch Trà Viên xứ Huế. Chính vì vòng xoáy “tình – tiền, được – mất” đã khiến họ từ chị em trở thành những kẻ đối đầu trong mối quan hệ tình thân. Câu chuyện bắt đầu vào đêm đấu giá phiên Xuân tại Bạch Trà Viên, Phượng bào tam vĩ - cổ vật 30 triệu đô, bảo vật của Lý gia bị mất cắp. Khiến ba chị em bắt đầu nghi kỵ lẫn nhau đồng thời phơi bày nhiều bí mật động trời tưởng chừng đã được che giấu suốt cả một đời.":
  - /url: /detail/9913
  - text: C18 gái già lắm chiêu
  - heading "Cuộc chiến “Chị - Em máu mủ tình thâm” chỉ vì hai chữ TÌNH- TIỀN của ba chị em gái Lý gia tại Biệt thự Bạch Trà Viên xứ Huế. Chính vì vòng xoáy “tình – tiền, được – mất” đã khiến họ từ chị em trở thành những kẻ đối đầu trong mối quan hệ tình thân. Câu chuyện bắt đầu vào đêm đấu giá phiên Xuân tại Bạch Trà Viên, Phượng bào tam vĩ - cổ vật 30 triệu đô, bảo vật của Lý gia bị mất cắp. Khiến ba chị em bắt đầu nghi kỵ lẫn nhau đồng thời phơi bày nhiều bí mật động trời tưởng chừng đã được che giấu suốt cả một đời." [level=4]
- 'link "C18 SPIDER-MAN: NO WAY HOME Bị lộ mặt và trở thành kẻ thù quốc dân, Peter Parker tìm đến Dr Strange để nhờ thực hiện câu thần chú, khiến mọi người quên đi việc cậu là Spider-Man. Thế nhưng, quá trình thực hiện xảy ra sự cố. Đa vũ trụ hình thành. Những kẻ thù ở các vũ trụ trước đây của Người Nhện lần lượt xuất hiện. Phải chống lại Green Goblin, Doc Ock, Electro, Sandman và Lizard…, làm thế nào Nhện nhí có thể bảo vệ được người thân và bạn bè?"':
  - /url: /detail/9954
  - text: "C18 SPIDER-MAN: NO WAY HOME"
  - heading "Bị lộ mặt và trở thành kẻ thù quốc dân, Peter Parker tìm đến Dr Strange để nhờ thực hiện câu thần chú, khiến mọi người quên đi việc cậu là Spider-Man. Thế nhưng, quá trình thực hiện xảy ra sự cố. Đa vũ trụ hình thành. Những kẻ thù ở các vũ trụ trước đây của Người Nhện lần lượt xuất hiện. Phải chống lại Green Goblin, Doc Ock, Electro, Sandman và Lizard…, làm thế nào Nhện nhí có thể bảo vệ được người thân và bạn bè?" [level=4]
- link "C18 doctor stranger 2 Phù thủy tối thượng trong Đa Vũ trụ hỗn loạn là một bộ phim siêu anh hùng năm 2022 của Mỹ dựa trên nhân vật Dr. Stephen Strange của Marvel Comics, do Marvel Studios sản xuất và được phân phối bởi Walt Disney Studios Motion Pictures":
  - /url: /detail/10426
  - text: C18 doctor stranger 2
  - heading "Phù thủy tối thượng trong Đa Vũ trụ hỗn loạn là một bộ phim siêu anh hùng năm 2022 của Mỹ dựa trên nhân vật Dr. Stephen Strange của Marvel Comics, do Marvel Studios sản xuất và được phân phối bởi Walt Disney Studios Motion Pictures" [level=4]
- link "C18 Nhà Bà Nữ Ông Thái là một cảnh sát về hưu nhưng không chịu an phận thủ thường, hàng ngày vẫn đi tìm bắt tội phạm vặt trong xóm cho đỡ nhớ nghề. Một ngày kia, Hoàng - tên trùm ma túy mới ra tù bỗng dưng chuyển đến xóm ông và mở một văn phòng bất động sản. Nghi ngờ đây là nơi làm ăn phi pháp, ông Thái quyết định âm thầm điều tra. Ông mua lại tiệm cơm tấm đối diện trụ sở của Hoàng để làm nơi theo dõi, đồng thời thu nạp Thu - Phú - Vinh - Mèo, đám thanh niên “bất hảo” trong xóm về quán hỗ trợ buôn bán để rảnh tay \"phá án\". Trớ trêu thay, tiệm cơm bất ngờ nổi tiếng và ăn nên làm ra, khiến cho \"chuyên án đặc biệt\" của ông đứng trước nguy cơ đổ bể.":
  - /url: /detail/10531
  - text: C18 Nhà Bà Nữ
  - heading "Ông Thái là một cảnh sát về hưu nhưng không chịu an phận thủ thường, hàng ngày vẫn đi tìm bắt tội phạm vặt trong xóm cho đỡ nhớ nghề. Một ngày kia, Hoàng - tên trùm ma túy mới ra tù bỗng dưng chuyển đến xóm ông và mở một văn phòng bất động sản. Nghi ngờ đây là nơi làm ăn phi pháp, ông Thái quyết định âm thầm điều tra. Ông mua lại tiệm cơm tấm đối diện trụ sở của Hoàng để làm nơi theo dõi, đồng thời thu nạp Thu - Phú - Vinh - Mèo, đám thanh niên “bất hảo” trong xóm về quán hỗ trợ buôn bán để rảnh tay \"phá án\". Trớ trêu thay, tiệm cơm bất ngờ nổi tiếng và ăn nên làm ra, khiến cho \"chuyên án đặc biệt\" của ông đứng trước nguy cơ đổ bể." [level=4]
- link "C18 RỪNG SĂN NGƯỜI Một biệt đội được phái vào rừng sâu để tìm tài liệu tuyệt mật và những người đồng đội mất tích. Nhưng mọi thứ không đơn giản như thế, họ đã tiến vào một vùng đất chất, nơi quỷ dữ thống trị và điều khiển mọi thứ. Đặc biệt, phim có sự góp mặt của Mickey Rourke, phản diện chính từ Iron Man 2.":
  - /url: /detail/10614
  - text: C18 RỪNG SĂN NGƯỜI
  - heading "Một biệt đội được phái vào rừng sâu để tìm tài liệu tuyệt mật và những người đồng đội mất tích. Nhưng mọi thứ không đơn giản như thế, họ đã tiến vào một vùng đất chất, nơi quỷ dữ thống trị và điều khiển mọi thứ. Đặc biệt, phim có sự góp mặt của Mickey Rourke, phản diện chính từ Iron Man 2." [level=4]
- button
- button
- button
- tablist:
  - tab "bhd-star-cineplex" [selected]:
    - img "bhd-star-cineplex"
  - tab "cgv":
    - img "cgv"
  - tab "cinestar":
    - img "cinestar"
  - tab "galaxy-cinema":
    - img "galaxy-cinema"
  - tab "lotte-cinema":
    - img "lotte-cinema"
  - tab "megags":
    - img "megags"
- tabpanel:
  - tablist:
    - tab "BHD Star Cineplex - Phạm Hùng L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh [chi tiết]" [selected]:
      - heading "BHD Star Cineplex - Phạm Hùng" [level=4]
      - heading "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh" [level=6]
      - link "[chi tiết]":
        - /url: /
    - tab "BHD Star Cineplex - 3/2 L5-Vincom 3/2, 3C Đường 3/2, Q.10 [chi tiết]":
      - heading "BHD Star Cineplex - 3/2" [level=4]
      - heading "L5-Vincom 3/2, 3C Đường 3/2, Q.10" [level=6]
      - link "[chi tiết]":
        - /url: /
    - tab "BHD Star Cineplex - Bitexco L3-Bitexco Icon 68, 2 Hải Triều, Q.1 [chi tiết]":
      - heading "BHD Star Cineplex - Bitexco" [level=4]
      - heading "L3-Bitexco Icon 68, 2 Hải Triều, Q.1" [level=6]
      - link "[chi tiết]":
        - /url: /
    - tab "BHD Star Cineplex - Vincom Quang Trung B1-Vincom QT, 190 Quang Trung, Gò Vấp [chi tiết]":
      - heading "BHD Star Cineplex - Vincom Quang Trung" [level=4]
      - heading "B1-Vincom QT, 190 Quang Trung, Gò Vấp" [level=6]
      - link "[chi tiết]":
        - /url: /
    - tab "BHD Star Cineplex - Vincom Lê Văn Việt L4-Vincom Plaza, 50 Lê Văn Việt, Q.9 [chi tiết]":
      - heading "BHD Star Cineplex - Vincom Lê Văn Việt" [level=4]
      - heading "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9" [level=6]
      - link "[chi tiết]":
        - /url: /
    - tab "BHD Star Cineplex - Vincom Thảo Điền L5-Megamall, 159 XL Hà Nội, Q.2 [chi tiết]":
      - heading "BHD Star Cineplex - Vincom Thảo Điền" [level=4]
      - heading "L5-Megamall, 159 XL Hà Nội, Q.2" [level=6]
      - link "[chi tiết]":
        - /url: /
- tabpanel:
  - img "John Wick"
  - heading "C18 John Wick" [level=2]
  - link "01-01-2019 ~ 10:10":
    - /url: /purchase/16531
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "10:10" [level=3]
  - link "01-01-2019 ~ 12:10":
    - /url: /purchase/16532
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "12:10" [level=3]
  - link "01-01-2019 ~ 14:10":
    - /url: /purchase/16533
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "14:10" [level=3]
  - link "01-01-2019 ~ 16:10":
    - /url: /purchase/16534
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "16:10" [level=3]
  - img "Siêu Thú Cuồng Nộ"
  - heading "C18 Siêu Thú Cuồng Nộ" [level=2]
  - link "09-07-2021 ~ 08:00":
    - /url: /purchase/43540
    - paragraph: 09-07-2021
    - paragraph: ~
    - heading "08:00" [level=3]
  - link "05-08-2021 ~ 18:26":
    - /url: /purchase/43997
    - paragraph: 05-08-2021
    - paragraph: ~
    - heading "18:26" [level=3]
  - link "16-03-2021 ~ 14:00":
    - /url: /purchase/42128
    - paragraph: 16-03-2021
    - paragraph: ~
    - heading "14:00" [level=3]
  - link "13-12-2021 ~ 01:00":
    - /url: /purchase/42140
    - paragraph: 13-12-2021
    - paragraph: ~
    - heading "01:00" [level=3]
  - img "Cá mập siêu bạo chúa"
  - heading "C18 Cá mập siêu bạo chúa" [level=2]
  - link "27-01-2021 ~ 12:25":
    - /url: /purchase/41656
    - paragraph: 27-01-2021
    - paragraph: ~
    - heading "12:25" [level=3]
  - img "Raya"
  - heading "C18 Raya" [level=2]
  - link "13-12-2000 ~ 20:00":
    - /url: /purchase/42102
    - paragraph: 13-12-2000
    - paragraph: ~
    - heading "20:00" [level=3]
  - link "12-12-2000 ~ 20:00":
    - /url: /purchase/42103
    - paragraph: 12-12-2000
    - paragraph: ~
    - heading "20:00" [level=3]
  - link "07-03-2022 ~ 22:30":
    - /url: /purchase/45521
    - paragraph: 07-03-2022
    - paragraph: ~
    - heading "22:30" [level=3]
  - img "Jurassic World"
  - heading "C18 Jurassic World" [level=2]
  - link "10-01-2019 ~ 10:40":
    - /url: /purchase/43156
    - paragraph: 10-01-2019
    - paragraph: ~
    - heading "10:40" [level=3]
  - img "Fantastic Four 4"
  - heading "C18 Fantastic Four 4" [level=2]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43644
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - 'img "Avengers: Infiniti"'
  - 'heading "C18 Avengers: Infiniti" [level=2]'
  - link "11-03-2022 ~ 13:30":
    - /url: /purchase/43576
    - paragraph: 11-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - img "Ghost Stories"
  - heading "C18 Ghost Stories" [level=2]
  - link "10-03-2022 ~ 13:30":
    - /url: /purchase/43577
    - paragraph: 10-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - img "ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM"
  - heading "C18 ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM" [level=2]
  - link "10-04-2020 ~ 08:00":
    - /url: /purchase/40318
    - paragraph: 10-04-2020
    - paragraph: ~
    - heading "08:00" [level=3]
  - link "01-01-2019 ~ 15:45":
    - /url: /purchase/40499
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "15:45" [level=3]
  - link "09-03-2022 ~ 13:30":
    - /url: /purchase/43578
    - paragraph: 09-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "01-01-2019 ~ 10:00":
    - /url: /purchase/43940
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "10:00" [level=3]
  - img "Goá Phụ Đen"
  - heading "C18 Goá Phụ Đen" [level=2]
  - link "21-05-2020 ~ 01:05":
    - /url: /purchase/40377
    - paragraph: 21-05-2020
    - paragraph: ~
    - heading "01:05" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43709
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - link "01-01-2019 ~ 21:00":
    - /url: /purchase/43312
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "21:00" [level=3]
  - link "01-01-2019 ~ 21:50":
    - /url: /purchase/43313
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "21:50" [level=3]
  - img "Bloodshot (C18)"
  - heading "C18 Bloodshot (C18)" [level=2]
  - link "04-03-2022 ~ 13:30":
    - /url: /purchase/43585
    - paragraph: 04-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43632
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Nắng 3"
  - heading "C18 Nắng 3" [level=2]
  - link "08-03-2022 ~ 13:30":
    - /url: /purchase/43579
    - paragraph: 08-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - img "Sát Thủ Vô Cùng Cực"
  - heading "C18 Sát Thủ Vô Cùng Cực" [level=2]
  - link "05-02-2022 ~ 13:30":
    - /url: /purchase/43594
    - paragraph: 05-02-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43692
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "The King's Man"
  - heading "C18 The King's Man" [level=2]
  - link "01-02-2022 ~ 13:30":
    - /url: /purchase/43590
    - paragraph: 01-02-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43668
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Candyman"
  - heading "C18 Candyman" [level=2]
  - link "05-03-2022 ~ 13:30":
    - /url: /purchase/43584
    - paragraph: 05-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43626
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Tenet"
  - heading "C18 Tenet" [level=2]
  - link "03-03-2022 ~ 13:30":
    - /url: /purchase/43586
    - paragraph: 03-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43638
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Kẻ Trực Đêm II"
  - heading "C18 Kẻ Trực Đêm II" [level=2]
  - link "06-02-2022 ~ 13:30":
    - /url: /purchase/43595
    - paragraph: 06-02-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43698
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "King Kong"
  - heading "C18 King Kong" [level=2]
  - link "01-02-2022 ~ 13:30":
    - /url: /purchase/43591
    - paragraph: 01-02-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43674
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Fast And Furious 9"
  - heading "C18 Fast And Furious 9" [level=2]
  - link "01-01-2019 ~ 20:10":
    - /url: /purchase/43311
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "20:10" [level=3]
  - link "01-01-2019 ~ 19:10":
    - /url: /purchase/43316
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "19:10" [level=3]
  - link "01-01-2019 ~ 20:30":
    - /url: /purchase/43317
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "20:30" [level=3]
  - link "01-01-2019 ~ 21:00":
    - /url: /purchase/43318
    - paragraph: 01-01-2019
    - paragraph: ~
    - heading "21:00" [level=3]
  - img "Vagabond2"
  - heading "C18 Vagabond2" [level=2]
  - link "05-02-2022 ~ 13:30":
    - /url: /purchase/43593
    - paragraph: 05-02-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43686
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Kẻ đào tẩu giấc mơ"
  - heading "C18 Kẻ đào tẩu giấc mơ" [level=2]
  - link "02-03-2022 ~ 13:30":
    - /url: /purchase/43588
    - paragraph: 02-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43656
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Sói 100%"
  - heading "C18 Sói 100%" [level=2]
  - link "09-03-2022 ~ 13:30":
    - /url: /purchase/43580
    - paragraph: 09-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - img "Survive The Night"
  - heading "C18 Survive The Night" [level=2]
  - link "01-03-2022 ~ 13:30":
    - /url: /purchase/43589
    - paragraph: 01-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43662
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Scoob!"
  - heading "C18 Scoob!" [level=2]
  - link "13-12-2000 ~ 20:00":
    - /url: /purchase/42107
    - paragraph: 13-12-2000
    - paragraph: ~
    - heading "20:00" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43609
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - link "21-12-2021 ~ 09:00":
    - /url: /purchase/43614
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "09:00" [level=3]
  - img "Tiếng Gọi Nơi Hoang Dã"
  - heading "C18 Tiếng Gọi Nơi Hoang Dã" [level=2]
  - link "02-11-2020 ~ 15:25":
    - /url: /purchase/42272
    - paragraph: 02-11-2020
    - paragraph: ~
    - heading "15:25" [level=3]
  - link "02-03-2022 ~ 13:30":
    - /url: /purchase/43587
    - paragraph: 02-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43650
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Downtown Abbeyjhjj"
  - heading "C18 Downtown Abbeyjhjj" [level=2]
  - link "02-08-2020 ~ 12:50":
    - /url: /purchase/40412
    - paragraph: 02-08-2020
    - paragraph: ~
    - heading "12:50" [level=3]
  - link "17-08-2020 ~ 07:15":
    - /url: /purchase/40426
    - paragraph: 17-08-2020
    - paragraph: ~
    - heading "07:15" [level=3]
  - link "17-08-2020 ~ 12:30":
    - /url: /purchase/40427
    - paragraph: 17-08-2020
    - paragraph: ~
    - heading "12:30" [level=3]
  - link "17-08-2020 ~ 12:30":
    - /url: /purchase/40428
    - paragraph: 17-08-2020
    - paragraph: ~
    - heading "12:30" [level=3]
  - img "Southpaw"
  - heading "C18 Southpaw" [level=2]
  - link "07-03-2022 ~ 13:30":
    - /url: /purchase/43582
    - paragraph: 07-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - img "Bad boy (2022)"
  - heading "C18 Bad boy (2022)" [level=2]
  - link "06-08-2020 ~ 09:10":
    - /url: /purchase/40424
    - paragraph: 06-08-2020
    - paragraph: ~
    - heading "09:10" [level=3]
  - img "Dự Án Siêu Năng Lực (2021)"
  - heading "C18 Dự Án Siêu Năng Lực (2021)" [level=2]
  - link "05-08-2020 ~ 10:15":
    - /url: /purchase/40439
    - paragraph: 05-08-2020
    - paragraph: ~
    - heading "10:15" [level=3]
  - link "06-03-2022 ~ 13:30":
    - /url: /purchase/43583
    - paragraph: 06-03-2022
    - paragraph: ~
    - heading "13:30" [level=3]
  - link "21-12-2021 ~ 12:00":
    - /url: /purchase/43620
    - paragraph: 21-12-2021
    - paragraph: ~
    - heading "12:00" [level=3]
  - img "Holly Slept Over"
  - heading "C18 Holly Slept Over" [level=2]
  - link "15-10-2020 ~ 20:00":
    - /url: /purchase/40551
    - paragraph: 15-10-2020
    - paragraph: ~
    - heading "20:00" [level=3]
  - 'img "Ối Trời Ơi: Chuyến Phiêu Lưu Đầy ''Thú'' Vị"'
  - 'heading "C18 Ối Trời Ơi: Chuyến Phiêu Lưu Đầy ''Thú'' Vị" [level=2]'
  - link "14-10-2020 ~ 19:00":
    - /url: /purchase/43075
    - paragraph: 14-10-2020
    - paragraph: ~
    - heading "19:00" [level=3]
  - 'img "Lật Mặt 5: 48H"'
  - 'heading "C18 Lật Mặt 5: 48H" [level=2]'
  - link "26-08-2021 ~ 15:57":
    - /url: /purchase/44186
    - paragraph: 26-08-2021
    - paragraph: ~
    - heading "15:57" [level=3]
  - img "Breaking Bad"
  - heading "C18 Breaking Bad" [level=2]
  - link "29-09-2021 ~ 12:59":
    - /url: /purchase/44907
    - paragraph: 29-09-2021
    - paragraph: ~
    - heading "12:59" [level=3]
  - img "Hannibal Lector"
  - heading "C18 Hannibal Lector" [level=2]
  - link "29-09-2021 ~ 12:57":
    - /url: /purchase/44901
    - paragraph: 29-09-2021
    - paragraph: ~
    - heading "12:57" [level=3]
  - img "Lucifer"
  - heading "C18 Lucifer" [level=2]
  - link "29-09-2021 ~ 11:30":
    - /url: /purchase/44892
    - paragraph: 29-09-2021
    - paragraph: ~
    - heading "11:30" [level=3]
  - img "World War Z"
  - heading "C18 World War Z" [level=2]
  - link "29-09-2021 ~ 01:10":
    - /url: /purchase/44917
    - paragraph: 29-09-2021
    - paragraph: ~
    - heading "01:10" [level=3]
  - img "Game of Thrones"
  - heading "C18 Game of Thrones" [level=2]
  - link "29-09-2021 ~ 01:11":
    - /url: /purchase/44920
    - paragraph: 29-09-2021
    - paragraph: ~
    - heading "01:11" [level=3]
  - img "Sherlock Holmes"
  - heading "C18 Sherlock Holmes" [level=2]
  - link "29-09-2021 ~ 01:16":
    - /url: /purchase/44927
    - paragraph: 29-09-2021
    - paragraph: ~
    - heading "01:16" [level=3]
  - img "Aquamannnnnn"
  - heading "C18 Aquamannnnnn" [level=2]
  - link "01-10-2021 ~ 08:46":
    - /url: /purchase/45057
    - paragraph: 01-10-2021
    - paragraph: ~
    - heading "08:46" [level=3]
  - link "17-10-2021 ~ 08:47":
    - /url: /purchase/45058
    - paragraph: 17-10-2021
    - paragraph: ~
    - heading "08:47" [level=3]
  - img "AVATAR 2"
  - heading "C18 AVATAR 2" [level=2]
  - link "17-10-2021 ~ 08:43":
    - /url: /purchase/45056
    - paragraph: 17-10-2021
    - paragraph: ~
    - heading "08:43" [level=3]
  - link "18-10-2021 ~ 01:00":
    - /url: /purchase/45061
    - paragraph: 18-10-2021
    - paragraph: ~
    - heading "01:00" [level=3]
  - img "MORBIUS"
  - heading "C18 MORBIUS" [level=2]
  - link "29-03-2022 ~ 09:03":
    - /url: /purchase/45578
    - paragraph: 29-03-2022
    - paragraph: ~
    - heading "09:03" [level=3]
  - img "ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM"
  - heading "C18 ÁN MẠNG LIÊN HOÀN LÚC NỬA ĐÊM" [level=2]
  - link "29-04-2022 ~ 16:35":
    - /url: /purchase/45662
    - paragraph: 29-04-2022
    - paragraph: ~
    - heading "16:35" [level=3]
  - img "Terrifier 3"
  - heading "C18 Terrifier 3" [level=2]
  - link "29-09-2022 ~ 02:00":
    - /url: /purchase/46085
    - paragraph: 29-09-2022
    - paragraph: ~
    - heading "02:00" [level=3]
  - link "28-10-2022 ~ 16:02":
    - /url: /purchase/46229
    - paragraph: 28-10-2022
    - paragraph: ~
    - heading "16:02" [level=3]
  - img "Nhà Bà Nữ"
  - heading "C18 Nhà Bà Nữ" [level=2]
  - link "03-11-2022 ~ 20:14":
    - /url: /purchase/46260
    - paragraph: 03-11-2022
    - paragraph: ~
    - heading "20:14" [level=3]
  - img "black Adam"
  - heading "C18 black Adam" [level=2]
  - link "25-10-2022 ~ 21:49":
    - /url: /purchase/46214
    - paragraph: 25-10-2022
    - paragraph: ~
    - heading "21:49" [level=3]
  - img "BỖNG DƯNG TRÚNG SỐ"
  - heading "C18 BỖNG DƯNG TRÚNG SỐ" [level=2]
  - link "29-03-2023 ~ 00:00":
    - /url: /purchase/46421
    - paragraph: 29-03-2023
    - paragraph: ~
    - heading "00:00" [level=3]
- tablist:
  - tab "Điện Ảnh 24h" [selected]
  - tab "Review"
  - tab "Khuyến mãi"
- tabpanel
- button "XEM THÊM"
- paragraph: Ứng dụng tiện lợi dành cho
- paragraph: người yêu điện ảnh
- paragraph: Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
- link "App miễn phí - Tải về ngay!":
  - /url: https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197
- paragraph:
  - text: TIX có hai phiên bản
  - link "IOS":
    - /url: https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197
  - text: "&"
  - link "Android":
    - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
- img "phone"
- img "slider"
- contentinfo:
  - paragraph:
    - heading "TIX" [level=6]
    - text: FAQ Thỏa thuận sử dụng Brand Guidelines Chính sách bảo mật
  - paragraph:
    - heading "ĐỐI TÁC" [level=6]
    - link "cgvlogo":
      - /url: https://www.cgv.vn/
      - img "cgvlogo"
    - link "bhdlogo":
      - /url: https://www.bhdstar.vn/
      - img "bhdlogo"
    - link "galaxylogo":
      - /url: https://www.galaxycine.vn/
      - img "galaxylogo"
    - link "starlogo":
      - /url: http://cinestar.com.vn/
      - img "starlogo"
    - link "lottelogo":
      - /url: http://lottecinemavn.com/LCHS/index.aspx
      - img "lottelogo"
    - link "megalogo":
      - /url: https://www.megagscinemas.vn/
      - img "megalogo"
    - link "betalogo":
      - /url: https://www.betacinemas.vn/home.htm
      - img "betalogo"
    - link "ddclogo":
      - /url: http://ddcinema.vn/
      - img "ddclogo"
    - link "touchlogo":
      - /url: https://touchcinema.com/
      - img "touchlogo"
    - link "cinemaxlogo":
      - /url: https://cinemaxvn.com/
      - img "cinemaxlogo"
    - link "starlightlogo":
      - /url: https://starlight.vn/
      - img "starlightlogo"
    - link "dcinelogo":
      - /url: https://www.dcine.vn/
      - img "dcinelogo"
    - link "zalologo":
      - /url: https://zalopay.vn/
      - img "zalologo"
    - link "payoologo":
      - /url: https://www.payoo.vn/
      - img "payoologo"
    - link "vietcombanklogo":
      - /url: https://portal.vietcombank.com.vn/Pages/Home.aspx
      - img "vietcombanklogo"
    - link "agribanklogo":
      - /url: https://www.payoo.vn/
      - img "agribanklogo"
    - link "viettinbanklogo":
      - /url: https://www.vietinbank.vn/web/home/vn/index.html
      - img "viettinbanklogo"
    - link "ivblogo":
      - /url: https://www.indovinabank.com.vn/
      - img "ivblogo"
    - link "bachamlogo":
      - /url: https://webv3.123go.vn/
      - img "bachamlogo"
    - link "labanlogo":
      - /url: https://laban.vn/
      - img "labanlogo"
  - paragraph:
    - heading "MOBILE APP" [level=6]
    - link:
      - /url: https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197
    - link:
      - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
  - paragraph:
    - heading "SOCIAL" [level=6]
    - link:
      - /url: https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197
    - link:
      - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
  - separator
  - paragraph:
    - heading "TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION" [level=6]
    - 'heading "Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam." [level=6]'
    - 'heading "Giấy chứng nhận đăng ký kinh doanh số: 0101659783," [level=6]'
    - heading "đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp." [level=6]
    - 'heading "Số Điện Thoại (Hotline): 1900 545 436" [level=6]'
```

# Test source

```ts
  1   | import { test, expect } from "../../../fixtures/page-fixture";
  2   | import { verifyImages } from "../../../utils/ImageHelper";
  3   | 
  4   | test.describe("Dashboard Feature", () => {
  5   | 
  6   |   test.beforeEach(async ({ page }) => {
  7   |     await page.goto("/");
  8   |   });
  9   | 
  10  |   test.describe("Banner", () => {
  11  |     test("D_09: Kiểm tra slider banner hiển thị hình ảnh", async ({ page }) => {
  12  |       const bannerImg = page.locator('.slick-slider img, .carousel img, .jss81 img').first();
> 13  |       await expect(bannerImg, "Kiểm tra banner hiển thị").toBeVisible();
      |                                                           ^ Error: Kiểm tra banner hiển thị
  14  |       await verifyImages(page, bannerImg);
  15  |     });
  16  |   });
  17  | 
  18  |   test.describe("Movie Search (Quick Booking Bar)", () => {
  19  |     test("D_10: Kiểm tra dropdown Phim hiển thị danh sách phim", async ({ homePage }) => {
  20  |       const searchComp = homePage.getMovieSearchComponent();
  21  |       await expect(searchComp.ddlPhim).toBeVisible();
  22  |       const optionCount = await searchComp.ddlPhim.locator('option').count();
  23  |       expect(optionCount).toBeGreaterThan(1);
  24  |     });
  25  | 
  26  |     test("D_11: Tìm kiếm bằng chữ cái tên phim trong danh sách phim", async ({ homePage }) => {
  27  |       const searchComp = homePage.getMovieSearchComponent();
  28  |       await expect(searchComp.ddlPhim).toBeVisible();
  29  |       const selectedVal = await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  30  |       expect(selectedVal).not.toBeNull();
  31  |     });
  32  | 
  33  |     test("D_12: Kiểm tra dropdown Rạp hiển thị danh sách rạp khi chưa chọn Phim", async ({ homePage }) => {
  34  |       const searchComp = homePage.getMovieSearchComponent();
  35  |       await expect(searchComp.ddlRap).toBeVisible();
  36  |       const optionCount = await searchComp.ddlRap.locator('option').count();
  37  |       expect(optionCount).toBeLessThanOrEqual(1);
  38  |     });
  39  | 
  40  |     test("D_13: Kiểm tra dropdown Rạp hiển thị danh sách rạp khi đã chọn Phim", async ({ page, homePage }) => {
  41  |       const searchComp = homePage.getMovieSearchComponent();
  42  |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  43  |       await page.waitForTimeout(1000);
  44  |       await expect.poll(async () => {
  45  |         return await searchComp.ddlRap.locator('option').count();
  46  |       }, { timeout: 5000 }).toBeGreaterThan(1);
  47  |     });
  48  | 
  49  |     test("D_14: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu khi chưa chọn Phim và Rạp", async ({ homePage }) => {
  50  |       const searchComp = homePage.getMovieSearchComponent();
  51  |       await expect(searchComp.ddlNgayGioChieu).toBeVisible();
  52  |       const optionCount = await searchComp.ddlNgayGioChieu.locator('option').count();
  53  |       expect(optionCount).toBeLessThanOrEqual(1);
  54  |     });
  55  | 
  56  |     test("D_15: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu đã chọn Phim và Rạp", async ({ homePage }) => {
  57  |       const searchComp = homePage.getMovieSearchComponent();
  58  |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  59  |       await searchComp.selectFirstValidOption(searchComp.ddlRap);
  60  |       const optionCount = await searchComp.ddlNgayGioChieu.locator('option').count();
  61  |       expect(optionCount).toBeGreaterThan(1);
  62  |     });
  63  | 
  64  |     test("D_16: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu khi chỉ chọn Phim", async ({ homePage }) => {
  65  |       const searchComp = homePage.getMovieSearchComponent();
  66  |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  67  |       const optionCount = await searchComp.ddlNgayGioChieu.locator('option').count();
  68  |       expect(optionCount).toBeLessThanOrEqual(1);
  69  |     });
  70  | 
  71  |     test("D_17: Click nút 'Mua vé ngay' khi chưa chọn Phim + Rạp + Ngày giờ chiếu", async ({ page, homePage }) => {
  72  |       const searchComp = homePage.getMovieSearchComponent();
  73  |       let alertTriggered = false;
  74  |       page.once('dialog', async dialog => {
  75  |         alertTriggered = true;
  76  |         await dialog.dismiss().catch(() => {});
  77  |       });
  78  |       await searchComp.clickMuaVeNgay();
  79  |     });
  80  | 
  81  |     test("D_18: Click nút 'Mua vé ngay' khi chỉ chọn Phim", async ({ page, homePage }) => {
  82  |       const searchComp = homePage.getMovieSearchComponent();
  83  |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  84  |       let alertTriggered = false;
  85  |       page.once('dialog', async dialog => {
  86  |         alertTriggered = true;
  87  |         await dialog.dismiss().catch(() => {});
  88  |       });
  89  |       await searchComp.clickMuaVeNgay();
  90  |     });
  91  | 
  92  |     test("D_19: Click nút 'Mua vé ngay' khi chỉ chọn Phim + Rạp", async ({ page, homePage }) => {
  93  |       const searchComp = homePage.getMovieSearchComponent();
  94  |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  95  |       await searchComp.selectFirstValidOption(searchComp.ddlRap);
  96  |       let alertTriggered = false;
  97  |       page.once('dialog', async dialog => {
  98  |         alertTriggered = true;
  99  |         await dialog.dismiss().catch(() => {});
  100 |       });
  101 |       await searchComp.clickMuaVeNgay();
  102 |     });
  103 | 
  104 |     test("D_20: Kiểm tra tìm kiếm suất chiếu với đầy đủ thông tin", async ({ page, homePage }) => {
  105 |       const searchComp = homePage.getMovieSearchComponent();
  106 |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  107 |       await searchComp.selectFirstValidOption(searchComp.ddlRap);
  108 |       await searchComp.selectFirstValidOption(searchComp.ddlNgayGioChieu);
  109 |       let alertTriggered = false;
  110 |       page.once('dialog', async dialog => {
  111 |         alertTriggered = true;
  112 |         await dialog.dismiss().catch(() => {});
  113 |       });
```