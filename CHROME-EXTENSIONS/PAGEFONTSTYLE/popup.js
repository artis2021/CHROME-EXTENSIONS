$(function(){
    var color=$(`#fontColor`).val();
    $(`#fontColor`).on("change paste keyup",function(){
        color=$(this).val();
    });
    $(`#btnChange`).click(function(){
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].indexOf,{todo:"changeColor",clickedColor:color})
        })
    })
})