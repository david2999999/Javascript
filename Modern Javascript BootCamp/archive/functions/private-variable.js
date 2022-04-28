const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        get() {
            return count;
        }
    }
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

const createAdder = (a) => {
    return (b) =>  {
        return a + b;
    }
};

const add10 = createAdder(10);
console.log(add10(10));
console.log(add10(-20));

const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount;
    }
};

const tip20 = createTipper(.2);
const tip30 = createTipper(.3);

console.log(tip20(100));
console.log(tip30(100));