{/* <script>
    function display(value) {
    document.getElementById()
    }
    function clear(value) {
        document.getElementById()
    }
    function name(params) {
        
    }
</script> */}
{/* <script> */}
function display(val){
document.getElementById("screen").value+=val
}
function Solve(){
let X=document.getElementById("screen").value
let Y=eval(X)
document.getElementById("screen").value=Y
}
function Clear(){
document.getElementById("screen").value=""
}
// </script>