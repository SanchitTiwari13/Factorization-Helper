const firstTerm = document.getElementById("firstTerm");
const secondTerm = document.getElementById("secondTerm");
const thirdTerm = document.getElementById("thirdTerm");
const submitBtn = document.getElementById("submitBtn");
const resultPara = document.getElementById("result");

submitBtn.onclick = () => {
    let coefficent_of_x_square = Number(firstTerm.value)
    let coefficent_of_x = Number(secondTerm.value)
    let last_term = Number(thirdTerm.value)

    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
            if (i*j === coefficent_of_x_square * last_term && i+j === coefficent_of_x) {
                let first_splitted_term = i;
                let second_splitted_term = j;
                resultPara.innerText = `First splitted term = ${first_splitted_term} \n Second splitted term = ${second_splitted_term}`
            }
        }
    }
}
