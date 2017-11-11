// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes(names) {
  return names.map(function(name) {
    return Object.assign({firstname: name.split(' ')[0] , lastname: name.split(' ')[1]});
  })
}
