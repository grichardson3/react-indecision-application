const user = {
    name: "Gareth",
    cities: ["London", "St. Thomas"],
    printPlaces(){

        // With map

        const cityMsg = this.cities.map((city) => city + ', Ontario, Canada')
        return cityMsg;

        // Without map, LOTS OF WORK

        /*let array = new Array();
        let inc = 0;
        this.cities.forEach((city) => {
            city = `${city}, Ontario, Canada`;
            array[inc] = city;
            inc = inc + 1;
        });
        return array;*/
    }
}

// console.log(user.printPlaces());

const multiplier = {
    nums: [3, 4],
    multiplyBy: 3,
    multiply(){
        const newArray = this.nums.map((num) => {
            return num * this.multiplyBy;
        });
        return newArray;
    }
}

console.log(multiplier.multiply());