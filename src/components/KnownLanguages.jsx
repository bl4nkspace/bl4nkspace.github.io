import './KnownLanguages.css';

const KnownLanguages  = () => {

  // All languages/tools I know
  const languages = [
    "bash",
    "blender",
    "bootstrap",
    "cs",
    "codepen",
    "css",
    "discord",
    "dotnet",
    "figma",
    "firebase",
    "git",
    "github",
    "gmail",
    "godot",
    "html",
    "js",
    "md",
    "mint",
    "nodejs",
    "npm",
    "obsidian",
    "powershell",
    "py",
    "raspberrypi",
    "react",
    "replit",
    "stackoverflow",
    "sketchup",
    "ts",
    "vite",
    "vscode",
    "windows"
  ]

  return (
    <div className='center'>
    {// Return an image for each language using SkillIcons
      languages.map((language) => (
        <img key={language} className='languageImg' src={`https://skillicons.dev/icons?theme=dark&i=${language}`} />
      ))
    }
    </div>
  );
}

export default KnownLanguages;