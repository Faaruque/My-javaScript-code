var country1 = ['Bangladesh','India','Pakistan']
var country2 = ['USA','Nepal','Austiliya']
var country = country1.concat(country2);

country.push('Newzelandd');
country.push('Afganistan');
country.push('Dhaka','Rongpur')
console.log(country.length);
country.pop();
console.log(country.length)
console.log(country)