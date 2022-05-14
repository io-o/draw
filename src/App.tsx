/*
 * @Author: Andrew Q
 * @Date: 2022-05-14 17:25:47
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-05-14 18:18:00
 * @Description:
 */
import DrawingBoard from './components/DrawingBoard'

function App() {
  const handleClick = () => {
    alert(1)
  }

  return (
    <div className='App'>
      <header className='m-2'>
        <button
          onClick={handleClick}
          className='px-6 py-2 rounded-full bg-green-500 border-none cursor-pointer'
        >
          Reset
        </button>
      </header>
      <DrawingBoard></DrawingBoard>
    </div>
  )
}

export default App
