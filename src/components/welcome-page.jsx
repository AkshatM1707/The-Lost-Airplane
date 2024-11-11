import React, { useState, useEffect } from 'react'
import { Github } from 'lucide-react'

export default function WelcomePage() {
  const [glitchText, setGlitchText] = useState("AIRPLANE HUNTING")
  const [flag, setFlag] = useState("")
  const [flagSubmissionResult, setFlagSubmissionResult] = useState("")
  
  useEffect(() => {
    const interval = setInterval(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+'
      const newText = "AIRPLANE HUNTING".split('').map((char, index) => 
        Math.random() > 0.9 ? chars[Math.floor(Math.random() * chars.length)] : char
      ).join('')
      setGlitchText(newText)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const handleFlagSubmit = (e) => {
    e.preventDefault()
    
    if (flag.startsWith("flag{") && flag.endsWith("}")) {
      setFlagSubmissionResult("Flag submitted successfully! Awaiting verification...")
      if (flag === "") {
        window.alert("Success")
      } else {
        window.alert("Failed")
      }
    } else {
      setFlagSubmissionResult("Invalid flag format. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          {glitchText}
        </h1>
        <p className="text-xl md:text-2xl">Welcome to the CTF Challenge</p>
      </header>

      <main className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Challenge Description</h2>
        <p className="mb-4">
          Strap in, hacker! Your journey begins with an image—just a simple picture... or so it seems. 
          Rumor has it, someone left a little something hidden in there. Some say it's encoded in a language 
          only those fluent in “Base of 64” understand; others claim it’s a reversed whisper. Maybe you’ll find 
          a riddle if you turn things back to front.
        </p>
        <p className="mb-4">
          Oh, and there’s this strange cipher everyone’s talking about. They say the key is an ancient, 
          powerful word... and the event you are participating in... Got any ideas? 
        </p>
        <p className="mb-4">
          Picture this: you have a message you want to keep secret, like "FLIGHT." But instead 
          of writing it plainly, you use a special code word—let’s say "SKYLINE"—to mix things up. 
          Each letter in "FLIGHT" shifts based on the letters in "SKYLINE." For instance, if "S" 
          lines up with "F," your "F" would shift down the alphabet by a certain number. It's 
          like each letter dances to its own rhythm, with "SKYLINE" setting the beat.
        </p>
        <p className="mb-4">
          Just remember, this is not a journey for the faint of heart. There’s no roadmap, only instincts 
          and wit to guide you. So, feel free to have fun and explore the skies of knowledge!
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Investigate the mysterious images and see where they lead.</li>
          <li>Look closely—sometimes backwards is the way forward.</li>
          <li>Decode some characters that are oddly base-inclined.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>
        <aside className="w-64 bg-gray-900 p-4 rounded-lg shadow-lg border border-green-500 float-right">
          <h3 className="text-lg font-semibold mb-2 text-green-500">Helpful Tools</h3>
          <ul className="space-y-2">
            <li><a href="https://quipqiup.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Decoding Tool</a></li>
            <li><a href="https://pics.io/photo-metadata-viewer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Image tool</a></li>
            <li><a href="https://onlinestringtools.com/reverse-string" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Reverse String Tool</a></li>
            <li><a href="https://cryptii.com/pipes/vigenere-cipher" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Your favourite tool</a></li>
          </ul>
        </aside>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">GitHub Repository</h2>
        <p className="mb-2">
          All necessary image files and additional resources can be found in our GitHub repository:
        </p>
        <a 
          href="https://github.com/syp-karn/chakravyuh" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition-colors"
        >
          <Github className="mr-2" />
          Access GitHub Repo
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ready for Takeoff?</h2>
        <p>
          The skies are vast, but your skills are unmatched. Dive into the challenge, 
          decode the secrets, and claim your place among the elite. Good luck, hacker!
        </p>
      </section>

      
      </main>

      <footer className="text-center mt-12 text-sm">
        <p>&copy; {new Date().getFullYear()} Chakravyuh</p>
      </footer>
    </div>
  )
}
