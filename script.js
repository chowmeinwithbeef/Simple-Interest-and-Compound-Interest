function interest(P,r,n) {
  let simple = 0
  let compound = 0
  
  simple = P*(1+n*r)
  compound = P*Math.pow(1+r,n)
  
  return [Math.round(simple), Math.round(compound)]
  
}
