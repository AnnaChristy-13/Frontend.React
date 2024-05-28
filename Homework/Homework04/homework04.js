const root = ReactDOM.createRoot(document.getElementById('root'));

<h1>World champions</h1>

// прием props
const Champion = ({name,country,years}) => {   
return (
    <>
    <h3 style={{ textAlign: 'center' }} >Name: {name}</h3>
    <h5 style={{ textAlign: 'center' }}>Country: {country}</h5>
    <h5 style={{ textAlign: 'center' }}>Years: {years}</h5>
    </>
)
}

root.render(
    <>
    {/* передача props */}
    <h1 style={{ textAlign: 'center', fontWeight: 'extra bold'}}>World champions</h1>
    <br></br>
    <h2 style={{ textAlign: 'center', color:'green'}}>Pre-FIDE world champions (1886–1946)</h2>
    <br></br>
    <Champion name='Wilhelm Steinitz'country='Austria-Hungary, United States' years='1886–1894'/>
    <Champion name='Emanuel Lasker'country='Germany' years='1894–1921'/>
    <Champion name='José Raúl Capablanca'country='Cuba' years='1921–1927'/>
    <Champion name='Alexander Alekhine'country='France' years='1927–1935'/>
    <Champion name='Max Euwe'country='Netherlands' years='1935–1937'/>
    <Champion name='Alexander Alekhine'country='France' years='1937–1946'/>
    <br></br>
    <h2 style={{ textAlign: 'center', color:'green' }}>FIDE world champions (1948–1993)</h2>
    <br></br>
    <Champion name='Mikhail Botvinnik'country='Soviet Union' years='1948–1957'/>
    <Champion name='Vasily Smyslov'country='Soviet Union' years='1957–1958'/>
    <Champion name='Mikhail Botvinnik'country='Soviet Union' years='1958–1960'/>
    <Champion name='Mikhail Tal'country='Soviet Union' years='1960–1961'/>
    <Champion name='Mikhail Botvinnik'country='Soviet Union' years='1961–1963'/>
    <Champion name='Tigran Petrosian'country='Soviet Union' years='1963–1969'/>
    <Champion name='Boris Spassky'country='Soviet Union' years='1969–1972'/>
    <Champion name='Bobby Fischer'country='United States' years='1972–1975'/>
    <Champion name='Anatoly Karpov'country='Soviet Union' years='1975–1985'/>
    <Champion name='Garry Kasparov'country='Soviet Union, Russia' years='1985–1993'/>
    <br></br>
    <h2 style={{ textAlign: 'center', color:'green' }}>Classical (PCA/Braingames) world champions (1993–2006)</h2>
    <br></br>
    <Champion name='Garry Kasparov'country='Russia' years='1993–2000'/>
    <Champion name='Vladimir Kramnik'country='Russia' years='2000–2006'/>
    <br></br>
    <h2 style={{ textAlign: 'center', color:'green' }}>FIDE world champions (1993–2006)</h2>
    <br></br>
    <Champion name='Anatoly Karpov'country='Russia' years='1993–1999'/>
    <Champion name='Alexander Khalifman'country='Russia' years='2000–2002'/>
    <Champion name='Viswanathan Anand'country='India' years='1993–1999'/>
    <Champion name='Ruslan Ponomariov'country='Ukraine' years='2002–2004'/>
    <Champion name='Rustam Kasimdzhanov'country='Uzbekistan' years='2004–2005'/>
    <Champion name='Veselin Topalov'country='Bulgaria' years='2005–2006'/>
    <br></br>
    <h2 style={{ textAlign: 'center', color:'green' }}>FIDE (reunified) world champions (2006–present)</h2>
    <br></br>
    <Champion name='	Vladimir Kramnik'country='Russia' years='2006–2007'/>
    <Champion name='Viswanathan Anand'country='India' years='2007–2013'/>
    <Champion name='Magnus Carlsen'country='Norway' years='2013–2023'/>
    <Champion name='Ding Liren'country='China' years='2023–present'/>
    </>
)
