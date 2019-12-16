const john = {
    name: 'JohnsFamily',
    billValues: [124, 48, 268, 180, 42],
    tipValues: [],
    fullValues: [],
    calculateTip: function () {
        for (let i = 0; i < this.billValues.length; i++) {
            switch (true) {
                case (this.billValues[i] < 50):
                    // console.log(this.billValues[i] + ' manji od 50');
                    this.tipValues.push(this.billValues[i] * .2);
                    this.fullValues.push(this.billValues[i] * .2 + this.billValues[i]);
                    break;
                case (this.billValues[i] >= 50 && this.billValues[i] < 200):
                    // console.log(this.billValues[i] + ' izmedju 50 i 200');
                    this.tipValues.push(this.billValues[i] * .15);
                    this.fullValues.push(this.billValues[i] * .15 + this.billValues[i]);
                    break;
                default:
                    // console.log(this.billValues[i] + ' preko 200');
                    this.tipValues.push(this.billValues[i] * .1);
                    this.fullValues.push(this.billValues[i] * .1 + this.billValues[i]);
            }
        }
    }
};
john.calculateTip();
console.log(john);

const mark = {
    name: 'MarksFamily',
    billValues: [77, 375, 110, 45],
    tipValues: [],
    fullValues: [],
    calculateTip: function () {
        for (let i = 0; i < this.billValues.length; i++) {
            switch (true) {
                case (this.billValues[i] < 100):
                    // console.log(this.billValues[i] + ' manji od 100');
                    this.tipValues.push(this.billValues[i] * .2);
                    this.fullValues.push(this.billValues[i] * .2 + this.billValues[i]);
                    break;
                case (this.billValues[i] >= 100 && this.billValues[i] < 300):
                    // console.log(this.billValues[i] + ' izmedju 100 i 300');
                    this.tipValues.push(this.billValues[i] * .1);
                    this.fullValues.push(this.billValues[i] * .1 + this.billValues[i]);
                    break;
                default:
                    // console.log(this.billValues[i] + ' preko 300');
                    this.tipValues.push(this.billValues[i] * .25);
                    this.fullValues.push(this.billValues[i] * .25 + this.billValues[i]);
            }
        }
    }
};
mark.calculateTip();
console.log(mark);

console.log('------------------------------------');


function avgBill(obj) {
    obj.avgBill = 0;
    for (let i = 0; i < obj.tipValues.length; i++) {
        // console.log('ime objekta ' + obj.name + ' - clan niza ' + i + ': ' + obj.tipValues[i]);
        obj.avgBill += obj.tipValues[i];
    }
    obj.avgBill = obj.avgBill / obj.tipValues.length;

}
avgBill(john);
avgBill(mark);
if (john.avgBill > mark.avgBill) {
    console.log(`johns family payed highest bill ${john.avgBill}$`);
} else {
    console.log(`marks family payed highest bill ${mark.avgBill}$`);
}