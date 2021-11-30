/*setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  
setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);

setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, 700);

setTimeout(() => {
    process.stdout.write('\r|    ');
  }, 900);

setTimeout(() => {
    process.stdout.write('\r/    ');
  }, 1100);

setTimeout(() => {
    process.stdout.write('\r-    ');
  }, 1300);

setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, 1500);

setTimeout(() => {
    process.stdout.write('\r|    ');
    console.log('\n');
  }, 1700);
*/

const spinArray = ['|', '/', '-', "\\", '|', '/', '-', "\\"];

for (let i = 0; i < spinArray.length; i++) {
    (function(i) {
        var spin = spinArray[i];
        setTimeout(() => {
            process.stdout.write('\r' + spin);
        }, i * 500)
    })(i);
}