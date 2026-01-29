export interface ServiceItem {
  id: number
  name: string
  icon?: string
  description?: string
  image?: string
  imageDimensions?: {
    width: number
    height: number
  }
}

export interface ServiceSectorProps {
  service: ServiceItem
  startAngle: number
  endAngle: number
  innerRadius: number
  outerRadius: number
}

export interface SectorSegment {
  startAngle: number
  endAngle: number
}

export interface Dimensions {
  outerRadius: number
  innerRadius: number
}

