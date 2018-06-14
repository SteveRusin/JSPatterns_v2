const myModule = (function () {
    // private func getRandomNumber
    const getRandomNumber = () => parseInt(Math.random() * 100);
    const saySomething = () => console.log('Hello world');
    const doMath = () => {
        const firsNumber = getRandomNumber();
        const secondNumber = getRandomNumber();

        console.log(`${firsNumber} plus ${secondNumber} is ${firsNumber + secondNumber}`);
    }

    return {
        saySomething,
        doMath
    }
}());
