export const sumNumbers = async (first, second) => {
    console.log("Summing numbes in the API", first, second)
    const response = await fetch("http://localhost:5000/math/add", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({num1: first, num2: second})
    
        }).then(res => {
            return res.text()
        })
        const parsedRes = await JSON.parse(response);
        return parsedRes;

    }

export const subtractNumbers = async (first, second) => {
    console.log("Minusing numbes in the API", first, second)
    const response = await fetch("http://localhost:5000/math/subtract", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({num1: first, num2: second})
    
        }).then(res => {
            return res.text()
        })
        const parsedRes = await JSON.parse(response);
        return parsedRes;

    }

export const multiplyNumbers = async (first, second) => {
    console.log("Minusing numbes in the API", first, second)
    const response = await fetch("http://localhost:5000/math/multiply", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({num1: first, num2: second})
    
        }).then(res => {
            return res.text()
        })
        const parsedRes = await JSON.parse(response);
        return parsedRes;

    }

export const divideNumbers = async (first, second) => {
    console.log("Minusing numbes in the API", first, second)
    const response = await fetch("http://localhost:5000/math/divide", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({num1: first, num2: second})
    
        }).then(res => {
            return res.text()
        })
        const parsedRes = await JSON.parse(response);
        return parsedRes;

    }



