
function seeTech(data) { 
    console.log(data)
    let techNumbers = document.querySelectorAll('.numberDIV');
    let num = document.querySelector('span.tech-num');
    let techTextH3 = document.querySelector('.tech-text h3');
    let techTextH2 = document.querySelector('.tech-text h2');
    let techTextP = document.querySelector('.tech-text p');
    let textImg = document.querySelector('.tech-img');
2
    techNumbers[0].style.backgroundColor = "white"
    techNumbers[0].style.color = "black"

    for (let i = 0; i < techNumbers.length; i++) {

        
        
        techNumbers[i].addEventListener("click", function () { 
            
            for (let i = 0; i < techNumbers.length; i++) {
                techNumbers[i].style.backgroundColor = "transparent"
                techNumbers[i].style.color = "white"
                
            }
            console.log(this.id);
            num.innerHTML = `0${i + 1}`
            techTextH2.innerHTML = `${data.technology[this.id].name}`
            techTextP.innerHTML = `${data.technology[this.id].description}`
            textImg.setAttribute("src", `${data.technology[this.id].images.landscape}`)
            console.log(num);

            

            techNumbers[this.id].style.backgroundColor = "white"
            techNumbers[this.id].style.color = "black"











        })
        
    }

   
}