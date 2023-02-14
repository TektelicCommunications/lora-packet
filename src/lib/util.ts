export function reverseBuffer(buffer: Buffer): Buffer {
  const reversedBuffer = Buffer.from(buffer);
  return reversedBuffer.reverse();
}

export function asHexString(buffer: Buffer) {
  return buffer.toString("hex").toUpperCase();
}

export function asBinaryString(number: number) {
  return "b" + number.toString(2);
}