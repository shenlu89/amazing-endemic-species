var images = d3.select("#images")
    .selectAll("img")
    .data(d3.range(1, 10))
    .enter()
    .append("img")
    .attr("src", function(d) { return "./stamps/" + d + ".png"; })
    .style("display", "none"),

    circles = [
        { "status": "Least Concern", "cx": 228, "r": 13.3, "fill": "#066", "d": "m220 54.1v-8.86h1.86v7.36h4.62v1.5zm13.7-3.28 1.8.555c-.276.975-.735 1.7-1.38 2.17-.642.473-1.46.71-2.44.71-1.22 0-2.23-.405-3.01-1.22-.786-.811-1.18-1.92-1.18-3.32 0-1.49.395-2.64 1.19-3.46.791-.823 1.83-1.23 3.12-1.23 1.12 8e-6 2.04.323 2.74.969.418.382.732.93.941 1.64l-1.84.427c-.109-.463-.336-.829-.681-1.1-.345-.268-.764-.402-1.26-.402-.682 8e-6-1.24.238-1.66.713-.425.475-.637 1.24-.637 2.31 0 1.13.209 1.93.628 2.41.418.479.962.719 1.63.719.494 2e-6.918-.152 1.27-.457.356-.305.611-.784.766-1.44z", "tfill": "#fff" },
        { "status": "Near Threatened", "cx": 194, "r": 13.3, "fill": "#066", "d": "m186 54.1v-8.93h1.81l3.76 5.97v-5.97h1.73v8.93h-1.86l-3.71-5.83v5.83zm11.3 0v-7.42h-2.73v-1.51h7.31v1.51h-2.72v7.42z", "tfill": "#9c9" },
        { "status": "Vulnerable", "cx": 161, "r": 13.3, "fill": "#c90", "d": "m155 54.1-3.29-8.93h2.01l2.33 6.61 2.25-6.61h1.97l-3.29 8.93zm6.22-8.93h1.86v4.84c0 .768.0231 1.27.0691 1.49.0795.366.269.659.568.881s.708.332 1.23.332c.527 1e-6.924-.105 1.19-.314.268-.209.429-.466.483-.771.0543-.305.0816-.811.0816-1.52v-4.94h1.86v4.69c0 1.07-.0502 1.83-.151 2.27-.1.443-.286.817-.555 1.12-.27.305-.631.548-1.08.728s-1.04.271-1.77.271c-.878 0-1.54-.0985-2-.296-.454-.197-.813-.453-1.08-.768-.264-.315-.437-.645-.521-.99-.121-.512-.182-1.27-.182-2.27z", "tfill": "#ffc" },
        { "status": "Endangered", "cx": 126, "r": 13.3, "fill": "#c63", "d": "m118 54.1v-8.93h6.82v1.51h-4.96v1.98h4.62v1.5h-4.62v2.43h5.14v1.5zm8.6 0v-8.93h1.81l3.76 5.97v-5.97h1.73v8.93h-1.86l-3.71-5.83v5.83z", "tfill": "#fc9" },
        { "status": "Critically Endangered", "cx": 92, "r": 13.3, "fill": "#c33", "d": "m89.3 50.8 1.8.555c-.276.975-.735 1.7-1.38 2.17-.642.473-1.46.71-2.44.71-1.22 0-2.23-.405-3.01-1.22-.786-.811-1.18-1.92-1.18-3.32 0-1.49.395-2.64 1.19-3.46.791-.823 1.83-1.23 3.12-1.23 1.12 1e-5 2.04.323 2.74.969.418.382.732.93.941 1.64l-1.84.427c-.109-.463-.336-.829-.681-1.1-.345-.268-.764-.402-1.26-.402-.682 9e-6-1.24.238-1.66.713-.425.475-.637 1.24-.637 2.31-2e-6 1.13.209 1.93.628 2.41.418.479.962.719 1.63.719.494 2e-6.918-.152 1.27-.457.356-.305.611-.784.766-1.44zm3.41 3.28v-8.93h3.91c.983 8e-6 1.7.0802 2.14.241.446.16.802.446 1.07.856s.402.88.402 1.41c-1e-5.67-.203 1.22-.609 1.66-.406.437-1.01.712-1.82.826.402.228.733.477.995.75s.614.756 1.06 1.45l1.12 1.74h-2.22l-1.34-1.94c-.477-.695-.803-1.13-.979-1.31-.176-.181-.362-.305-.558-.372-.197-.067-.508-.101-.935-.101h-.376v3.73zm1.86-5.16h1.37c.891 4e-6 1.45-.0366 1.67-.11.222-.0731.395-.199.521-.378s.188-.402.188-.67c-7e-6-.301-.0826-.543-.248-.728-.165-.185-.398-.302-.7-.35-.151-.0203-.602-.0305-1.36-.0305h-1.45z", "tfill": "#fcc" },
        { "status": "Extinct in the Wild", "cx": 58, "r": 13.3, "fill": "#000", "d": "m48.4 54.1v-8.93h6.82v1.51h-4.96v1.98h4.62v1.5h-4.62v2.43h5.14v1.5zm9.89 0-2.2-8.93h1.9l1.39 6.14 1.68-6.14h2.21l1.61 6.24 1.41-6.24h1.87l-2.23 8.93h-1.97l-1.83-6.68-1.83 6.68z", "tfill": "#fff" },
        { "status": "Extinct", "cx": 24.4, "r": 13.3, "fill": "#000", "d": "m16.3 54.1v-8.93h6.82v1.51h-4.96v1.98h4.62v1.5h-4.62v2.43h5.14v1.5zm7.65 0 3.14-4.66-2.85-4.27h2.17l1.84 2.87 1.81-2.87h2.15l-2.86 4.34 3.14 4.6h-2.24l-2.04-3.09-2.05 3.09z", "tfill": "#c33" }
    ],

    comments = [
        { "d": "m90.8 31.6c-3.51 6e-6-6.27.244-8.28.731s-3.42 1.31-4.25 2.46c9e-5-1.59.559-2.81 1.68-3.66 1.12-.853 2.87-1.44 5.24-1.77 2.38-.328 5.58-.493 9.6-.493h18.4c2.46 8e-6 4.42-.0689 5.86-.207 1.44-.138 2.75-.461 3.91-.97 1.47-.806 2.28-1.52 2.42-2.15.708 1.05 2.04 1.88 3.99 2.48 1.87.562 4.66.843 8.36.843h20.8c5.97 8e-6 9.92.498 11.8 1.49 1.95.954 2.93 2.43 2.93 4.44-1.05-1.21-2.51-2.04-4.4-2.5-1.88-.461-4.58-.692-8.09-.692h-21.2c-4.19 6e-6-7.4-.246-9.62-.739s-3.77-1.44-4.65-2.84c-.821 1.44-2.41 2.4-4.78 2.87-2.36.472-5.81.707-10.3.707z", "stroke": null },
        { "d": "m227 25.1v7.66", "stroke": "#333" },
        { "d": "m24.4 25.1v7.66", "stroke": "#333" }
    ],

    tags = [
        { "x": 23.668137, "y": 22.199017, "text": "Extinct" },
        { "x": 124.34117, "y": 22.199005, "text": "Threatened" },
        { "x": 218.28612, "y": 6.8491535, "text": "Least" },
        { "x": 218.78328, "y": 15.403396, "text": "Concern" }
    ],

    species_codes = [
        { "specie": "Thylacine", "binomial": "Thylacinus cynocephalus", "code": 36, "country": "Australia", "status": "Extinct", "flag": "au" },
        { "specie": "Wyoming toad", "binomial": "Anaxyrus baxteri", "code": 840, "country": "United States", "status": "Extinct in the Wild", "flag": "us" },
        { "specie": "Baiji", "binomial": "Lipotes vexillifer", "code": 156, "country": "China", "status": "Critically Endangered", "flag": "cn" },
        { "specie": "Okapia", "binomial": "Okapia johnstoni", "code": 180, "country": "Democratic Republic of the Congo", "status": "Endangered", "flag": "cd" },
        { "specie": "Ring-tailed lemur", "binomial": "Lemur catta", "code": 450, "country": "Madagascar", "status": "Vulnerable", "flag": "mg" },
        { "specie": "Little spotted kiwi", "binomial": "Apteryx owenii", "code": 554, "country": "New Zealand", "status": "Near Threatened", "flag": "nz" },
        // { "specie": "White-headed marmoset", "binomial": "Callithrix geoffroyi", "code": 76, "country": "Brazil", "status": "Least Concern" },
        { "specie": "King penguin", "binomial": "Aptenodytes patagonicus", "code": 10, "country": "Antarctica", "status": "Least Concern", "flag": "aq" },
        { "specie": "Arapaima gigas", "binomial": "Arapaima gigas", "code": 76, "country": "Brazil", "status": "Data Deficient", "flag": "br" },
        { "specie": "Rainbow boa", "binomial": "Epicrates cenchria", "code": 32, "country": "Argentina", "status": "Not Evaluated", "flag": "ar" }
    ],

    w = 280,
    h = w * (68.27 / 256),

    line = "A proj4 visulizes the species facing a risk of extinction and their stories.",

    title = "IUCN Red List Visualization",

    width = 700,
    height = 700,

    projection = d3.geoOrthographic()
    .scale(height / 2.0)
    .translate([width / 2, height / 2])
    .clipAngle(180)
    .rotate([0, 0, 23.44]),

    path = d3.geoPath()
    .projection(projection),

    globe = d3.select("#globe")
    .append("svg")
    .attrs({ "preserveAspectRatio": "xMidYMin meet", "viewBox": "0 0 700 700", "width": width, "height": height });

