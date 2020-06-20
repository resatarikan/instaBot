(() => {

    //Parameters
    let i = 0; //loop index
    let intervaltime = 1500; //interval beetween 2 follows
    let buttonTextContext = 'Follow'; //'Takip Et' change it for your language

    //searching for all follow buttons
    var buttonList = []; //follow buttons arraylist
    document.querySelectorAll('button').forEach((e) => {
        if (e.textContent.includes(buttonTextContext)) {
            buttonList.push(e);
        }
    });

    //setting for interval
    const followInterval = setInterval(() => {
        if (i >= buttonList.length) { //loop count - it can be reduce for 429 error.
            clearInterval(followInterval);
            return;
        }

        //get next button from arraylist and click
        const nextButton = buttonList[i];
        nextButton.click();

        //next count index
        i += 1;

    }, intervaltime)
})()
