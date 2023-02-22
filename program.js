alert("ข้อมูลไม่ควรถ้วน");
function SelectedMenu(){
    const Selected=document.getElementById('menu');
    const SelectedTxt=document.getElementById('selected');

    choose= Selected.value;
    SelectedTxt.innerText="เพศ" + choose

}