# VS-Code-simle-clone-using-html-css-and-javascript
I have made 2 versions of this project this is the Simpler version the other is more advanced

Neon Code Editor Project

Overview

This project is a web-based code editor with a neon-themed interface, built using HTML, CSS, and JavaScript. It integrates the Monaco Editor (the same editor powering Visual Studio Code) to provide a rich coding experience. The editor features a sidebar for file selection and supports editing HTML, CSS, and JavaScript files with syntax highlighting and a custom neon theme.
Features

Responsive Design: Full-screen layout with a fixed sidebar (sidebar) and flexible editor area (editor-container) for optimal viewing across devices.
Monaco Editor Integration: Uses the Monaco Editor (vs/editor/editor.main) for advanced code editing with syntax highlighting, auto-layout, and a custom neon theme (neonTheme).
File Selection: Sidebar (sidebar) lists sample files (index.html, style.css, script.js) that can be loaded into the editor via the loadFile function.
Custom Theme: Neon-themed editor (neonTheme) with vibrant colors (e.g., #00ffcc for text, #1a1a1a for background) and glowing effects.
Interactive Sidebar: File list items (sidebar li) with hover effects (background: #00ffcc, text-shadow) for file selection.
Visual Design: Neon aesthetic with glowing text (neon-text), borders (neon-border), and box shadows (box-shadow: 0 0 20px rgba(0, 255, 204, 0.5)).

Technologies Used

HTML5: For semantic structure and content.
CSS3: For styling, layout, and neon visual effects (e.g., text-shadow, box-shadow, transition).
JavaScript: For integrating Monaco Editor and handling file loading (script.js).
Monaco Editor: External library (https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs) for code editing functionality.
External Resources:
Monaco Editor CDN (https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs).



File Structure

index.html: Main HTML file containing the sidebar and editor container.
style.css: CSS file for styling the sidebar, editor, and neon effects.
script.js: JavaScript file for initializing Monaco Editor, defining the neon theme, and handling file loading.
No additional folders: The project does not require an images/ or videos/ folder as it uses no external media.

Naming Conventions
The project uses clear and descriptive class names:

sidebar: Fixed sidebar for file navigation.
editor-container, editor: Container and element for the Monaco Editor.
neon-text, neon-border: Classes for neon-styled text and borders.
h2, ul, li: Sidebar heading and file list elements.
neonTheme: Custom Monaco Editor theme name.

Setup Instructions

Clone or Download:
Clone the repository or download the project files.


File Placement:
Place index.html, style.css, and script.js in the project root.


Dependencies:
Ensure an internet connection to load the Monaco Editor CDN (https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs).


Run the Project:
Open index.html in a web browser to view the code editor.
No server setup is required as it uses static HTML, CSS, and client-side JavaScript.



Usage

File Selection: Click on a file name (index.html, style.css, script.js) in the sidebar (sidebar li) to load its sample content into the editor.
Editing: Use the Monaco Editor (editor) to write or modify code with syntax highlighting for HTML, CSS, or JavaScript.
Theme: The editor uses a custom neon theme (neonTheme) with vibrant colors and glowing effects.
Hover Effects: Hover over sidebar items (li:hover) for visual feedback with neon styling.

Customization

Styling: Modify style.css to change colors, fonts, or layout.
Primary background: #1a1a1a (dark gray).
Accent color: #00ffcc (neon cyan for text, borders, and highlights).
Hover background: #00ffcc (neon cyan for sidebar items).


Editor Theme: Update the neonTheme in script.js to customize token colors (e.g., comment, keyword, string) or editor colors (e.g., editor.background).
Content: Add more sample files to the sampleContent object in script.js to support additional file types or content.
Features: Enhance script.js to add functionality like saving files, auto-saving, or additional editor options (e.g., minimap: { enabled: true }).

Notes

The editor is client-side and does not save changes; a backend (e.g., Node.js, PHP) is required for persistent file storage.
The loadFile function in script.js uses predefined sample content; real file loading requires server-side integration.
The Monaco Editor CDN must be accessible for the editor to function.
The project is optimized for modern browsers (Chrome, Firefox, Edge, Safari).
No external media (images/videos) is required, unlike other projects.

Credits

Designed by: Ahmad Samama
Editor: Monaco Editor (Microsoft)
Fonts: Arial (system font)

License
© Copyright 2025 Ahmad Samama. All Rights Reserved.
