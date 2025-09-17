import { Calendar, BarChart3, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function QuickActions() {
  return (
    <Card className='bg-card border-border'>
      <CardHeader>
        <CardTitle className='text-lg font-semibold text-card-foreground'>
          Acciones Rápidas
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-3'>
        <Button
          variant='outline'
          className='w-full justify-start border-border text-card-foreground hover:bg-secondary bg-secondary'
        >
          <Calendar className='w-4 h-4 mr-3' />
          Ver Calendario
        </Button>

        <Button
          variant='outline'
          className='w-full justify-start border-border text-card-foreground hover:bg-secondary bg-secondary'
        >
          <BarChart3 className='w-4 h-4 mr-3' />
          Reportes
        </Button>

        <Button
          variant='outline'
          className='w-full justify-start border-border text-card-foreground hover:bg-secondary bg-secondary'
        >
          <Settings className='w-4 h-4 mr-3' />
          Configuración
        </Button>
      </CardContent>
    </Card>
  )
}
