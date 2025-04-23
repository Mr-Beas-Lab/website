import Image from 'next/image'
import Link from 'next/link'
import CommunityLeaders from './components/CommunityLeaders'
import { Twitter, Send, Mail, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-blue-600 dark:bg-blue-800 text-white p-6 top-0 z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center">
              <img src="/mrbeas.png" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Mr. Beas</h1>
          </div>
          <nav className="text-lg">
            <Link href="#about" className="mr-6 hover:underline transition-colors duration-300 hover:text-yellow-300">About</Link>
            <Link href="#benefits" className="mr-6 hover:underline transition-colors duration-300 hover:text-yellow-300">Benefits</Link>
            <Link href="#community" className="hover:underline transition-colors duration-300 hover:text-yellow-300">Community</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Global new finances super-app on Telegram</h2>
          <p className="text-2xl mb-8">Transforming finance with Elías Arraez&apos;s Community.</p>
          <Link href="https://t.me/mrbeasapp_bot" className="bg-green-500 dark:bg-green-600 text-white text-xl px-8 py-3 rounded-full hover:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300">
            Launch App
          </Link>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">About Mr. Beas</h3>
          <p className="text-xl mb-6">
            Mr. Beas is an innovative Telegram super-app designed to transform finances and investing. DeFi, DAO, Trading, AI Analyzer, Financial Services etc. 
            
          </p>
      
        </section>

        <section id="benefits" className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">Key Benefits</h3>
          <ul className="list-disc list-inside text-xl space-y-4">
            <li>Capital Protection: Mitigates risks through the use of Arraez trading strategy.</li>
            <li>AI Agent: Model training powered by an advanced artificial intelligence agent.</li>
            <li>Seamless Access: Operate directly within Telegram without the need for additional apps.</li>
            <li>Tokenized Ecosystem: Unlock the mini app&apos;s analyzer with our community-driven $MRB MrBeas utility token.</li>
            <li>Community-Driven: Thriving network of 400+ elite traders in the Arraez Group.</li>
            <li>DeFi: Swap, Liquidity Pool, Staking, Farming and more on the Open Network.</li>
            <li>Community Financial Services: Remittances, Loan, International Private Banking with the Arraez Group support.</li>
           
            </ul>
        </section>

        <section id="community_1" className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">Leading Traders in the Arraez Group</h3>
          <CommunityLeaders />
        </section>

        <section id="community" className="mb-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Global Social Networks</h3>
          <div className="flex justify-center space-x-8">
            <Link href="https://twitter.com/MrBeas_" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300" aria-label="Twitter">
              <Twitter size={32} />
            </Link>
            <Link href="https://t.me/MrBeas_Group" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300" aria-label="Telegram">
              <Send size={32} />
            </Link>
            <a href="mailto:mrbeas.app@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300" aria-label="Email">
              <Mail size={32} />
            </a>
            <Link href="https://www.instagram.com/mrbeas.app" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300" aria-label="Instagram">
              <Instagram size={32} />
            </Link>
          </div>
        </section>

        <div className="text-center mb-16">
          <Link href="https://t.me/blum/app?startapp=memepadjetton_MRB_3UKTM-ref_jM0CnzEvER" className="bg-blue-500 dark:bg-blue-600 text-white text-xl px-8 py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
            Buy $MRB Token on Blum
          </Link>
        </div>
      </main>
      <footer className="bg-gray-200 dark:bg-gray-800 p-6 text-center">

        <p className="text-lg">&copy; 2025 Mr. Beas | Arraez Group - All rights reserved.</p>
        <div className="mt-4 text-lg">
          <Link href="https://coinmarketcap.com/dexscan/ton/EQBjrVv26K5HE-mWTeOmV0D0BrcizSwH6kQ4KI12ksaz-UAM/" className="text-blue-600 dark:text-blue-400 hover:underline mr-6 transition-colors duration-300">Coinmarketcap</Link>
          <Link href="https://www.geckoterminal.com/ton/pools/EQBjrVv26K5HE-mWTeOmV0D0BrcizSwH6kQ4KI12ksaz-UAM?__cf_chl_tk=G7jpsbxe4f75dqWRzSKH1cr0JhOEE2NMeM0dWXIulFU-1736603391-1.0.1.1-gQehNeNOx0hMFZcY6nMDxPb40wsj8ftoCQZ0hkO14Y0" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300">Coingecko</Link>
        </div>
      </footer>
    </div>
  )
}

