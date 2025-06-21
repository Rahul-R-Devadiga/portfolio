const allImages = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

/**
 * @param {string} folderName - e.g., "vibe_talk", "netflixgpt"
 * @returns {string[]} - Array of image URLs
 */
export function loadScreenshots(folderName) {
  return Object.entries(allImages)
    .filter(([path]) => path.includes(`/assets/${folderName}/`))
    .sort(([a], [b]) => a.localeCompare(b)) // Optional: sorts by filename
    .map(([, img]) => img);
}
