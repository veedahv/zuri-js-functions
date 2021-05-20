const convertFahrToCelsius = (x) => {
    let yCelsius = Math.round(((x - 32) / 1.8) * 10000) / 10000;
    if (Number.isNaN(yCelsius) || x === '' || x === ' ' || typeof (x) === 'boolean') {
        if (Array.isArray(x)) {
            console.log(`${JSON.stringify(x)} is not a valid number but a/an array`);
            return `${JSON.stringify(x)} is not a valid number but a/an array`;
        } else {
            console.log(`${JSON.stringify(x)} is not a valid number but a/an ${typeof (x)}`);
            return `${JSON.stringify(x)} is not a valid number but a/an ${typeof (x)}`;
        }
    } else {
        console.log(yCelsius);
        return yCelsius;
    }
}

const checkYuGiOh = (n) => {
    let yuGiOhArr = [];
    if (Number.isNaN(parseInt(n)) || n === '' || n === ' ' || Array.isArray(n)) {
        console.log(`invalid parameter: ${JSON.stringify(n)}`);
        return `invalid parameter: ${JSON.stringify(n)}`;
    } else {
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                yuGiOhArr.push('yu-gi-oh');
            } else if (i % 2 === 0 && i % 3 === 0) {
                yuGiOhArr.push('yu-gi');
            } else if (i % 2 === 0 && i % 5 === 0) {
                yuGiOhArr.push('yu-oh');
            } else if (i % 3 === 0 && i % 5 === 0) {
                yuGiOhArr.push('gi-oh');
            } else if (i % 2 === 0) {
                yuGiOhArr.push('yu');
            } else if (i % 3 === 0) {
                yuGiOhArr.push('gi');
            } else if (i % 5 === 0) {
                yuGiOhArr.push('oh');
            } else {
                yuGiOhArr.push(i);
            }
        }
        console.log(yuGiOhArr);
        return yuGiOhArr;
    }
}

