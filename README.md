# VEGAMAN Plays — YouTube Channel Website

A responsive, beginner-friendly gaming channel website built with **HTML, CSS and vanilla JavaScript**. It is ready for GitHub Pages.

## Features
- Responsive layout for desktop, tablet and mobile
- VEGAMAN Plays gaming branding (neon green + cyan on a dark background)
- Hero section with YouTube subscribe links
- Latest videos section with editable sample cards
- Game categories: Minecraft, Roblox, Horror, Racing, Adventure and more
- Mobile navigation menu
- Custom SVG logo and favicon
- No build tools, frameworks, package installation or paid hosting required

## 1. Customize your YouTube link

1. Open `script.js` in VS Code or Notepad.
2. Find this line near the top:

   ```js
   const CHANNEL_URL = "https://www.youtube.com/@YOUR_CHANNEL_HANDLE";
   ```

3. Replace the example with your real channel URL, for example:

   ```js
   const CHANNEL_URL = "https://www.youtube.com/@YourActualHandle";
   ```

4. Save the file.

Until you replace this value, Subscribe links point to a placeholder address.

## 2. Add your real videos

In `script.js`, edit the `VIDEOS` array. For each video:
- `title`: your YouTube video title
- `description`: short description
- `type`: e.g. GAMEPLAY, SHORTS, CHALLENGE
- `url`: full YouTube video URL
- `theme`: `minecraft`, `roblox`, or `horror` (controls the sample thumbnail style)
- `thumb`: two short lines separated by `|`

Example:

```js
{
  title: "My First Minecraft House",
  description: "Building my first survival base!",
  type: "MINECRAFT",
  url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  theme: "minecraft",
  thumb: "FIRST|HOUSE"
}
```

You can add or remove video objects inside the array. Keep commas between objects.

## 3. Preview on Windows 11

1. Extract the ZIP file.
2. Open the `vegaman-plays-website` folder.
3. Double-click `index.html`.
4. The website opens in your browser.

For editing, install the free Visual Studio Code editor (optional), open the project folder, and edit `index.html`, `style.css`, or `script.js`.

## 4. Publish with GitHub Pages (free)

1. Sign in at [GitHub](https://github.com/).
2. Click **New repository**.
3. Name it `vegaman-plays` (or another name you like).
4. Set it to **Public**, then create the repository.
5. Upload the contents of this project folder. Important: `index.html` must be at the repository's top level, not buried inside another folder.
6. Open the repository's **Settings**.
7. Select **Pages** from the left menu.
8. Under **Build and deployment**, choose **Deploy from a branch**.
9. Select branch `main` and folder `/ (root)`, then click **Save**.
10. Wait for GitHub Pages to publish. Your website address will look like:

   `https://YOUR-GITHUB-USERNAME.github.io/vegaman-plays/`

GitHub may take a few minutes to publish the first time.

## Project files

```text
vegaman-plays-website/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── logo.svg
    └── favicon.svg
```

## Important
- This is a static website. It does not automatically fetch videos from YouTube; add your video URLs in `script.js`.
- Replace the placeholder channel URL before publishing.
- The logo is a simple custom SVG mark included in the project, not an imported Canva logo.
- Google Fonts are used when internet access is available; fallback fonts are included.
