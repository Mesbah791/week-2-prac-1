let totalEarning = 0
const monthlySavings = (payments, livingCost) => {
    for(let i = 0; i < payments.length; i++) {
        totalEarning += payments[i]
    }

    for(let i = 0; i < payments.length; i++) {
        if(payments[i] >= 3000) {
            totalEarning -= payments[i] * (20/100)
        }
    }

    totalEarning -= livingCost
    if(totalEarning >= 0){
        console.log("Total Savings: ", totalEarning)
    }
    else {
        console.log("Earn More")
    }
}

monthlySavings([1100, 4500, 2500, 400, 700], 6200)