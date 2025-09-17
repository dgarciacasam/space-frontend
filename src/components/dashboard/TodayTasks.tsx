import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const tasks = [
  {
    id: 1,
    title: 'Reunión de equipo',
    time: '09:00 - 10:00',
    status: 'Completada',
    color: 'bg-green-400'
  },
  {
    id: 2,
    title: 'Diseño de interfaz',
    time: '10:30 - 12:00',
    status: 'En progreso',
    color: 'bg-blue-400'
  },
  {
    id: 3,
    title: 'Revisión de código',
    time: '14:00 - 15:30',
    status: 'Pendiente',
    color: 'bg-purple-400'
  },
  {
    id: 4,
    title: 'Documentación',
    time: '16:00 - 17:00',
    status: 'Pendiente',
    color: 'bg-orange-400'
  }
]

export function TodayTasks() {
  return (
    <Card className='bg-card border-border'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle className='text-lg font-semibold text-card-foreground'>Tareas de Hoy</CardTitle>
        <Button size='sm' className='bg-primary hover:bg-primary/90 text-primary-foreground'>
          <Plus className='w-4 h-4 mr-2' />
          Nueva Tarea
        </Button>
      </CardHeader>
      <CardContent className='space-y-4'>
        {tasks.map((task) => (
          <div
            key={task.id}
            className='flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors'
          >
            <div className={`w-3 h-3 rounded-full ${task.color}`} />
            <div className='flex-1'>
              <h3 className='font-medium text-card-foreground'>{task.title}</h3>
              <p className='text-sm text-muted-foreground'>{task.time}</p>
            </div>
            <Badge
              variant={
                task.status === 'Completada'
                  ? 'default'
                  : task.status === 'En progreso'
                  ? 'secondary'
                  : 'outline'
              }
              className={
                task.status === 'Completada'
                  ? 'bg-green-500/30 text-green-200 border-green-500/50'
                  : task.status === 'En progreso'
                  ? 'bg-blue-500/30 text-blue-200 border-blue-500/50'
                  : 'bg-secondary text-foreground border-border'
              }
            >
              {task.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
