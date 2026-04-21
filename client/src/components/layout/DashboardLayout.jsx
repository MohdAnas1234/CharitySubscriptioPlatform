import Sidebar from './Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#070B18]">
      <Sidebar />

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}