// Code your solution here
const findMatching = function(drivers, string){
    return drivers.filter(driver =>
      driver.toLowerCase() === string.toLowerCase()
    );
  }

  const fuzzyMatch = function(drivers, string){
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(string.toLowerCase())
    );
  }

  const matchName = function(drivers, string){
    return drivers.filter(driver =>
      driver.name.toLowerCase() === string.toLowerCase()
    );
  }