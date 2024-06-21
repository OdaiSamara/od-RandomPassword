$(document).ready(function () {
    // ABCDEF
 $(document).on("click","#capWord",function(){
    $("#btn").click(function () {
        $(this).css({
            "outlineColor":"lightskyblue"
        })
        var v = $("#input").val();
        var m="";
        for (var i = 0; i < v.length; i++) {
            var code = v.charCodeAt(i);
            var r = Math.floor(Math.random() * (90 - 65)) + 65;
             m+=String.fromCharCode(r);
            document.getElementById("pr").innerHTML = m;
            console.log(m)
            

        }

    })
 })

  // abcdef
  $(document).on("click","#lowWord",function(){
    $("#btn").click(function () {
        $(this).css({
            "outlineColor":"lightskyblue"
        })
        var v = $("#input").val();
        var m="";
        for (var i = 0; i < v.length; i++) {
            var code = v.charCodeAt(i);
            var r = Math.floor(Math.random() * (122 - 97)) + 97;
             m+=String.fromCharCode(r);
            document.getElementById("pr").innerHTML = m;
            console.log(m)
            

        }

    })
 })
  // 12345
  $(document).on("click","#number",function(){
    $("#btn").click(function () {
        $(this).css({
            "outlineColor":"lightskyblue"
        })
        var v = $("#input").val();
        var m="";
        for (var i = 0; i < v.length; i++) {
            var code = v.charCodeAt(i);
            var r = Math.floor(Math.random() * (57 - 49)) + 49;
             m+=String.fromCharCode(r);
            document.getElementById("pr").innerHTML = m;
            console.log(m)
            

        }

    })
 })
    
  // @#$%
  $(document).on("click","#icon",function(){
    $("#btn").click(function () {
        $(this).css({
            "outlineColor":"lightskyblue"
        })
        var v = $("#input").val();
        var m="";
        for (var i = 0; i < v.length; i++) {
            var code = v.charCodeAt(i);
            var r = Math.floor(Math.random() * (47 - 33)) + 33;
             m+=String.fromCharCode(r);
            document.getElementById("pr").innerHTML = m;
            console.log(m)
            

        }

    })
 })
  // ALL
  $(document).on("click","#ALL",function(){
    $("#btn").click(function () {
        $(this).css({
            "outlineColor":"lightskyblue"
        })
        var v = $("#input").val();
        var m="";
        for (var i = 0; i < v.length; i++) {
            var code = v.charCodeAt(i);
            console.log(v);
            var r = Math.floor(Math.random() * (126 - 33)) + 33;
             m+=String.fromCharCode(r);
            document.getElementById("pr").innerHTML = m;
        }
    })
 })
 
    // $("#btn").click(function () {
    //     $(this).css({
    //         "outlineColor":"lightskyblue"
    //     })
    //     var v = $("#input").val();
    //     var m="";
    //     for (var i = 0; i < v.length; i++) {
    //         var code = v.charCodeAt(i);
    //         var r = Math.trunc(Math.random(code)*122);
    //          m+=String.fromCharCode(r);
    //         document.getElementById("pr").innerHTML = m;
    //         console.log(m)
            

    //     }

    // })
})