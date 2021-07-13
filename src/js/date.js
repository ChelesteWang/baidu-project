function setDate() {
    if (data.day === 7) {
        data.week++;
        if (!setCash(getCookNumber() * 100, "reduce")) {
            showMessage("当前资金不足以维持餐厅运营，游戏失败。", "warn", 5000);
        }
        data.day = 1;
    } else {
        data.day++;
    }
    for (let key in customers) {
        if (customers[key].state === "impossible") {
            customers[key].state = "possible";
        }
    }
}

function renderDate() {
    let date = document.getElementById("date");
    date.innerHTML = `W${data.week}&nbsp&nbsp&nbspD${data.day}`;
}

export default { setDate, renderDate }