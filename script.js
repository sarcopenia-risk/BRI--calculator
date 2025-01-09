function calculateBRI() {
    // 获取输入的腰围和身高
    var waist = document.getElementById('waist').value;
    var height = document.getElementById('height').value;

    // 检查输入是否有效
    if (isNaN(waist) || isNaN(height) || waist <= 0 || height <= 0) {
        alert("请输入有效的腰围和身高！");
        return;
    }

    // 转换为浮动数字
    waist = parseFloat(waist);
    height = parseFloat(height);

    // 计算腰围和身高的相关值
    var radiusWaist = waist / (2 * Math.PI);  // 腰围部分
    var radiusHeight = 0.5 * height;  // 身高部分

    // 打印中间结果查看
    console.log("腰围部分 (radiusWaist): " + radiusWaist);
    console.log("身高部分 (radiusHeight): " + radiusHeight);

    // 计算 BRI
    var intermediate = Math.pow(radiusWaist, 2) / Math.pow(radiusHeight, 2);
    console.log("腰围与身高的平方比 (intermediate): " + intermediate);

    var sqrtResult = Math.sqrt(1 - intermediate);
    console.log("平方根结果 (sqrtResult): " + sqrtResult);

    var BRI = 364.2 - 365.5 * sqrtResult;
    console.log("最终 BRI 值: " + BRI);

    // 显示结果
    document.getElementById('result').textContent = "BRI = " + BRI.toFixed(2);
}
