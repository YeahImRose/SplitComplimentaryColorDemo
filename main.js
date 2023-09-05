function generateColors() {
	let h = Math.random() * 360;
	// Bound these to 20-90
	let s = 20 + (Math.random() * 70);
	let v = 20 + (Math.random() * 70);

	let primary = HSVtoRGB(h / 360, s / 100, v / 100);
	
	let secondary_h = h - 150;
	if(secondary_h < 0) secondary_h += 360;
	let tertiary_h = h + 150;
	if(tertiary_h > 360) tertiary_h -= 360;

	secondary = HSVtoRGB(secondary_h / 360, s / 100, v / 100);
	tertiary = HSVtoRGB(tertiary_h / 360, s / 100, v / 100);
	return [primary, secondary, tertiary];
}

// http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
// https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately/17243070#17243070
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function setColors() {
	let colors = generateColors();
	document.getElementById("color1").style.backgroundColor = 'rgb(' + colors[0].r + ',' + colors[0].g + ',' + colors[0].b + ')';
	document.getElementById("color2").style.backgroundColor = 'rgb(' + colors[1].r + ',' + colors[1].g + ',' + colors[1].b + ')';
	document.getElementById("color3").style.backgroundColor = 'rgb(' + colors[2].r + ',' + colors[2].g + ',' + colors[2].b + ')';
}

setColors();