export const MaskNumber = (text: string | number) => {
  return text.toString().replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim()
}

export const FormatCardExpiry = (text: string) => {
  let formatted: string = ''
  if (!text.length) {
    return ''
  }
  if (text.length > 4) {
    formatted = text.slice(0, 4); // Limit to 4 digits
  }

  if (text.length > 3) {
    formatted = `${text.slice(0, 2)}/${text.slice(2)}`; // Add slash between MM and YY
  }
  return formatted;
}

export const  maskVisaCardNumber = (cardNumber: string) => {
  cardNumber = cardNumber.toString().trim();
  const maskedCardNumber = cardNumber.slice(0, -4).replace(/./g, "•").replace(/(.{4})/g, "$1 ") + " " + cardNumber.slice(-4);
  return maskedCardNumber;
}