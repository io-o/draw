/*
 * @Author: Andrew Q
 * @Date: 2022-05-14 17:25:47
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-05-15 19:38:23
 * @Description:
 */
import { useDispatch } from 'react-redux'
import DrawingBoard from './components/DrawingBoard'
import { changeColor, reset } from './store/color'


function App() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(reset())
  }

  const handleColor = (color: string) => dispatch(changeColor(color))

  return (
    <div className='App'>
      <header className='m-2 flex justify-center items-center'>
        <button
          onClick={() => handleColor('red')}
          className='p-5 rounded-full bg-red-600 border-none cursor-pointer'
        ></button>
        <button
          onClick={handleClick}
          className='px-6 py-2 rounded-full bg-green-500 border-none cursor-pointer'
        >
          Reset
        </button>
      </header>
      <DrawingBoard />
    </div>
  )
}

export default App
