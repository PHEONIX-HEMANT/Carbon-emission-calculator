// alert("Hello")
var count = 0;
performance.getEntries().map(item => item.transferSize).forEach(size => {
if (typeof size == 'number') {
count = count + size;
}
// alert("Hello")
});
alert(count);