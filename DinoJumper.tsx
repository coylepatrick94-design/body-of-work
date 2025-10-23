import React, { useState, useEffect, useRef, useCallback } from 'react'

interface GameObject {
  x: number
  y: number
  width: number
  height: number
}

interface Platform extends GameObject {
  type: 'cursor-block' | 'enterprise-block'
  brand?: string
}

interface Logo extends GameObject {
  collected: boolean
  value: number
}

const DinoJumper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameLoopRef = useRef<number | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'paused' | 'gameOver'>('paused')
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameSpeed, setGameSpeed] = useState(3)
  
  // Game objects
  const [dino, setDino] = useState<GameObject>({ x: 50, y: 300, width: 30, height: 30 })
  const [platforms, setPlatforms] = useState<Platform[]>([])
  const [logos, setLogos] = useState<Logo[]>([])
  const [dinoVelocity, setDinoVelocity] = useState(0)
  const [isJumping, setIsJumping] = useState(false)
  const [keys, setKeys] = useState<Set<string>>(new Set())

  // Game constants
  const GRAVITY = 0.8
  const JUMP_FORCE = -15
  const GROUND_Y = 400
  const CANVAS_WIDTH = 800
  const CANVAS_HEIGHT = 500

  // Enterprise customers (brands for platforms)
  const enterpriseBrands = [
    'Microsoft', 'Google', 'Amazon', 'Meta', 'Apple', 'Netflix', 
    'Uber', 'Airbnb', 'Slack', 'Zoom', 'Salesforce', 'Adobe'
  ]

  // Initialize platforms
  const initializePlatforms = useCallback(() => {
    const newPlatforms: Platform[] = []
    for (let i = 0; i < 20; i++) {
      const x = i * 200 + 300
      const y = GROUND_Y - Math.random() * 100 - 20
      const type = Math.random() > 0.3 ? 'cursor-block' : 'enterprise-block'
      newPlatforms.push({
        x,
        y,
        width: 120,
        height: 20,
        type,
        brand: type === 'enterprise-block' ? enterpriseBrands[i % enterpriseBrands.length] : undefined
      })
    }
    setPlatforms(newPlatforms)
  }, [])

  // Initialize logos
  const initializeLogos = useCallback(() => {
    const newLogos: Logo[] = []
    for (let i = 0; i < 15; i++) {
      const x = i * 250 + 400
      const y = GROUND_Y - Math.random() * 150 - 50
      newLogos.push({
        x,
        y,
        width: 20,
        height: 20,
        collected: false,
        value: Math.floor(Math.random() * 100) + 50
      })
    }
    setLogos(newLogos)
  }, [])

  // Reset game
  const resetGame = useCallback(() => {
    setDino({ x: 50, y: 300, width: 30, height: 30 })
    setDinoVelocity(0)
    setIsJumping(false)
    setScore(0)
    setGameSpeed(3)
    setGameState('playing')
    initializePlatforms()
    initializeLogos()
  }, [initializePlatforms, initializeLogos])

  // Handle click to jump
  const handleCanvasClick = useCallback(() => {
    if (!isJumping && gameState === 'playing') {
      setDinoVelocity(JUMP_FORCE)
      setIsJumping(true)
    }
  }, [isJumping, gameState])

  // Handle key events (only for game control keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys(prev => new Set(prev).add(e.key))
      if (e.key === 'r' && gameState === 'gameOver') {
        resetGame()
      }
      if (e.key === 'p') {
        setGameState(prev => prev === 'playing' ? 'paused' : 'playing')
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys(prev => {
        const newKeys = new Set(prev)
        newKeys.delete(e.key)
        return newKeys
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [gameState, resetGame])

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return

    const gameLoop = () => {
      setDino(prevDino => {
        let newY = prevDino.y + dinoVelocity
        let newVelocity = dinoVelocity + GRAVITY
        let newIsJumping = true

        // Check ground collision
        if (newY + prevDino.height >= GROUND_Y) {
          newY = GROUND_Y - prevDino.height
          newVelocity = 0
          newIsJumping = false
        }

        // Check platform collisions
        platforms.forEach(platform => {
          if (
            prevDino.x < platform.x + platform.width &&
            prevDino.x + prevDino.width > platform.x &&
            newY < platform.y + platform.height &&
            newY + prevDino.height > platform.y &&
            dinoVelocity > 0
          ) {
            newY = platform.y - prevDino.height
            newVelocity = 0
            newIsJumping = false
          }
        })

        // Check logo collisions
        setLogos(prevLogos => {
          const updatedLogos = prevLogos.map(logo => {
            if (
              !logo.collected &&
              prevDino.x < logo.x + logo.width &&
              prevDino.x + prevDino.width > logo.x &&
              newY < logo.y + logo.height &&
              newY + prevDino.height > logo.y
            ) {
              setScore(prev => prev + logo.value)
              return { ...logo, collected: true }
            }
            return logo
          })
          return updatedLogos
        })

        setDinoVelocity(newVelocity)
        setIsJumping(newIsJumping)

        // Move platforms and logos
        setPlatforms(prevPlatforms => 
          prevPlatforms.map(platform => ({
            ...platform,
            x: platform.x - gameSpeed
          }))
        )

        setLogos(prevLogos =>
          prevLogos.map(logo => ({
            ...logo,
            x: logo.x - gameSpeed
          }))
        )

        // Check if dino fell off screen
        if (newY > CANVAS_HEIGHT) {
          setGameState('gameOver')
          if (score > highScore) {
            setHighScore(score)
          }
        }

        // Increase game speed over time
        setGameSpeed(prev => Math.min(prev + 0.001, 8))

        return { ...prevDino, y: newY }
      })

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop)
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameState, dinoVelocity, platforms, gameSpeed, score, highScore])

  // Render game
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // Draw background
    ctx.fillStyle = '#0f0f0f'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    // Draw grid pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)'
    ctx.lineWidth = 1
    for (let x = 0; x < CANVAS_WIDTH; x += 24) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, CANVAS_HEIGHT)
      ctx.stroke()
    }
    for (let y = 0; y < CANVAS_HEIGHT; y += 24) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(CANVAS_WIDTH, y)
      ctx.stroke()
    }

    // Draw ground
    ctx.fillStyle = '#1a1a1a'
    ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y)

    // Draw platforms
    platforms.forEach(platform => {
      if (platform.type === 'cursor-block') {
        ctx.fillStyle = '#06b6d4'
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
        ctx.fillStyle = '#ffffff'
        ctx.font = '12px monospace'
        ctx.fillText('cursor', platform.x + 10, platform.y + 15)
      } else {
        ctx.fillStyle = '#10b981'
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
        ctx.fillStyle = '#ffffff'
        ctx.font = '10px monospace'
        if (platform.brand) {
          ctx.fillText(platform.brand, platform.x + 5, platform.y + 15)
        }
      }
    })

    // Draw logos
    logos.forEach(logo => {
      if (!logo.collected) {
        ctx.fillStyle = '#8b5cf6'
        ctx.fillRect(logo.x, logo.y, logo.width, logo.height)
        ctx.fillStyle = '#ffffff'
        ctx.font = '8px monospace'
        ctx.fillText('💰', logo.x + 6, logo.y + 15)
      }
    })

    // Draw computer cursor
    ctx.fillStyle = '#06b6d4'
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height)
    ctx.fillStyle = '#ffffff'
    ctx.font = '16px monospace'
    ctx.fillText('🖱️', dino.x + 7, dino.y + 20)
    
    // Add a subtle glow effect
    ctx.shadowColor = '#06b6d4'
    ctx.shadowBlur = 10
    ctx.fillStyle = '#06b6d4'
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height)
    ctx.shadowBlur = 0

    // Draw UI
    ctx.fillStyle = '#ffffff'
    ctx.font = '16px monospace'
    ctx.fillText(`Score: ${score}`, 20, 30)
    ctx.fillText(`High Score: ${highScore}`, 20, 50)
    ctx.fillText(`Speed: ${gameSpeed.toFixed(1)}`, 20, 70)

    if (gameState === 'paused') {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      ctx.fillStyle = '#ffffff'
      ctx.font = '24px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('PAUSED', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
      ctx.font = '14px monospace'
      ctx.fillText('Press P to resume', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 30)
      ctx.textAlign = 'left'
    }

    if (gameState === 'gameOver') {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      ctx.fillStyle = '#ffffff'
      ctx.font = '28px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('GAME OVER', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20)
      ctx.font = '16px monospace'
      ctx.fillText(`Final Score: ${score}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 20)
      ctx.fillText('Press R to restart', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50)
      ctx.textAlign = 'left'
    }
  }, [dino, platforms, logos, score, highScore, gameSpeed, gameState])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass rounded-xl p-4 md:p-8 border border-white/5">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-accent-cyan">DinoJumper: Enterprise Edition</h3>
          <p className="text-gray-400 text-sm mb-4">
            A lightweight platformer where you control the Cursor logo to collect enterprise customer logos. 
            Each logo represents a successful deal closed! Jump on branded blocks and collect logos to increase your score.
          </p>
          <div className="text-xs text-gray-500 space-y-1">
            <p><strong>Controls:</strong> Click to jump, P to pause, R to restart</p>
            <p><strong>Objective:</strong> Collect Cursor logos (💰) while jumping on enterprise platforms</p>
          </div>
        </div>
        
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setGameState(gameState === 'playing' ? 'paused' : 'playing')}
            className="px-4 py-2 bg-accent-cyan text-white rounded-lg text-sm font-medium hover:bg-accent-cyan/80 transition-colors mr-2"
          >
            {gameState === 'playing' ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-accent-emerald text-white rounded-lg text-sm font-medium hover:bg-accent-emerald/80 transition-colors"
          >
            Reset
          </button>
        </div>

        <div className="flex justify-center">
          <canvas
            ref={canvasRef}
            width={800}
            height={500}
            className="border border-white/10 rounded-lg bg-dark-900 cursor-pointer"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '60vh' }}
            onClick={handleCanvasClick}
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            <em>"Sometimes even salespeople need a side quest."</em>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DinoJumper
