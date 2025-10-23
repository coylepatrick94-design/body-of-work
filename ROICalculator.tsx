import React, { useState } from 'react'

const ROICalculator: React.FC = () => {
  const [developers, setDevelopers] = useState(50)
  const [avgSalary, setAvgSalary] = useState(120000)
  const [efficiencyGain, setEfficiencyGain] = useState(25)
  const [cursorCost, setCursorCost] = useState(20)

  // Calculations
  const totalAnnualSalary = developers * avgSalary
  const timeSavings = (totalAnnualSalary * efficiencyGain) / 100
  const annualCursorCost = developers * cursorCost * 12
  const netSavings = timeSavings - annualCursorCost
  const roiPercentage = ((netSavings / annualCursorCost) * 100).toFixed(0)
  const paybackMonths = (annualCursorCost / (timeSavings / 12)).toFixed(1)

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass rounded-xl p-8 border border-white/5">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 text-accent-cyan">ROI Calculator</h3>
          <p className="text-gray-400 text-sm mb-4">
            Calculate the return on investment for Cursor in your organization. Adjust the inputs below to see real-time ROI calculations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Input Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Number of Developers
              </label>
              <input
                type="range"
                min="5"
                max="500"
                value={developers}
                onChange={(e) => setDevelopers(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5</span>
                <span className="text-accent-cyan font-medium">{developers}</span>
                <span>500</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Average Developer Salary ($)
              </label>
              <input
                type="range"
                min="60000"
                max="250000"
                step="10000"
                value={avgSalary}
                onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$60K</span>
                <span className="text-accent-emerald font-medium">${avgSalary.toLocaleString()}</span>
                <span>$250K</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Efficiency Gain (%)
              </label>
              <input
                type="range"
                min="10"
                max="50"
                value={efficiencyGain}
                onChange={(e) => setEfficiencyGain(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10%</span>
                <span className="text-accent-blue font-medium">{efficiencyGain}%</span>
                <span>50%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cursor Cost per Developer/Month ($)
              </label>
              <input
                type="range"
                min="10"
                max="80"
                value={cursorCost}
                onChange={(e) => setCursorCost(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$10</span>
                <span className="text-accent-violet font-medium">${cursorCost}</span>
                <span>$80</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="glass rounded-lg p-4 border border-accent-cyan/20">
              <h4 className="text-lg font-semibold text-accent-cyan mb-2">Annual ROI</h4>
              <div className="text-3xl font-bold text-white">{roiPercentage}%</div>
              <div className="text-sm text-gray-400">Return on Investment</div>
            </div>

            <div className="glass rounded-lg p-4 border border-accent-emerald/20">
              <h4 className="text-lg font-semibold text-accent-emerald mb-2">Net Savings</h4>
              <div className="text-3xl font-bold text-white">${netSavings.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Annual cost savings</div>
            </div>

            <div className="glass rounded-lg p-4 border border-accent-blue/20">
              <h4 className="text-lg font-semibold text-accent-blue mb-2">Payback Period</h4>
              <div className="text-3xl font-bold text-white">{paybackMonths}</div>
              <div className="text-sm text-gray-400">Months to break even</div>
            </div>

            <div className="glass rounded-lg p-4 border border-accent-violet/20">
              <h4 className="text-lg font-semibold text-accent-violet mb-2">Time Value</h4>
              <div className="text-3xl font-bold text-white">${timeSavings.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Annual time savings value</div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 p-4 glass rounded-lg border border-white/10">
          <h4 className="text-lg font-semibold text-white mb-2">Summary</h4>
          <p className="text-gray-400 text-sm">
            With {developers} developers at an average salary of ${avgSalary.toLocaleString()}, 
            a {efficiencyGain}% efficiency gain through Cursor would save your organization 
            <span className="text-accent-emerald font-medium"> ${netSavings.toLocaleString()}</span> annually, 
            with a <span className="text-accent-cyan font-medium">{roiPercentage}% ROI</span> and 
            payback in <span className="text-accent-blue font-medium">{paybackMonths} months</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ROICalculator
