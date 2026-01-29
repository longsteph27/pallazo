export function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

export function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
        "L", x, y,
        "L", start.x, start.y
    ].join(" ");

    return d;
}
export function describeDonutSlice(x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number) {
    const startInner = polarToCartesian(x, y, innerRadius, endAngle);
    const endInner = polarToCartesian(x, y, innerRadius, startAngle);
    const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
    const endOuter = polarToCartesian(x, y, outerRadius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
        "M", startInner.x, startInner.y,
        "A", innerRadius, innerRadius, 0, largeArcFlag, 0, endInner.x, endInner.y,
        "L", endOuter.x, endOuter.y,
        "A", outerRadius, outerRadius, 0, largeArcFlag, 1, startOuter.x, startOuter.y,
        "Z"
    ].join(" ");

    return d;
}
