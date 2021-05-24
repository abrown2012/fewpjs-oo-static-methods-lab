class Formatter {
  //add static methods here
  static capitalize(someString){
    return someString.charAt(0).toUpperCase() + someString.slice(1)
  }

  static sanitize(someString) {
    return someString.replace(/[^0-9a-z\s:\.'\.-]/gi, '')
  }

  static titleize(someString) {
    let newSomeString = someString.split(" ")
    let myArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let finalString = []
    let Blas = newSomeString.map(word => {
      if (!myArray.includes(word) || word === newSomeString[0]){
        return word.charAt(0).toUpperCase() + word.slice(1)
        
      } else {
        return word
      }
    
    })
    return Blas.join(' ')
  }
}