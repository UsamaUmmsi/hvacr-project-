import { useState, useEffect } from 'react'
import { Thermometer, Snowflake, Wind, Zap, Power } from 'lucide-react'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const steps = [
    { icon: Power, color: 'text-blue-400' },
    { icon: Thermometer, color: 'text-red-400' },
    { icon: Snowflake, color: 'text-cyan-400' },
    { icon: Wind, color: 'text-green-400' },
    { icon: Zap, color: 'text-purple-400' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true)
          clearInterval(interval)
          setTimeout(() => {
            onComplete && onComplete()
          }, 500)
          return 100
        }
        
        const newStep = Math.floor(((prev + Math.random() * 2 + 1) / 100) * steps.length)
        if (newStep !== currentStep && newStep < steps.length) {
          setCurrentStep(newStep)
        }
        
        return prev + Math.random() * 2 + 1
      })
    }, 80)

    return () => clearInterval(interval)
  }, [currentStep, onComplete, steps.length])

  const CurrentIcon = steps[currentStep]?.icon || Zap
  const currentColor = steps[currentStep]?.color || 'text-white'

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-all duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Icon and Progress Bar */}
      <div className="text-center">
        {/* Rotating Icon */}
        <CurrentIcon className={`w-16 h-16 ${currentColor} mx-auto mb-8 animate-pulse transition-colors duration-300`} />
        
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