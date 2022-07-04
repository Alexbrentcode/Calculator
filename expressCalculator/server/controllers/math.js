const addition = async (req, res) => {
    console.log("We had addition")
    const {num1, num2} = req.body;

    await console.log("data is ", req.body);

    try {
        const sumResult = await (parseInt(num1) + parseInt(num2));

        return res.status(200).json({"result": sumResult})
    } catch(err){
        console.log("err")
    }
}

const subtraction = async (req, res) => {
    console.log("We had subtraction")
    const {num1, num2} = req.body;

    await console.log("data is ", req.body);
    try {
        const minusResult = (parseInt(num1) - parseInt(num2))
        console.log("Sum result is ", minusResult);
        res.status(200).json({result: minusResult})
    } catch(err){
        console.log("err")
    }
}

const multiplication = async (req, res) => {
    console.log("We had subtraction")
    const {num1, num2} = req.body;

    await console.log("data is ", req.body);
    try {
        const minusResult = (parseInt(num1) * parseInt(num2))
        console.log("Sum result is ", minusResult);
        res.status(200).json({result: minusResult})
    } catch(err){
        console.log("err")
    }
}

const division = async (req, res) => {
    console.log("We had subtraction")
    const {num1, num2} = req.body;

    await console.log("data is ", req.body);
    try {
        const minusResult = (parseInt(num1) / parseInt(num2))
        console.log("Sum result is ", minusResult);
        res.status(200).json({result: minusResult})
    } catch(err){
        console.log("err")
    }
}

module.exports = {
    addition,
    subtraction,
    multiplication,
    division
}