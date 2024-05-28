const FirstNumber = 3, SecondNumber = 4, ThirdNumber = 1;

function LargestAmongThree(firstNum: Number, secondNum: Number, thirdNum: Number): Number {
    if (firstNum > secondNum && firstNum > thirdNum) {
        return firstNum;
    } else if (firstNum < secondNum && secondNum > thirdNum) {
        return secondNum;
    } else if (thirdNum > firstNum && thirdNum > secondNum) {
        return thirdNum
    }
}

const LargestNumber: Number = LargestAmongThree(FirstNumber, SecondNumber, ThirdNumber);
console.log("The largest among three is " + LargestNumber);