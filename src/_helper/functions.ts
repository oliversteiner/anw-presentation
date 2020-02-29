export function numberToPrice(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export function random_id() {
  return '_' + (Number(String(Math.random()).slice(2)) + Date.now() + Math.round(performance.now())).toString(36)
}
