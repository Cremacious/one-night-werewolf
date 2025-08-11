export default function Home() {
  return (
    <div className="min-h-screen  text-orange-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,140,0,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">🐺</span>
            </div>
            <span className="text-2xl font-bold text-yellow-400">
              One Night Werewolf
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#how-to-play"
              className="text-orange-200 hover:text-yellow-400 transition-colors"
            >
              How to Play
            </a>
            <a
              href="#features"
              className="text-orange-200 hover:text-yellow-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-orange-200 hover:text-yellow-400 transition-colors"
            >
              About
            </a>
            <a
              href="/dashboard
              "
              className="text-orange-200 hover:text-yellow-400 transition-colors"
            >
              Dashboard
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            ONE NIGHT
            <br />
            <span className="text-yellow-400 drop-shadow-2xl">WEREWOLF</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-orange-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Enter the shadows of deception and survival. Can you identify the
            werewolf before dawn breaks? One night. One vote. Trust no one.
          </p>

          {/* Game Actions */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold py-4 px-8 rounded-lg text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 min-w-[200px]">
              <span className="flex items-center justify-center space-x-2">
                <span>🎮</span>
                <span>Create Game</span>
              </span>
            </button>

            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Enter game code..."
                className="bg-gray-800 border-2 border-orange-600 text-orange-100 px-4 py-4 rounded-lg text-lg focus:border-yellow-400 focus:outline-none transition-colors min-w-[200px]"
              />
              <button className="bg-gray-800 hover:bg-gray-700 border-2 border-orange-600 hover:border-yellow-400 text-orange-100 font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300">
                Join Game
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            <div className="bg-black/40 border border-orange-600 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Quick Rounds
              </h3>
              <p className="text-orange-200">
                Fast-paced 10-minute games perfect for any group size
              </p>
            </div>

            <div className="bg-black/40 border border-orange-600 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Multiple Roles
              </h3>
              <p className="text-orange-200">
                Villagers, Werewolves, Seers, and more unique roles to discover
              </p>
            </div>

            <div className="bg-black/40 border border-orange-600 rounded-lg p-6 backdrop-blur-sm hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Social Deduction
              </h3>
              <p className="text-orange-200">
                Bluff, deduce, and survive in this game of wit and deception
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border border-orange-600 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Ready to Hunt?
            </h2>
            <p className="text-orange-200 mb-6 text-lg">
              Gather your friends and test your skills of deduction in the
              ultimate game of trust and betrayal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-colors">
                Start Playing Now
              </button>
              <button className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black text-yellow-400 font-bold py-3 px-6 rounded-lg transition-all">
                Learn Rules
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-orange-600 bg-black/60 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-orange-300">
            © 2025 One Night Werewolf Online. All rights reserved.
          </p>
          <p className="text-orange-400 mt-2 text-sm">
            Based on the original board game by Bezier Games
          </p>
        </div>
      </footer>
    </div>
  );
}
