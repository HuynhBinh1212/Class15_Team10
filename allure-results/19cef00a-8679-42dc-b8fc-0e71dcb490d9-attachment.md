# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Feature >> D_34: Kiểm tra đăng nhập thành công với tài khoản hợp lệ
- Location: tests\ui\login.spec.ts:12:7

# Error details

```
Error: browserContext.newPage: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\Dell\AppData\Local\ms-playwright\firefox-1543\firefox\firefox.exe -no-remote -headless -profile C:\Users\Dell\AppData\Local\Temp\playwright_firefoxdev_profile-9QYNSN -juggler-pipe -silent
<launched> pid=21088
[pid=21088][err] *** You are running in headless mode.
[pid=21088][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 125: unreachable code after return statement
[pid=21088][out] 
[pid=21088][out] Juggler listening to the pipe
[pid=21088][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt (t=21.4097) [GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt
[pid=21088][err] Exiting due to channel error.
```

```
Error: browserContext._wrapApiCall: Target page, context or browser has been closed
```