/*
claculation;
*/
/*
problem -1;
*/
document.getElementById('btn-triangle').addEventListener('click', function () {
    const triangleInputFieldb = document.getElementById('triangle-inputfield1');
    const triangleInputField1String = triangleInputFieldb.value;
    const triangleInputb = parseFloat(triangleInputField1String);


    const triangleInputFieldh = document.getElementById('triangle-inputfieldh');
    const triangleInputFieldhString = triangleInputFieldh.value;
    const triangleInputh = parseFloat(triangleInputFieldhString);





    const triangleFormula = 0.5 * triangleInputb * triangleInputh
    console.log(triangleFormula);


    // // if (triangleInputh == Number) {
    // //     const triangleFormula = 0.5 * triangleInputb * triangleInputh
    // //     console.log(triangleFormula);
    // }
    // else {
    //     console.log('please Enter the number');
    // }

})




/*
problem -2;
"rectangle"
*/

document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleInputFieldW = document.getElementById('rectangle-input-fild');
    const rectangleInputFieldWString = rectangleInputFieldW.value;
    const rectangleInput = parseFloat(rectangleInputFieldWString);
    

    const rectangleInputFieldi = document.getElementById('rectangle-input-fildI');
    const rectangleInputFieldiString = rectangleInputFieldi.value;
    const rectangleInputI = parseFloat(rectangleInputFieldiString);
    

    const rectangleFormula = rectangleInput * rectangleInputI;
    console.log(rectangleFormula);

})