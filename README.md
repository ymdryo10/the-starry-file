## 📂 The Starry File

**The Starry File** is an interactive, high-energy React component inspired by the **Kessoku Band** from *Bocchi the Rock!*. It features a dynamic "mini-fan" hover state and a full-expansion animation that showcases character cards in a stylish, physical-media inspired folder.

## ✨ Features

* **🎸 Dynamic Mini-Fan Peek:** Hovering over the folder triggers a "peek" where the first card (Kita) fans out slightly behind the flaps.
* **🥁 Kessoku Expansion:** Clicking the folder triggers a wide-fan animation where the cards expand into a centered, high-visibility layout.
* **⚡ Anti-Clip Geometry:** Uses custom `clip-path` logic (`inset(-300px -300px 0px -300px)`) to ensure cards never "noclip" through the folder base while allowing corners to rotate freely behind the flaps.
* **📐 Square Card Support:** Optimized specifically for **90x90 square images**, ensuring high-quality character art display without stretching.

## 🛠️ Technologies Used

* **React (TypeScript)** - Component architecture and state management.
* **Tailwind CSS** - Layout and transition timing transitions.
* **Vite** - Build tool and development server.
* **CSS Variable Injection** - Orchestrates complex "Group Hover" animations for multiple child elements simultaneously using `<style>` injection.

## 🚀 Getting Started

Follow these steps to get **The Starry File** running on your local machine.

### 1. Clone the repository
\`\`\`
git clone https://github.com/your-username/the-starry-file.git

cd the-starry-file
\`\`\`

### 2. Install dependencies
\`\`\`
npm install
\`\`\`

### 3. Setup Assets
Ensure your character images are in the \`public/\` folder with these exact names:
* \`public/kita.jpg\`
* \`public/bocchi.jpg\`
* \`public/nijika.jpg\`
* \`public/ryo.jpg\`

### 4. Run the development server
\`\`\`
npm run dev
\`\`\`

## 🎨 Theme
The folder uses **Kessoku Yellow** (\`#FFD700\`) with a programmatically darkened interior, set against a "Studio Starry" dark background (\`#060606\`).

## 🎬 Video Demonstration
https://github.com/user-attachments/assets/da374f6d-eccc-4d0f-a76c-9f95d01c4f6d

## 📄 License
This project is licensed under the MIT License.
EOF






