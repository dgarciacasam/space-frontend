import { Clock, CheckCircle, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TodaySummary() {
  return (
    <Card className='bg-card border-border'>
      <CardHeader>
        <CardTitle className='text-lg font-semibold text-card-foreground'>Resumen de Hoy</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-blue-400/20 rounded-lg flex items-center justify-center'>
              <Clock className='w-4 h-4 text-blue-400' />
            </div>
            <span className='text-muted-foreground'>Tiempo trabajado</span>
          </div>
          <span className='font-semibold text-card-foreground'>6h 45m</span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center'>
              <CheckCircle className='w-4 h-4 text-green-400' />
            </div>
            <span className='text-muted-foreground'>Tareas completadas</span>
          </div>
          <span className='font-semibold text-card-foreground'>3/6</span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center'>
              <TrendingUp className='w-4 h-4 text-purple-400' />
            </div>
            <span className='text-muted-foreground'>Productividad</span>
          </div>
          <span className='font-semibold text-card-foreground'>85%</span>
        </div>

        <div className='pt-4 border-t border-border'>
          <div className='flex items-center justify-between text-sm'>
            <span className='text-muted-foreground'>Meta diaria</span>
            <span className='text-card-foreground'>6h 45m / 8h</span>
          </div>
          <div className='mt-2 w-full bg-secondary rounded-full h-2'>
            <div className='bg-foreground h-2 rounded-full' style={{ width: '85%' }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
