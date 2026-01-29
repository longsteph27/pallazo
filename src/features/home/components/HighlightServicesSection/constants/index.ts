import type { SectorSegment } from '../types'

export const START_ANGLE = -70
export const END_ANGLE = 70

// Split into 4 equal sectors
const sectorSpan = (END_ANGLE - START_ANGLE) / 4

export const sectorSegments: SectorSegment[] = [
  { startAngle: START_ANGLE, endAngle: START_ANGLE + sectorSpan },
  { startAngle: START_ANGLE + sectorSpan, endAngle: START_ANGLE + sectorSpan * 2 },
  { startAngle: START_ANGLE + sectorSpan * 2, endAngle: START_ANGLE + sectorSpan * 3 },
  { startAngle: START_ANGLE + sectorSpan * 3, endAngle: END_ANGLE },
]

export const dividers = [
  START_ANGLE + sectorSpan,
  START_ANGLE + sectorSpan * 2,
  START_ANGLE + sectorSpan * 3,
]

export const FAN_CENTER = { cx: 600, cy: 570 }

