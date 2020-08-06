const randomizer = (event) => {
    let randomNumbers = [];
    while(randomNumbers.length<3&&randomNumbers.length<event.vendors.length){
        let r = Math.floor(Math.random()*(event.vendors.length));
        if (randomNumbers.indexOf(r)===-1){
            randomNumbers.push(r);
        }
        console.log(randomNumbers);
    }

}
randomizer(event);