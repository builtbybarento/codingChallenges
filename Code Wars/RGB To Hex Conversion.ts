// 5 kyu - RGB To Hex Conversion

// Description:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// Solution:

export function rgb(r: number, g: number, b: number): string {
  function toHex(num: number): string{
    if (num>=255) return "FF"
    if (num<=0) return "00"
    let digits: string = '0123456789ABCDEF'
    let d1 = 0
    let d2 = 0
    while (num>0){
      d2++
      if(d2===16){
        d1++
        d2=0
      }
      num--
    }
    return digits[d1]+digits[d2]
  }
  return toHex(r) + toHex(g) + toHex(b)
}
