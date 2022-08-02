import data from "../mockData.json"

function BalanceBoard() {

    const balance = data.balance
    const lastSpend = data.lastspend

    return (
        <div className="balance-board">
            <div className="balance">
                <h3>
                    Balance
                </h3>
                <p>
                    $ {balance}
                </p>
            </div>
            <div className="last-spend">
                <h3>
                    Last Spend
                </h3>
                <p>
                    $ {lastSpend}
                </p>   
            </div>

        </div>
    )
}

export default BalanceBoard;