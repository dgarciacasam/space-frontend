import { Bell, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function Header() {
  return (
    <header className='border-border bg-background border-b'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='bg-foreground flex h-8 w-8 items-center justify-center rounded-lg'>
              <div className='bg-background h-4 w-4 rounded-sm' />
            </div>
            <h1 className='text-foreground text-xl font-bold'>Space</h1>
          </div>

          <div className='flex items-center gap-4'>
            <Button variant='ghost' size='icon' className='text-foreground hover:bg-secondary'>
              <Bell className='h-5 w-5' />
            </Button>

            <div className='flex items-center gap-2'>
              <Avatar className='h-8 w-8'>
                <AvatarFallback className='bg-secondary text-foreground text-sm'>JD</AvatarFallback>
              </Avatar>
              <span className='text-foreground text-sm font-medium'>Invitado</span>
              <ChevronDown className='text-muted-foreground h-4 w-4' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
