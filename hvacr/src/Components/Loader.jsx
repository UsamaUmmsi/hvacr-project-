import { useState, useEffect } from 'react'
import { Thermometer, Snowflake, Wind, Zap, Power } from 'lucide-react'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showReveal, setShowReveal] = useState(false)

  const steps = [
    { icon: Power, label: 'Initializing System', color: 'text-blue-400', bgColor: 'from-blue-500/20 to-blue-600/20' },
    { icon: Thermometer, label: 'Heating Systems Online', color: 'text-red-400', bgColor: 'from-red-500/20 to-red-600/20' },
    { icon: Snowflake, label: 'Cooling Systems Ready', color: 'text-cyan-400', bgColor: 'from-cyan-500/20 to-cyan-600/20' },
    { icon: Wind, label: 'Ventilation Active', color: 'text-green-400', bgColor: 'from-green-500/20 to-green-600/20' },
    { icon: Zap, label: 'All Systems Operational', color: 'text-purple-400', bgColor: 'from-purple-500/20 to-purple-600/20' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true)
          // Start reveal animation after a short delay
          setTimeout(() => {
            setShowReveal(true)
            // Complete the loading process
            setTimeout(() => {
              onComplete && onComplete()
            }, 1500) // Wait for reveal animation to complete
          }, 1000)
          clearInterval(interval)
          return 100
        }
        
        // Update current step based on progress
        const newStep = Math.floor((prev / 100) * steps.length)
        if (newStep !== currentStep && newStep < steps.length) {
          setCurrentStep(newStep)
        }
        
        return prev + Math.random() * 2 + 0.5
      })
    }, 80)

    return () => clearInterval(interval)
  }, [currentStep, onComplete, steps.length])

  const CurrentIcon = steps[currentStep]?.icon || Power
  const currentColor = steps[currentStep]?.color || 'text-white'
  const currentBgGradient = steps[currentStep]?.bgColor || 'from-blue-500/20 to-blue-600/20'

  return (
    <>
      {/* Main Loader */}
      <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-all duration-1000 ${showReveal ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid-background"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="text-center relative z-10 max-w-lg mx-auto px-8">
          
          {/* Company Logo */}
          <div className="mb-12 animate-fade-in-up">
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 w-28 h-28 mx-auto">
                <div className="w-full h-full border-2 border-white/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 border border-white/10 rounded-full animate-spin-reverse"></div>
              </div>
              
              {/* Logo Container */}
              <div className="relative w-28 h-28 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center mx-auto border border-white/20 shadow-2xl backdrop-blur-xl">
                <div className="text-center">
                  <span className="text-white font-bold text-xl tracking-wider">HVAC</span>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-1"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-white mt-6 mb-2 tracking-wide">
              Cool<span className="text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">Air</span>
            </h1>
            <p className="text-gray-400 text-sm uppercase tracking-widest">HVACR Solutions</p>
          </div>

          {/* Dynamic System Status */}
          <div className="mb-10">
            <div className={`relative w-32 h-32 mx-auto mb-6 bg-gradient-to-br ${currentBgGradient} rounded-full border border-white/10 backdrop-blur-xl`}>
              {/* Rotating Rings */}
              <div className="absolute inset-0 border-2 border-transparent border-t-white/30 rounded-full animate-spin"></div>
              <div className="absolute inset-3 border border-transparent border-r-white/20 rounded-full animate-spin-reverse"></div>
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <CurrentIcon className={`w-16 h-16 ${currentColor} animate-pulse-glow`} />
              </div>
              
              {/* Progress Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className="transition-all duration-300"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-center space-x-3 mb-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-500 ${
                    index <= currentStep ? 'scale-125' : 'scale-100'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index <= currentStep 
                      ? 'bg-gradient-to-r from-indigo-400 to-purple-400 shadow-lg shadow-purple-500/50' 
                      : 'bg-white/20'
                  }`} />
                  {index <= currentStep && (
                    <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-ping opacity-75" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Status Text */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium text-lg animate-text-glow">
                {steps[currentStep]?.label || 'Initializing...'}
              </span>
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
                {Math.round(progress)}%
              </span>
            </div>
            
            {/* Enhanced Progress Bar */}
            <div className="relative w-full bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/20">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Loading Animation */}
          <div className="text-gray-400 text-sm">
            <span className="animate-pulse">Preparing your comfort experience</span>
            <span className="animate-bounce ml-1">...</span>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
      </div>

      {/* Circle Reveal Overlay */}
      {showReveal && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div className="circle-reveal-overlay"></div>
        </div>
      )}
    </>
  )
}

export default Loader