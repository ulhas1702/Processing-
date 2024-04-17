    const progress = document.getElementById('progress')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    let circles = document.querySelectorAll('.circle')
    //const number = document.getElementById('user')
    //const btn = document.getElementById('button')
    const text = document.getElementById('name')
    const btn1 = document.getElementById('button1')
    const inputElement = document.getElementById('inputElement')
    //const drop = document.getElementById('drop')
    const progressContainer = document.querySelector('.progress-container');

    
    const circleCount = document.getElementById('circleCount')
    circleCount.addEventListener('change', function() {
        const count = parseInt(this.value);
        console.log(count)

        progressContainer.innerHTML = '';
        
        for (let i = 1; i <= count; i++) {
            let circle = document.createElement('div');
            circle.classList.add('circle');
            circle.textContent = i;
            progressContainer.appendChild(circle);
        }
       
        
        circles = document.querySelectorAll('.circle')
        
        //circles[0].classList.add('active')
        progressContainer.querySelector('.circle').classList.add('active');

    });


    let inputname = 0

    function showname(inputname){
        text.innerText = inputname
        return inputname
    }

    //console.log(inputname)

    //btn.addEventListener('click', () => {
        
    //})

    //drop.addEventListener('input', (e) => {
    //    inputname = parseInt(e.target.value)
    //})

    inputElement.addEventListener('input', (e) => {
        inputname = parseInt(e.target.value)
    })

    let currentActive = 1

    btn1.addEventListener("click", () => {
        console.log(inputname)
        showname(inputElement.value)
        for (let i = 2; i <= inputname; i++) {
            let circle = document.createElement('div');
            circle.classList.add('circle');
            circle.textContent = i;
            progressContainer.appendChild(circle);
        }

        if(inputname > maxSteps){
            inputname = maxSteps
        }
        update1()
    })


    next.addEventListener("click", () => {
        currentActive++;
        const maxSteps = parseInt(circleCount.value);
        if (currentActive > maxSteps) {
            currentActive = maxSteps;
        }
        update();
    });

    prev.addEventListener("click", () => {
        currentActive--
        
        if(currentActive < 1){
            currentActive = 1
        }

        update()
    })

    function update1(){
        circles.forEach((circle, idx) => {
            if(idx < inputname){
            circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
        })

        const actives = document.querySelectorAll('.active')

        progress.style.width = (circles.length - 1) / (actives.length - 1) * 100 + '%'

        if(inputname === 1){
            prev.disabled = true
        } else if(inputname === parseInt(circleCount.value)){
            next.disabled = true
        } else{
            prev.disabled = false
            next.disabled = false
        }
    }

    function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    //console.log(circles)

    const actives = document.querySelectorAll('.active');

    //const barWidth =(circles.length/actives.length) * 100 + '%'
    progress.style.width = (circles.length -1) / (actives.length - 1) * 100 + '%'

    if( currentActive === 1){
        prev.disabled = true
    } else if(currentActive === parseInt(circleCount.value)){
        next.disabled = true
    } else{
        next.disabled = false
        prev.disabled = false  
    }
}