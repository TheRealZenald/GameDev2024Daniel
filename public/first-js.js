<br>
<div id="myText" class="container">
</div> <br>
<div class="container">
    This uses object to store data and display it. Results stored in an array and console logged.
    </div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css" rel="stylesheet" />


<link rel="stylesheet" href="https://theactualzenaldv2.github.io/Game-Development-2023/assignments/templates/barebones.css">
<script src="https://theactualzenaldv2.github.io/Game-Development-2023/assignments/templates/barebones.js"></script>
i 100 percesnt made this

<script>


    function printResults(x){
        const textElement = document.getElementById('myText')
        let loopComplete = false;
        let results = []
        const animalData = {
            kitten: 'kitten',
            age: 0,
        }
        for(let i = 0; i<= x; i++){
            if(i === x){
                loopComplete = true;
                textElement.innerHTML += `<div class="complete">${animalData.kitten}  Age: ${animalData.age} Kitten is now a senior.</div><br>`

            } else {
                textElement.innerHTML += `${animalData.kitten}  Age: ${animalData.age} <br>`

            }
            animalData.age++
            
            if(loopComplete){
                results = [];
                results = animalData;
                console.log(results)
            }
        } 

    }
    printResults(10);
</script>

<style>
    div {
        margin: 0 auto;
        text-align: center;
    }
    .complete {
        color: rgb(9, 255, 71);
        background-color: black;
    }
    
</style>
