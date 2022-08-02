import {useState} from 'react'

import ToolBar from './components/ToolBar'
import MonthlySpendBoard from './components/MonthlySpendBoard'
import DistributeBoard from './components/DistrubuteBoard'
import BalanceBoard from './components/BalanceBoard'

function App() {

    const [currentPage, setCurrentPage] = useState('dashboard')

    return (
        <div className="main">
            <ToolBar />
            <div className="main-board">
                <BalanceBoard />
                <DistributeBoard />
                <MonthlySpendBoard />
            </div> 
        </div>
    
  )
}

export default App;
