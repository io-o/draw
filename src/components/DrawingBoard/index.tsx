/*
 * @Author: Andrew Q
 * @Date: 2022-05-14 18:06:15
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-05-15 19:41:43
 * @Description: DrawingBoard
 */
import { FC, MouseEvent, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'


const DrawingBoard: FC = () => {
  const { color, time } = useSelector((state: RootState) => state.color)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const contextRef = useRef<CanvasRenderingContext2D | null>(null)



  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  const [isDrawing, setDrawStatus] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    canvas.width = 700
    canvas.height = 300

    const rect = canvas.getBoundingClientRect()

    setOffsetX(rect.left)
    setOffsetY(rect.top)

    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    context.lineCap = 'round'
    context.lineWidth = 3
    context.strokeStyle = color

    contextRef.current = context
  }, [time])


  useEffect(() => {
    if (!contextRef.current) return

    contextRef.current.strokeStyle = color

  }, [color])

  const startDrawing = (event: MouseEvent) => {
    const { clientX, clientY } = event
    setDrawStatus(true)
    contextRef.current!.beginPath()

    contextRef.current!.moveTo((clientX - offsetX), (clientY - offsetY))
  }

  const drawing = (event: MouseEvent) => {
    if (!isDrawing) return

    const { clientX, clientY } = event

    contextRef.current!.lineTo((clientX - offsetX), (clientY - offsetY))
    contextRef.current!.stroke()
  }

  const endDrawing = () => {
    setDrawStatus(false)
    contextRef.current!.closePath()
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={drawing}
      onMouseUp={endDrawing}
      className='bg-gray-200'
    />
  )
}

export default DrawingBoard
