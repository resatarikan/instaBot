

(() => {
    var date1 = new Date();

    //Parameters
    let i = 0; //loop index

    let intervaltime = prompt('Interval', 20000); //interval beetween 2 follows 
    let buttonTextContext = prompt('Text of Follow Button', 'Takip Et');; //Follow button label'Follow' change it for your language
    let loopCount = prompt('Max. Click Count', 3000);; // 0 means loopCount buttonList.length




    //searching for all follow buttons
    var buttonList = []; //follow buttons arraylist
    document.querySelectorAll('button').forEach((e) => {
        if (e.textContent == buttonTextContext) {
            buttonList.push(e);
        }
    });


    if (loopCount == 0 || loopCount > buttonList.length) { loopCount = buttonList.length }
    
    //if everything ok or not, 1 start else cancel
    pirompt = prompt('Interval = ' + intervaltime + ', loopCount= ' + loopCount + ', buttonCount= ' + buttonList.length + '-- 1=go on (devam), 0=cancel(iptal)', 1);
    if (pirompt == 1) {
        console.log('Interval = ' + intervaltime + ', loopCount= ' + loopCount + ', buttonCount= ' + buttonList.length);
        const followInterval = setInterval(() => {
            if (i >= loopCount) { //loop count - it can be reduce for 429 error.
                clearInterval(followInterval);
                var date2 = new Date();

                // To calculate the time difference of two dates 
                var Difference_In_Time = date2.getTime() - date1.getTime();
                console.log('İşlem Tamamlandı=>' + Difference_In_Time);
                return;
            }

            //get next button from arraylist and click
            const nextButton = buttonList[i];
            nextButton.click();
            console.log(i + '/' + loopCount + ' => <' + nextButton.parentElement.parentElement.outerText + '>');    //next count index
            i += 1;

        }, intervaltime);
    } else {
        var date2 = new Date();
        var Difference_In_Time = date2.getTime() - date1.getTime();
        console.log('İptal Edildi=>>' + Difference_In_Time);
    }
})()

