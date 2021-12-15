let checkboxListArray = ['internet','programming','computer','mobile','networking'];


// for(x of checkboxListArray){
//     document.getElementById("checkBoxList").innerHTML += `
//     <div class="form-check">
//         <input class="form-check-input" type="checkbox" name="category" value="" id="${x}">
//         <label class="form-check-label" for="${x}">
//             ${x}
//         </label>
//     </div>
// `;
// }

checkboxListArray.forEach(x=>{
    document.getElementById("checkBoxList").innerHTML += `
    <div class="form-check">
        <input class="form-check-input" type="checkbox" name="category" value="" id="${x}">
        <label class="form-check-label" for="${x}">
            ${x}
        </label>
    </div>
    `;
})

