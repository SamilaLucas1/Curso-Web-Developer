import './style.css'

export function App() {
  return (
    <div className="container">
      <header>
        <h1>Previsão do tempo</h1>
        <form action="">
          <input type="text" placeholder='Nome da cidade'/>
          <button>Buscar</button>
        </form>
      </header>

      <main>
        <article>
          <section className='blockCityName'>
            <h2>Jucás, Ceará</h2>
            <p>Brasil, 11/01/2023 14:20:00</p>
          </section>

          <section className='blockCurrentTime'>
            <div className='currentTime'>
              <div className='blockDegree'>
                <img src="#" alt="icon" />
                <p>25.6°</p>
                <p>
                  <span className='degreeMax'>32.0°</span>
                  <span className='degreeMin'>20.0°</span>
                </p>
              </div>

              <div className='blockSituation'>
                <img src="#" alt="icon" />
                <div>
                  <p>Parcialmente sol quente</p>
                  <p>Sensação térmica de 36.5°</p>
                </div>
              </div>
            </div>
          </section>

          <section className='containerWeatherCondition'>
            {/* Component */}
          </section>

          <section className='containerWeatherForecast'>
            <ol>
              <li>Component "Map"</li>
            </ol>
          </section>
        </article>
      </main>
      <footer>
        <p>Web Developer Course - Jucás</p>
      </footer>
    </div>
  )
}
