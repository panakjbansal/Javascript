<html>
<head>

</head>
<body>
<button onclick="CB()">Change</button>
<script>
function CB(){

let x=Math.random()*256;
let y=Math.random()*256;
let z=Math.random()*256;
x=Math.floor(x);
y=Math.floor(y);
z=Math.floor(z);
let s="rgb("+x.toString()+","+y.toString()+","+z.toString();
s=s+")";
console.log(s);
document.body.style.backgroundColor=s;
}
</script>
</body>

</html>
