const d = new Date(2023, 1, 29, 9, 0, 0);
const month = d.getMonth();

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
default:
    console.log('It is not January,February,or March')
}
