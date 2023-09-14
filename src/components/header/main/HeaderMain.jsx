import { Component } from 'react'
import './HeaderMain.css'

class HeaderMain extends Component {
  render() {
    return (
      <div className='header-main bg-green'>
        <div className='container'>
          <div className='header-main__logo-search-actions row'>
            <a className='header-main__logo' href="http://localhost:3000">
              <img src="http://uitheme.net/orgomart/images/logo-white.png" alt="" />
            </a>
            <div className='header-main__search-actions row'>
              <a className='header-main__address' href="http://localhost:3000">
                <span>Delivery to</span>
                <img className='header-main__address-icon' alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADuElEQVR4nO2ZWYiOURjHfzRkmbHPZOJCWYZCiNwoW7JEGtkaV24VuZG9xnZBcodsxYWILJESLiQiDLIklEhqLFnGvoxPR/+3TtN8531f3znffCO/euvr/f7vc/bnOec58J9G6QBUAbuAq8BL4Luel3q3E5gLlFCAVAB7gM9AJuHzCdgN9KUAaAdsBn6ocr/U6yuB0Wpgez0VercKuCZtRqO1CWjTVI0wPXlHlakH9gO9U3zfBzhgNegyUE6eGao5byrwABiWg63hwEPZegYMJo8jETXiDNDZg80uwFmrMeX5WBN3rEYUebTdCjhnTbOga2azNZ18jERjI/NIZawhEBXyTvU5rok4RsgBfAS6hyhgj3rKeKfQHFRZ20JE7E/qqSQutgxYB9xUz5rnBrAWKE3oUH7pu2I8UqUeMsEujplAnSOivwdmJLBzXfo5eGSXjJqIHdeIKMAdUySPIvsY4LgVQCtjbK2WdofHdvwZiYwq5ppO0UgsceiWSvMO6ObQjZXuCh55JaP9HJp11kjEcSKBi+0nzQs88k1GXVvvWwlGrWFvGweQjRJpvuKRLzLqirYfpEniZaJKmqno2kVkdDTwRq2MugJUXYqGdLA8WDZ6SPMcj9yX0YEOzU1pjHeKY5y0NQ7NEGnu4pGTMjrboVkrzfEU9qodmnnSHMUjG2R0vUNTqqmSkYvNxnJp3gJdHbqNCRqbmtkyarbZLmYo2GXkYsdqzRRrOkUjYTTTY2xdlDZOl4oyFf5V3sRFpYJdti3K2wSV66Sdtnk64pkbqsiUBNpuCnY1cst12jtVx0yniFkqy4yKd6LIvZfwHEmw1v6a/pbvj5teudBRAdhsPnuFKqRGjTGuMRQLVcb5gGWwwEoOhKAIeKwyzBkoGMWWRzJna9/MtbYlJqsSlC0q7HDAqbuCPFBuLcZBHu1OsA5cJo7kha0BRsUs7qD5rMboaWVVRnmwV6lGvA6U+HNSbZ3yWuZgp7WVxF5AE9AWeKIKzM/BzhLZuOc5l/xX+a5anfrSUmq584k0IS2AS6qISXCnZZ++Ndv7Jmeors9+AiNTfDfJuktMc9MVlOiYez/hvYbJojzVN4soIFoDtxMchyO2W+eNXDxeEIZoitXHZFImKf6Y0+YACpQ16uknWbYZZUqBGs1iCpgi4IKVxjFeLcJModP671SD/wqSnlbSe2UjR+XaUFdqIZimdWDWy2Rgqn4bFz2eZka1RuCNUkDm9zKaIS2AQ1Y+q+GaaVaU6Mbpsu9LTf5VfgNttDSN+ivn8AAAAABJRU5ErkJggg==" />
                <span>Downtown New York...</span>
              </a>
              <div className='header-main__search'>
                <svg className='header-main__search-input-icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
                <input className='header-main__search-input' type="text" placeholder="Start typing to search..." />
              </div>
              <a className='header-main__action' href="http://localhost:3000">
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABH0lEQVR4nM3TzypEYRjH8c+UsvFnsGJhazYWcgOSslBuQIkwiq3S7KwmC25BYcQdsGNjy9J/ZUNZKTegU+/CYjrzvseo+dazOJ3f7/md93neQ4cxHurf2AnVdroxh3NcYBZd7Wq+gA9cYg/7uMYb5v/afAsPmGjybiYErxZtPol3jORoxvCFSpGAM2xG6Go4KBLwieEI3Wg4aRJ9+E7QZ9relIBKWG4sj2Ef0UyHaxnLFaai1VhGI0F/EjxRDOEWiwkBS7gJ3lwG8Yo6SgkBpeB5wUCecAOHinOE9TxBNXH2zXaxJocy7nEa/tDtyKoFzx36taAHK2Gmu5FVD57M25lUcfzrudFq1qmU8RwaZ4t8ipl1KlnD7KuzanvzwvwApV050DMFji8AAAAASUVORK5CYII=" />
              </a>
              <a className='header-main__action' href="http://localhost:3000">
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABlklEQVR4nO2Vzy4DURTGf9NFIwQ7O6nnsFIL6UbCxp8lEi0SL8BWWPmbCp7Bgu4aPADpO5SFathgg5BUbnImOWFmOqZzh0i/ZJJ2vnPO77tz77TQVlt/VClgGigBNeADuAfOgRmgw6PH3JsFLoAH6TG9p8CkzAylAaACNAKuOjCmesblXlDPFZAJA69LQxWYB/qBtHhLwI0augasq+/XwKLUpqW3IPeNfxcUIqVWXga6ferMo14F3hXYfF7x2RqjHuBMai/9tmNKrdwPrjUMPAGPQDZEfa96ehNeBSUx84TXkFxhtSCMEy+zJqbZN1vKCOPWy3wTs9NigC5hvHqZVTEHLQbIqnP2TdtiHlsMUBbGnpfZBzxLwZwFeF5mvwSds4IqysUIz8m+m9nLzYo3Yw6Rk1lm5lbYpg1pMG/GaAvwkSjwuEJouDngzk8HOMBOxBAafhAF3kqI2OBRQmj4YRxwV2bQbpMQ1uBhQmj4kQ14UIjE4K4MoKh+rFx4MQm4K0f+UBpJrvyrDHBfrsThrpzfhPMv9AmOeJf9ULW3GwAAAABJRU5ErkJggg==" />
              </a>
              <a className='header-main__action' href="http://localhost:3000">
                <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHklEQVR4nO2WOw7CMBBEp0dcAQ6QgishLgYdZwBSQQUNBaLgGnyEqAZZWiREQRLbhAHtk7ZKvN7JeKwA9egA2ABgy7W2vbMx+YIIWk1ziRhZwzOAImL9Y6CmFLYnbYYkQrOLNRtG9ogVAtszrL0CGCCScDb31mgc2yRRCGzvsP4AoIuEXOwTA5cqpPP0Qadt5yKnkOi85MhFbiFRedl98aplzdrWEcIfqdaOwqegCxGD7kgD+gBKALc3IQ3PFgB6EHakbHDrzJWFnGztu7+Bwt45KgtZ/IsjfRuwKiMz9Yy0AV2IGHRHxKA7IgbdETHojohBd0QMuiNi0B0Rg+6IGHRHxKA7IgbdETHojohBd+TXHaF4oYqVwJBVtXyd+g6sWNMAnCSKrAAAAABJRU5ErkJggg==" />
              </a>
              <a className='header-main__action header-main__profile' href="http://localhost:3000">

              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default HeaderMain;