import { Header } from '@/components/dashboard/Header'
import { ActiveTimer } from '@/components/dashboard/ActiveTimer'
import { TodayTasks } from '@/components/dashboard/TodayTasks'
import { TodaySummary } from '@/components/dashboard/TodaySummary'
import { WeeklyChart } from '@/components/dashboard/WeeklyChart'
import { QuickActions } from '@/components/dashboard/QuickActions'

export default function Dashboard() {
  return (
    <div className='bg-background min-h-screen'>
      <Header />
      <main className='container mx-auto px-6 py-8'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {/* Left Column */}
          <div className='space-y-6 lg:col-span-2'>
            <ActiveTimer />
            <TodayTasks />
          </div>

          {/* Right Column */}
          <div className='space-y-6'>
            <TodaySummary />
            <WeeklyChart />
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  )
}
