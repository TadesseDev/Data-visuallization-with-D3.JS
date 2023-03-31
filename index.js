
// alert("Hello World")
const data = [1, 2,3,4,5,6,7,8,9,10]
d3.select('body')
    .selectAll("p")
    .data(data)
    .enter()
    .append("p")
    .text(d => d)

