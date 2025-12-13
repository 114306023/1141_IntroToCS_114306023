const mathInput = document.getElementById('mathInput');
const englishInput = document.getElementById('englishInput');
const submitBtn = document.getElementById('submitBtn');
const tableBody = document.getElementById('tableBody');

const mathAvgCell = document.getElementById('mathAvg');
const englishAvgCell = document.getElementById('englishAvg');
const overallAvgCell = document.getElementById('overallAvg');

// 更新欄位平均與總平均
function updateColumnAverages() {
    const rows = tableBody.rows;
    const count = rows.length;
    if (count === 0) {
        mathAvgCell.textContent = '0.00';
        englishAvgCell.textContent = '0.00';
        overallAvgCell.textContent = '0.00';
        return;
    }

    let sumMath = 0, sumEnglish = 0, sumAll = 0;

    for (let i = 0; i < count; i++) {
        const math = parseFloat(rows[i].cells[1].textContent);
        const english = parseFloat(rows[i].cells[2].textContent);
        sumMath += math;
        sumEnglish += english;
        sumAll += math + english;
    }

    const avgMath = (sumMath / count).toFixed(2);
    const avgEnglish = (sumEnglish / count).toFixed(2);
    const avgOverall = (sumAll / (count * 2)).toFixed(2);

    mathAvgCell.textContent = avgMath;
    englishAvgCell.textContent = avgEnglish;
    overallAvgCell.textContent = avgOverall;
}


submitBtn.addEventListener("click", function () {
    
    if (mathInput.value === "" || englishInput.value === "") {
        alert("請輸入數字！");
        mathInput.value = "";
        englishInput.value = "";
        return;
    }
    const math = Number(mathInput.value);
    const english = Number(englishInput.value);

    if (isNaN(math) || isNaN(english) || math < 0 || math > 100 || english < 0 || english > 100) {
        alert("請輸入 0~100 的有效數字！");
        mathInput.value = "";
        englishInput.value = "";
        return;
    }

    // count avg
    const avg = ((math + english) / 2).toFixed(2);

    // new num
    const newIndex = tableBody.rows.length + 1;

    // new row
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${newIndex}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${avg}</td>
    `;

    // 清空輸入
    mathInput.value = '';
    englishInput.value = '';

    // 更新tfoot平均值
    updateColumnAverages();
});


window.onload = updateColumnAverages;

