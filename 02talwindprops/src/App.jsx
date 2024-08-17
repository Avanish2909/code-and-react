import './App.css'
import Cards from './components/Cards'

function App() {

  // let username = {
  //   username: "Avanish"
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <br />
      <div className='grid grid-cols-3 gap-4 ml-4 mr-4'>
        <div>
          <Cards username="Avanish" btnText="See Details" />
        </div>
        <div>
          <Cards username="Akash" btnText="Click me" />
        </div>
        <div>
          <Cards username="Rahul" />
        </div>
      </div>

    </>
  )
}

export default App
