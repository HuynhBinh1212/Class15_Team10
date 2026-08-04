import test, { expect } from "@playwright/test";
import { bookingData, updateBookingData } from "../../test-data/booking-data";

//serial : giúp cho các test  case trong describe được chạy tuần tự, không chạy song song
test.describe.serial("TC03: Update Booking API", () => {
  let token: string;
  let bookingId: number;

  test.beforeAll(async ({ request }) => {
    //logic 1
    const response = await request.post(
      "https://restful-booker.herokuapp.com/auth",
      {
        data: {
          username: "admin",
          password: "password123",
        },
      },
    );

    const responseBody = await response.json();
    expect(response.status()).toBe(200); // kiểm tra trạng thái 200

    token = responseBody.token;
  });

  test("TC: create booking successfull", async ({ request }) => {
    const response = await request.post(
      "https://restful-booker.herokuapp.com/booking",
      {
        data: bookingData,
      },
    );

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    bookingId = responseBody.bookingId;
  });


  test("TC: Update booking successful", async ({ request }) => {
    console.log(token, bookingId);
    const response = await request.put(
      `https://restful-booker.herokuapp.com/booking/${bookingId}`,
      {
        data: updateBookingData,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie: `token=${token}`,
        },
      },
    );
    expect(response.status()).toBe(200); // kiểm tra trạng thái 200
    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200); // kiểm tra trạng thái 200
    expect(responseBody.firstname).toBe(updateBookingData.firstname); // kiểm tra firstname đã được cập nhật thành công hay chưa
  });
});