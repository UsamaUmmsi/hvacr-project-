import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true)
          clearInterval(interval)
          // Complete after progress finishes
          setTimeout(() => {
            onComplete && onComplete()
          }, 500)
          return 100
        }
        return prev + Math.random() * 2 + 1
      })
    }, 80)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-all duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Simple Icon and Progress Bar */}
      <div className="text-center">
        {/* Icon */}
        <Zap className="w-16 h-16 text-purple-400 mx-auto mb-8 animate-pulse" />
        
        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Text */}
        <p className="text-white/70 text-sm mt-4">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}

export default Loader