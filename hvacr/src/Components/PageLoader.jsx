import { Wind } from 'lucide-react'

const PageLoader = ({ isVisible = false }) => {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-40 transition-all duration-300">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4 animate-spin">
          <Wind className="w-8 h-8 text-white" />
        </div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  )
}

export default PageLoader