export function numberToPrice(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export function randomId() {
  return '_' + (Number(String(Math.random()).slice(2)) + Date.now() + Math.round(performance.now())).toString(36)
}

export function percentRounding(value: number):number {
  const bigRounded = Math.round(value * 10)
  const smallRounded = bigRounded / 10
  const result = smallRounded - Math.round(smallRounded)
  if (result == 0) {
    return Number(smallRounded + '.' + result)
  } else {
    return smallRounded
  }
}
