import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const weekData = [
  { day: 'L', hours: 8, color: 'bg-foreground' },
  { day: 'M', hours: 7.5, color: 'bg-foreground' },
  { day: 'X', hours: 6, color: 'bg-secondary' },
  { day: 'J', hours: 8.5, color: 'bg-foreground' },
  { day: 'V', hours: 4, color: 'bg-secondary' },
  { day: 'S', hours: 0, color: 'bg-secondary' },
  { day: 'D', hours: 0, color: 'bg-secondary' }
]

export function WeeklyChart() {
  const maxHours = Math.max(...weekData.map((d) => d.hours))

  return (
    <Card className='bg-card border-border'>
      <CardHeader>
        <CardTitle className='text-lg font-semibold text-card-foreground'>Esta Semana</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex items-end justify-between gap-2 h-32 mb-4'>
          {weekData.map((data, index) => (
            <div key={index} className='flex flex-col items-center gap-2 flex-1'>
              <div className='relative w-full'>
                <div
                  className={`${
                    data.color
                  } rounded-t-sm transition-all duration-300 flex items-end justify-center text-xs font-medium ${
                    data.color === 'bg-foreground' ? 'text-background' : 'text-foreground'
                  }`}
                  style={{
                    height: `${(data.hours / maxHours) * 100}px`,
                    minHeight: data.hours > 0 ? '20px' : '4px'
                  }}
                >
                  {data.hours > 0 && <span className='mb-1'>{data.hours}h</span>}
                </div>
              </div>
              <span className='text-xs text-muted-foreground font-medium'>{data.day}</span>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <p className='text-sm text-muted-foreground'>
            Total: <span className='font-medium text-card-foreground'>34h esta semana</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
