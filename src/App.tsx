import Folder from './bits/Folder';

function App() {
  /** * 1. CHARACTER ARRAY
   * Kita is placed first to ensure she is the top-most card 
   * during the hover "peek" animation.
   */
  const characters = [
    { name: "Kita", img: "/kita.jpg" },
    { name: "Bocchi", img: "/bocchi.jpg" },
    { name: "Nijika", img: "/nijika.jpg" },
    { name: "Ryo", img: "/ryo.jpg" }
  ];

  /** * 2. CARD MAPPING
   * We wrap each image in a div. The Folder component handles 
   * making these square (90x90). object-cover prevents stretching.
   */
  const characterCards = characters.map((char) => (
    <div key={char.name} className="w-full h-full">
      <img 
        src={char.img} 
        alt={char.name} 
        className="w-full h-full object-cover block" 
      />
    </div>
  ));

  return (
    /** * 3. LAYOUT CONTAINER
     * - h-screen w-screen: Full viewport coverage.
     * - flex items-center justify-center: Perfectly centers the folder.
     * - bg-[#060606]: Deep dark background to match the theme.
     */
    <div className="flex h-screen w-screen items-center justify-center bg-[#060606] overflow-hidden">
      
      {/* 4. FOLDER COMPONENT
        - size={4}: Scaled up for visibility.
        - color: Yellow theme.
      */}
      <Folder 
        color="#FFD700" 
        size={4} 
        items={characterCards} 
      />
      
    </div>
  );
}

export default App;
