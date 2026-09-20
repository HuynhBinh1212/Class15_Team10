# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Feature >> D_35: Kiểm tra chức năng Quên mật khẩu
- Location: tests\ui\login.spec.ts:37:7

# Error details

```
Error: browserContext.newPage: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\Dell\AppData\Local\ms-playwright\firefox-1543\firefox\firefox.exe -no-remote -headless -profile C:\Users\Dell\AppData\Local\Temp\playwright_firefoxdev_profile-lIFyjz -juggler-pipe -silent
<launched> pid=20244
[pid=20244][err] *** You are running in headless mode.
[pid=20244][err] JavaScript warning: resource://services-settings/Utils.sys.mjs, line 125: unreachable code after return statement
[pid=20244][out] 
[pid=20244][out] Juggler listening to the pipe
[pid=20244][out] Crash Annotation GraphicsCriticalError: |[0][GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt (t=13.857) [GFX1-]: RenderCompositorSWGL failed mapping default framebuffer, no dt
[pid=20244][err] JavaScript error: chrome://juggler/content/Helper.js, line 82: NS_ERROR_FAILURE: Component returned failure code: 0x80004005 (NS_ERROR_FAILURE) [nsIWebProgress.removeProgressListener]
[pid=20244][err] Exiting due to channel error.
```

```
Error: browserContext.close: Target page, context or browser has been closed
```