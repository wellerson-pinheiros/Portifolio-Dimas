import HomePage from './pages/Home'

function App() {
  return (
    // Ultrawide trava o layout em 1920px, centralizado, sem ser responsivo.
    <div className="mx-auto w-full ultrawide:w-[1920px]">
      <HomePage />
    </div>
  )
}

export default App
