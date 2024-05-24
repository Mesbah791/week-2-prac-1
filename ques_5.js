const findNumbers = () => {
    const arr = []
    for(let i = 0; i < 50; i++){
        if(i % 3 || i % 5){
            arr.push(i)
        }
    }

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

findNumbers()