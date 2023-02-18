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

    // triangle value;
    const triangleField = document.getElementById('triangle-text');
    const triangleText = triangleField.innerText;

    if(isNaN(triangleInputb) || triangleInputb === '' || triangleInputb <=0 || isNaN(triangleInputh) || triangleInputh == '' || triangleInputh <=0){
        return alert ('please valid number');
    }
    else{
        const triangleFormula = 0.5 * triangleInputb * triangleInputh


    const tableContainer = document.getElementById('table-container');

    const triangleTr = document.createElement('tr');
    triangleTr.innerHTML = ` 
    
        <td>${1}</td>
        <td>${triangleText}</td>
        <td>${triangleFormula}cm<sup>2</sup></td>
        <td>
            <button class = "bg-yellow-400 hover:bg-violet-400 rounded px-4 py-2">Convert to m<sup>2</sup></button>
        </td>
    `;
    tableContainer.appendChild(triangleTr);
    }

});






/*
problem -2;
"rectangle"
*/

document.getElementById('btn-rectangle').addEventListener('click', function () {
    const rectangleInputFieldW = document.getElementById('rectangle-input-fild');
    const rectangleInputFieldWString = rectangleInputFieldW.value;
    const rectangleInput = parseFloat(rectangleInputFieldWString);


    const rectangleInputFieldi = document.getElementById('rectangle-input-fildI');
    const rectangleInputFieldiString = rectangleInputFieldi.value;
    const rectangleInputI = parseFloat(rectangleInputFieldiString);


    const rectangleField = document.getElementById('triangle-text');
    const rectangleText = rectangleField.innerText;





    if(isNaN(rectangleInput) || rectangleInput === '' || rectangleInput <=0 || isNaN(rectangleInputI) || rectangleInputI == '' || rectangleInputI <=0){
        return alert ('please valid number');
    }
    else{
    const rectangleFormula = rectangleInput * rectangleInputI;
    


    const tableContainer = document.getElementById('table-container');

    const triangleTr = document.createElement('tr');
    triangleTr.innerHTML = ` 
    
        <td>${2}</td>
        <td>${rectangleText}</td>
        <td>${rectangleFormula}cm<sup>2</sup></td>
        <td>
            <button class = "bg-yellow-400 hover:bg-violet-400 rounded px-4 py-2">Convert to m<sup>2</sup></button>
        </td>
    `;
    tableContainer.appendChild(triangleTr);
    }




    // const rectangleFormula = rectangleInput * rectangleInputI;
    


    // const tableContainer = document.getElementById('table-container');

    // const triangleTr = document.createElement('tr');
    // triangleTr.innerHTML = ` 
    
    //     <td>${2}</td>
    //     <td>${rectangleText}</td>
    //     <td>${rectangleFormula}cm<sup>2</sup></td>
    //     <td>
    //         <button class = "bg-yellow-400 hover:bg-violet-400 rounded px-4 py-2">Convert to m<sup>2</sup></button>
    //     </td>
    // `;
    // tableContainer.appendChild(triangleTr);


});



/*
problem -3
"parallelogram"
*/

document.getElementById('btn-paralleologram').addEventListener('click', function(){
    
    const plgInputFildB = document.getElementById('plgb-input');
    const plgbInputString = plgInputFildB.value;
    const plgbInput = parseFloat(plgbInputString);

    
    const plghInputField =document.getElementById('plgh-input');
    const plghInputString = plghInputField.value;
    const plghInput = parseFloat(plghInputString);
    // calculate paralal;
    const paralalCalculat = plgbInput * plghInput;
    
    const parallelogram = document.getElementById('text-paralal');
    const paralalText = parallelogram.innerText;
    
    
    const tableContainer = document.getElementById('table-container');

    const triangleTr = document.createElement('tr');
    triangleTr.innerHTML = ` 
    
        <td>${3}</td>
        <td>${paralalText}</td>
        <td>${paralalCalculat}cm<sup>2</sup></td>
        <td>
            <button class = "bg-yellow-400 hover:bg-violet-400 rounded px-4 py-2">Convert to m<sup>2</sup></button>
        </td>
    `;
    tableContainer.appendChild(triangleTr);


});


document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'question.html';
})