circle = d3.select("#threatened")
    .append("svg")
    .attrs({ "xmlns": d3.namespaces.xmlns, "viewBox": "0 0 256 68.27", "width": w, "height": h })
    .append("g")
    .attrs({ "transform": "translate(0 49.5)", "class": "circle" })
    .selectAll("circle")
    .data(circles)
    .enter()
    .append("circle")
    .style("opacity", 0);

circle.transition()
    .delay(function(d, i) {
        return i * 200
    })
    .duration(300)
    .attrs({ "cx": function(d) { return d.cx }, "r": function(d) { return d.r }, "fill": function(d) { return d.fill } })
    .transition()
    .style("opacity", 1);

var text = d3.select("#threatened svg")
    .selectAll("path")
    .data(circles)
    .enter()
    .append("path")
    .style("opacity", 0);

text.transition()
    .delay(2000)
    .attrs({ "fill": function(d) { return d.tfill }, "d": function(d) { return d.d } })
    .transition()
    .style("opacity", 1);

var tags_comments = d3.select("#threatened svg");

tags_comments.append("g")
    .attr("fill", "#333")
    .selectAll("path")
    .data(comments)
    .enter()
    .append("path")
    .style("opacity", 0)
    .transition()
    .delay(2000)
    .attrs({ "d": function(d) { return d.d }, "stroke": function(d) { return d.stroke } })
    .transition()
    .style("opacity", 1);

