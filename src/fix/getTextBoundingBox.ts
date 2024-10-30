export function getFontVerticalMetrics(font: string, text: string = "Hg"): { ascender: number; descender: number; baseline: number } {
    // Create a canvas and context to measure text metrics
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) {
        throw new Error("Unable to create canvas context.");
    }

    // Set the font on the context
    context.font = font;

    // Measure the text
    const metrics = context.measureText(text);

    // Calculate ascender, descender, and baseline
    const ascender = metrics.actualBoundingBoxAscent;
    const descender = metrics.actualBoundingBoxDescent;
    const baseline = 0; // Canvas baseline is generally considered to be zero

    return { ascender, descender, baseline };
}
