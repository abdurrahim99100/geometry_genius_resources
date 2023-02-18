/*
problem -4;
Rhombus;
*/
document.getElementById('btn-rhombus').addEventListener('click', function(){
    
    const rombusTextField = document.getElementById('rhombus-text');
    const rombusText = rombusTextField.innerText;
    

    const rhombusD1Field = document.getElementById('rhombus-d1');
    const rhombusD1FieldString = rhombusD1Field.value;
    const rhombusD1 = parseFloat(rhombusD1FieldString);
    

    const rhombusD2Field = document.getElementById('rhombus-d2');
    const rhombusD2FieldString = rhombusD2Field.value;
    const rhombusd2 = parseFloat(rhombusD2FieldString);

    // calculate;
    const rhombusCalculate = 0.5 * rhombusD1 * rhombusd2;
    

    const tableContainer = document.getElementById('table-container');

    const triangleTr = document.createElement('tr');
    triangleTr.innerHTML = ` 
    
        <td>${4}</td>
        <td>${rombusText}</td>
        <td>${rhombusCalculate}cm<sup>2</sup></td>
        <td>
            <button class = "bg-yellow-400 hover:bg-violet-400 rounded px-4 py-2">Convert to m<sup>2</sup></button>
        </td>
    `;
    tableContainer.appendChild(triangleTr);
});


/*
problem -5;
pentagon
*/

document.getElementById('btn-pentagon').addEventListener('click', function(){

    const pentagonTextFild = document.getElementById('pentagon-text');
    const pentagonText = pentagonTextFild.innerText;
    

    const pentagonpInput = document.getElementById('gonp-input');
    const pentagonpInputString = pentagonpInput.value;
    const pentagonp = parseFloat(pentagonpInputString);


    const pentagonbInput = document.getElementById('gonb-input');
    const pentagonbInputString = pentagonbInput.value;
    const pentagonb = parseFloat(pentagonbInputString);
    
    const pentagonCalculate = 0.5 * pentagonp * pentagonb;


    const tableContainer = document.getElementById('table-container');

    const triangleTr = document.createElement('tr');
    triangleTr.innerHTML = ` 
    
        <td>${5}</td>
        <td>${pentagonText}</td>
        <td>${pentagonCalculate}cm<sup>2</sup></td>
        <td>
            <button class = "bg-yellow-400 hover:bg-violet-400 rounded px-4 py-2">Convert to m<sup>2</sup></button>
        </td>
    `;
    tableContainer.appendChild(triangleTr);

    
});


/*
problem - 6;
ellipse;
*/

document.getElementById('btn-ellipse').addEventListener('click', function(){

    const ellipseTextFild = document.getElementById('ellipse-text');
    const ellipseText = ellipseTextFild.innerText;
    
    

    const ellipseaInput = document.getElementById('ellipsea-input');
    const ellipseaInputString = ellipseaInput.value;
    const ellipsea = parseFloat(ellipseaInputString);
    


    const ellipsebInput = document.getElementById('ellipseb-input');
    const ellipsebInputString = ellipsebInput.value;
    const ellipseb = parseFloat(ellipsebInputString);

    
    const ellipseCalculate = 3.14 * ellipsea * ellipseb;
    
    
    
    const tableContainer = document.getElementById('table-container');

    const triangleTr = document.createElement('tr');
    triangleTr.innerHTML = ` 
    
        <td>${6}</td>
        <td>${ellipseText}</td>
        <td>${ellipseCalculate}cm<sup>2</sup></td>
        <td>
            <button class = "bg-yellow-400 hover:bg-violet-400 rounded px-4 py-2">Convert to m<sup>2</sup></button>
        </td>
    `;
    tableContainer.appendChild(triangleTr);
});