var tag = tags_comments.append("switch")
    .attrs({ "fill": "#333", "font-size": 11, "text-anchor": "middle" })
    .append("g")

tag.selectAll("text")
    .data(tags)
    .enter()
    .append("text")
    .filter(function(d, i) {
        return i < 2;
    })
    .attrs({ "x": function(d) { return d.x }, "y": function(d) { return d.y } })
    .append("tspan")
    .style("opacity", 0)
    .attrs({ "x": function(d) { return d.x }, "y": function(d) { return d.y } })
    .text(function(d) { return d.text })
    .transition()
    .style("opacity", 1);

tag.append("g")
    .attr("transform", "translate(5.28 6.69)")
    .selectAll("text")
    .data(tags)
    .enter()
    .append("text")
    .filter(function(d, i) {
        return i > 1;
    })
    .attrs({ "x": function(d) { return d.x }, "y": function(d) { return d.y } })
    .append("tspan")
    .attrs({ "x": function(d) { return d.x }, "y": function(d) { return d.y } })
    .text(function(d) { return d.text });

d3.select("h1 a")
    .selectAll("span")
    .data(title.split(''))
    .enter()
    .append("span")
    .text(function(d) {
        return d
    })
    .filter(function(d) {
        return d !== ' '
    })
    .style("opacity", 0)
    .transition()
    .duration(500)
    .delay(function() {
        return Math.random() * 2000
    })
    .styleTween("opacity", function() {
        return d3.interpolateNumber(0, 1)
    })
    .transition()
    .delay(3000)
    .select(function() { return this.parentNode })
    .text(title)

