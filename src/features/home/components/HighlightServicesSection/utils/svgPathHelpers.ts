// Utility function to create SVG ring slice path
export function ringSlicePath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  startDeg: number,
  endDeg: number
): string {
  // Convert CSS angles (0° = top) to SVG angles (0° = right, clockwise)
  const svgStartRad = ((startDeg - 90) * Math.PI) / 180
  const svgEndRad = ((endDeg - 90) * Math.PI) / 180

  // Calculate start and end points for outer arc
  const outerStartX = cx + rOuter * Math.cos(svgStartRad)
  const outerStartY = cy + rOuter * Math.sin(svgStartRad)
  const outerEndX = cx + rOuter * Math.cos(svgEndRad)
  const outerEndY = cy + rOuter * Math.sin(svgEndRad)

  // Calculate start and end points for inner arc
  const innerStartX = cx + rInner * Math.cos(svgStartRad)
  const innerStartY = cy + rInner * Math.sin(svgStartRad)
  const innerEndX = cx + rInner * Math.cos(svgEndRad)
  const innerEndY = cy + rInner * Math.sin(svgEndRad)

  // Determine large arc flag (1 if angle sweep > 180°)
  const angleDiff = ((endDeg - startDeg + 360) % 360)
  const largeArc = angleDiff > 180 ? 1 : 0

  // Build path: M to outer start, A outer arc, L to inner end, A inner arc (reverse), Z
  return `M ${outerStartX} ${outerStartY} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${outerEndX} ${outerEndY} L ${innerEndX} ${innerEndY} A ${rInner} ${rInner} 0 ${largeArc} 0 ${innerStartX} ${innerStartY} Z`
}

// Helper function for bottom filler caps (shallow ring-slice)
export function capSlicePath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  fromDeg: number,
  toDeg: number
): string {
  return ringSlicePath(cx, cy, rInner, rOuter, fromDeg, toDeg)
}

// Divider path (thin white wedge)
export function dividerPath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  angleDeg: number,
  widthDeg: number = 1
): string {
  // Convert CSS angles (0° = top) to SVG angles (0° = right, clockwise)
  const svgStartRad = (((angleDeg - widthDeg / 2) - 90) * Math.PI) / 180
  const svgEndRad = (((angleDeg + widthDeg / 2) - 90) * Math.PI) / 180

  const outerStartX = cx + rOuter * Math.cos(svgStartRad)
  const outerStartY = cy + rOuter * Math.sin(svgStartRad)
  const outerEndX = cx + rOuter * Math.cos(svgEndRad)
  const outerEndY = cy + rOuter * Math.sin(svgEndRad)

  const innerStartX = cx + rInner * Math.cos(svgStartRad)
  const innerStartY = cy + rInner * Math.sin(svgStartRad)
  const innerEndX = cx + rInner * Math.cos(svgEndRad)
  const innerEndY = cy + rInner * Math.sin(svgEndRad)

  const largeArc = widthDeg > 180 ? 1 : 0

  return `M ${outerStartX} ${outerStartY} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${outerEndX} ${outerEndY} L ${innerEndX} ${innerEndY} A ${rInner} ${rInner} 0 ${largeArc} 0 ${innerStartX} ${innerStartY} Z`
}

export function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * Math.PI / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}



export function taperedCapPath(cx: number, cy: number, rInner: number, rOuter: number, startDeg: number, endDeg: number, taper = 0.6) {
  // taper = 0 (đều) → 1 (đầu nhọn mạnh)
  const rad = Math.PI / 180
  const midDeg = (startDeg + endDeg) / 2

  // Điểm đầu (đuôi cap) - vẫn giữ dày
  const pOuterTail = polarToCartesian(cx, cy, rOuter, startDeg)
  const pInnerTail = polarToCartesian(cx, cy, rInner, startDeg)

  // Điểm đầu nhọn: co cả rIn và rOut vào gần tâm
  const taperOut = rOuter - (rOuter - rInner) * taper
  const taperIn = rInner + (rOuter - rInner) * taper * 0.9

  const pOuterTip = polarToCartesian(cx, cy, taperOut, endDeg)
  const pInnerTip = polarToCartesian(cx, cy, taperIn, endDeg)

  return `
    M ${pOuterTail.x} ${pOuterTail.y}
    A ${rOuter} ${rOuter} 0 0 1 ${pOuterTip.x} ${pOuterTip.y}
    L ${pInnerTip.x} ${pInnerTip.y}
    A ${rInner} ${rInner} 0 0 0 ${pInnerTail.x} ${pInnerTail.y}
    Z
  `
}

export function flexFunnelCapPath(
  cx: number,
  cy: number,
  rIn: number,
  rOut: number,
  startDeg: number,
  endDeg: number,
  tipDeg: number,     // Góc mũi nhọn (bất kỳ)
  tipInset = 100      // Độ sâu đầu nhọn (px)
) {
  // Mũi nhọn nằm ở bán kính nhỏ hơn (rIn - tipInset)
  const tipR = Math.max(rIn - tipInset, 0)

  // Tạo các điểm
  const pOuterStart = polarToCartesian(cx, cy, rOut, startDeg)
  const pOuterEnd   = polarToCartesian(cx, cy, rOut, endDeg)
  const pInnerEnd   = polarToCartesian(cx, cy, rIn, endDeg)
  const pInnerStart = polarToCartesian(cx, cy, rIn, startDeg)
  const pTip        = polarToCartesian(cx, cy, tipR, tipDeg)

  const largeOuter = Math.abs(endDeg - startDeg) > 180 ? 1 : 0
  const sweepOuter = startDeg > endDeg ? 0 : 1
  const sweepInner = startDeg > endDeg ? 1 : 0

  return [
    `M ${pOuterStart.x} ${pOuterStart.y}`,
    `A ${rOut} ${rOut} 0 ${largeOuter} ${sweepOuter} ${pOuterEnd.x} ${pOuterEnd.y}`,
    `L ${pTip.x} ${pTip.y}`, // đầu nhọn tự do
    `L ${pInnerEnd.x} ${pInnerEnd.y}`,
    `A ${rIn} ${rIn} 0 ${largeOuter} ${sweepInner} ${pInnerStart.x} ${pInnerStart.y}`,
    'Z',
  ].join(' ')
}
