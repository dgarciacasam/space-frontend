import { useState, useEffect } from 'react'
import { Play, Pause, Square } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ActiveTimer() {
  const [isRunning, setIsRunning] = useState(true)
  const [time, setTime] = useState({ hours: 2, minutes: 34, seconds: 15 })

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          let newSeconds = prev.seconds + 1
          let newMinutes = prev.minutes
          let newHours = prev.hours

          if (newSeconds >= 60) {
            newSeconds = 0
            newMinutes += 1
          }
          if (newMinutes >= 60) {
            newMinutes = 0
            newHours += 1
          }

          return { hours: newHours, minutes: newMinutes, seconds: newSeconds }
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (num: number) => num.toString().padStart(2, '0')

  return (
    <Card className='bg-card border-border'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='text-lg font-semibold text-card-foreground'>
          Cronómetro Activo
        </CardTitle>
        <span className='text-sm text-muted-foreground bg-muted px-2 py-1 rounded'>
          {isRunning ? 'Activo' : 'Pausado'}
        </span>
      </CardHeader>
      <CardContent className='text-center space-y-6'>
        <div className='text-5xl font-mono font-bold text-card-foreground'>
          {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
        </div>
        <p className='text-muted-foreground'>Diseño de interfaz</p>

        <div className='flex items-center justify-center gap-3'>
          <Button
            onClick={() => setIsRunning(!isRunning)}
            className='bg-primary hover:bg-primary/90 text-primary-foreground'
          >
            {isRunning ? (
              <>
                <Pause className='w-4 h-4 mr-2' />
                Pausar
              </>
            ) : (
              <>
                <Play className='w-4 h-4 mr-2' />
                Iniciar
              </>
            )}
          </Button>

          <Button
            variant='outline'
            onClick={() => {
              setIsRunning(false)
              setTime({ hours: 0, minutes: 0, seconds: 0 })
            }}
            className='border-border text-card-foreground hover:bg-secondary bg-secondary'
          >
            <Square className='w-4 h-4 mr-2' />
            Detener
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
