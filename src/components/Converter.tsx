import {ChangeEvent, useState} from "react";

function Converter() {
  const [color, setColor] = useState<string>('')

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setColor(evt.target.value)
  }

  const isValidHex = (hex: string): boolean => {
    return /^#[0-9A-Fa-f]{6}$/.test(hex);
  }

  const getRgba = (color: string) => {
    const r = parseInt(color.substring(1, 3), 16)
    const g = parseInt(color.substring(3, 5), 16)
    const b = parseInt(color.substring(5, 7), 16)
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className='converter' style={{
      backgroundColor: isValidHex(color) ? color : color.length === 7 && 'rgb(255, 69, 58)'
    }}>
      <input type="text" onChange={onChange} value={color} maxLength={7} />
      <span>{isValidHex(color) ? getRgba(color) : color.length === 7 && 'Ошибка'}</span>
    </div>
  )
}

export default Converter