d3.select("#sub")
    .selectAll("div")
    .data(line.split(''))
    .enter()
    .append("div")
    .style("display", function(d) {
        return d === ' ' ? 'inline' : "inline-block"
    })
    .text(function(d) {
        return d
    })
    .filter(function(d) {
        return d !== ' '
    })
    .style("opacity", 0)
    .transition()
    .duration(2000)
    .delay(function(d, i) {
        return i * 20
    })
    .ease(function(t) {
        return t * (2 - t)
    })
    .tween("transform", function() {
        function random(min, max) {
            return Math.random() * (max - min) + min
        }
        var t3 = d3.interpolateArray([random(-500, 500), random(-500, 500), random(-500, 500)], [0, 0, 0]),
            s = d3.interpolateNumber(0, 1),
            style = this.style;
        return function(t) {
            style.opacity = s(t);
            style.transform = "translate3d(" + t3(t)[0] + "px, " + t3(t)[1] + "px, " + t3(t)[2] + "px) scale(" + s(t) + ")";
        };
    })
    .transition()
    .delay(3000)
    .select(function() { return this.parentNode })
    .text(line)

d3.queue()
    .defer(d3.json, "world-110m.json")
    .await(ready);

function ready(error, world) {
    if (error) throw error;

    var countries = topojson.feature(world, world.objects.countries).features,

        backCountry = globe.selectAll(".show")
        .data(countries)
        .enter()
        .append("path")
        .transition()
        .delay((d, i) => {
            return i * 15
        })
        .attrs({ "class": "show", "d": path })
        .transition()
        .delay(300)
        .attr("class", "back-country");

    globe.append("circle")
        .attrs({ "class": "world-outline", "cx": width / 2, "cy": height / 2, "r": projection.scale() });

    projection.clipAngle(90);

    var country = globe.selectAll(".show")
        .data(countries)
        .enter()
        .append("path")
        .transition()
        .delay((d, i) => {
            return i * 15
        })
        .attrs({ "class": "show", "d": path })
        .transition()
        .delay(300)
        .attr("class", "country"),

        prev;

    setTimeout(step, 3000);

    function step() {
        var l = species_codes.length,
            i = Math.floor(Math.random() * l);
        prev = i === prev ? (i === l - 1 ? --i : ++i) : i;
        var index = indexOfCountries(species_codes, prev, countries),
            s = species_codes[prev];

        function indexOfCountries(species, index, countries) {
            for (var i = 0, len = countries.length; i < len; i++) {
                if (countries[i].id === species_codes[index].code) {
                    return i
                }
            }
        }

        globe.selectAll(".country")
            .transition()
            .style("fill", function(d, i) { return index === i ? "#c33" : "#53646d" });

        d3.transition()
            .delay(250)
            .duration(1250)
            .tween("rotate", function() {
                var point = d3.geoCentroid(countries[index]);
                var rotate = d3.interpolateArray(projection.rotate(), [-point[0] + 22, -point[1] + 38, 23.44]);
                return function(t) {
                    projection.rotate(rotate(t)).clipAngle(180);
                    globe.selectAll(".back-country").attr("d", path);

                    projection.rotate(rotate(t)).clipAngle(90);
                    globe.selectAll(".country").attr("d", path);
                };
            })
            .transition()
            .delay(5000)
            .on("end", step);

        d3.select("#specie a")
            .attrs({ "target": "_blank", "href": "https://en.wikipedia.org/wiki/" + s.specie.replace(/\s/g, "_") })
            .text(s.specie)

        d3.select("#latin a")
            .attrs({ "target": "_blank", "href": "http://apiv3.iucnredlist.org/api/v3/website/" + s.binomial.replace(/\s/g, "%20") })
            .text(s.binomial)

        d3.select("#status a")
            .attrs({ "target": "_blank", "href": "https://en.wikipedia.org/wiki/" + s.status.replace(/\s/g, "_") })
            .text(s.status)

        d3.select("#country a")
            .attrs({ "target": "_blank", "href": "https://en.wikipedia.org/wiki/" + s.country.replace(/\s/g, "_") })
            .text(s.country)

        d3.select("#country img")
            .attr("src", "./country_flags/" + s.flag + ".svg")

        images.style("display", function(d, i) { return i === prev ? "inline-block" : "none" })
            .filter(function(d, i) {
                return i === prev
            })
            .transition()
            .duration(300)
            .styleTween("opacity", function(d, i) {
                return d3.interpolateNumber(0, 1)
            })
            .transition()
            .delay(6550)
            .styleTween("opacity", function() {
                return d3.interpolateNumber(1, 0)
            })

        text.attr("fill", function(d) { return d.status === s.status ? d.tfill : "#333" })

        circle.attr("fill", function(d) { return d.status === s.status ? d.fill : "none" })
    }
}
