import { ringSlicePath } from '../utils/svgPathHelpers'
import type { ServiceSectorProps } from '../types'
import { FAN_CENTER } from '../constants'

function ServiceSector({ service, startAngle, endAngle, innerRadius, outerRadius }: ServiceSectorProps) {
  const { cx, cy } = FAN_CENTER
  const midAngle = (startAngle + endAngle) / 2
  const ringThickness = outerRadius - innerRadius
  const labelOffset = Math.max(36, Math.min(ringThickness * 0.44, ringThickness - 46))
  const labelRadius = Math.min(innerRadius + labelOffset, outerRadius - 42)
  const labelWidth = Math.min(Math.max(ringThickness * 0.58, 130), 220)
  const labelHeight = Math.min(Math.max(ringThickness * 0.34, 72), 135)
  const clipId = `sector-clip-${service.id}-${startAngle}`
  const overlayPathId = `sector-overlay-${service.id}-${startAngle}`
  const overlayInnerRadius = innerRadius + ringThickness * 0.4
  const overlayPath = ringSlicePath(cx, cy, overlayInnerRadius, outerRadius, startAngle, endAngle)
  const labelBandInnerRadius = outerRadius - Math.min(ringThickness * 0.28, 110)
  const labelBandPath = ringSlicePath(cx, cy, labelBandInnerRadius, outerRadius, startAngle, endAngle)
  const innerLabelRadius = (labelBandInnerRadius + outerRadius) / 2
  const innerLabelWidth = Math.min(Math.max(ringThickness * 0.5, 150), 240)
  const innerLabelHeight = Math.min(Math.max(ringThickness * 0.22, 52), 100)
  const sectorPath = ringSlicePath(cx, cy, innerRadius, outerRadius, startAngle, endAngle)
  const sourceWidth = service.imageDimensions?.width ?? 1200
  const sourceHeight = service.imageDimensions?.height ?? 1200

  const normAngle = (deg: number) => {
    const normalized = ((deg % 360) + 360) % 360
    return normalized
  }

  const isAngleBetween = (candidate: number, start: number, end: number) => {
    const cand = normAngle(candidate)
    const s = normAngle(start)
    const e = normAngle(end)
    if (s <= e) {
      return cand >= s && cand <= e
    }
    return cand >= s || cand <= e
  }

  const relevantAngles = [startAngle, endAngle]
  const axisAngles = [0, 90, 180, 270]
  axisAngles.forEach((angle) => {
    if (isAngleBetween(angle, startAngle, endAngle)) {
      relevantAngles.push(angle)
    }
  })

  const toCartesian = (radius: number, angleDeg: number) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    }
  }

  const points = relevantAngles.flatMap((angle) => [
    toCartesian(innerRadius, angle),
    toCartesian(outerRadius, angle),
  ])

  const xs = points.map((p) => p.x)
  const ys = points.map((p) => p.y)
  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)
  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)

  const bboxWidth = Math.max(maxX - minX, 1)
  const bboxHeight = Math.max(maxY - minY, 1)
  const imageScale = Math.min(bboxWidth / sourceWidth, bboxHeight / sourceHeight)
  const scaledWidth = sourceWidth * imageScale
  const scaledHeight = sourceHeight * imageScale
  const imageX = minX + (bboxWidth - scaledWidth) / 2
  const imageY = minY + (bboxHeight - scaledHeight) / 2

  const serviceImage =
    service.image ??
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2000&h=2000&q=90'

  return (
    <g data-service={service.id}>
      <defs>
        <clipPath id={clipId}>
          <path d={sectorPath} />
        </clipPath>
        <linearGradient id={`${overlayPathId}-gradient`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="65%" stopColor="rgba(0,0,0,0.35)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.7)" />
        </linearGradient>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <image
          href={serviceImage}
          x={imageX}
          y={imageY}
          width={scaledWidth}
          height={scaledHeight}
          preserveAspectRatio="xMidYMid meet"
        />
        <path d={overlayPath} fill={`url(#${overlayPathId}-gradient)`} />
        <path d={sectorPath} fill="rgba(0, 0, 0, 0.18)" />
      </g>

      {/* Label in outer gap */}
      <g transform={`rotate(${midAngle}, ${cx}, ${cy})`}>
        <foreignObject
          x={cx - labelWidth / 2}
          y={cy - labelRadius - labelHeight / 2}
          width={labelWidth}
          height={labelHeight}
          transform={`rotate(${midAngle > 0 ? -1.5 : 1.5}, ${cx}, ${cy - labelRadius})`}
        >
          <div className="service-label-container">
            <span className="service-label-text">{service.name}</span>
          </div>
        </foreignObject>
      </g>
    </g>
  )
}

export default ServiceSector

