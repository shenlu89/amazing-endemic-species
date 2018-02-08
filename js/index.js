Vue.filter('country', function (isocode) {
    return {
        UZ: 'Uzbekistan',
        PS: 'Palestinian Territory, Occupied',
        QA: 'Qatar',
        SA: 'Saudi Arabia',
        AF: 'Afghanistan',
        LB: 'Lebanon',
        BH: 'Bahrain',
        CY: 'Cyprus',
        SY: 'Syrian Arab Republic',
        TJ: 'Tajikistan',
        TM: 'Turkmenistan',
        AE: 'United Arab Emirates',
        IR: 'Iran, Islamic Republic of',
        IQ: 'Iraq',
        OM: 'Oman',
        PK: 'Pakistan',
        IL: 'Israel',
        JO: 'Jordan',
        KZ: 'Kazakhstan',
        KW: 'Kuwait',
        KG: 'Kyrgyzstan',
        VN: 'Viet Nam',
        MV: 'Maldives',
        PH: 'Philippines',
        BD: 'Bangladesh',
        BT: 'Bhutan',
        BN: 'Brunei Darussalam',
        KH: 'Cambodia',
        TL: 'Timor-Leste',
        SG: 'Singapore',
        LK: 'Sri Lanka',
        TH: 'Thailand',
        NP: 'Nepal',
        LA: 'Lao People\'s Democratic Republic',
        YE: 'Yemen',
        GE: 'Georgia',
        TR: 'Turkey',
        AM: 'Armenia',
        AZ: 'Azerbaijan',
        DT: 'Disputed Territory',
        MY: 'Malaysia',
        IO: 'British Indian Ocean Territory',
        IN: 'India',
        ID: 'Indonesia',
        MM: 'Myanmar',
        VU: 'Vanuatu',
        WF: 'Wallis and Futuna',
        GU: 'Guam',
        MH: 'Marshall Islands',
        PN: 'Pitcairn',
        WS: 'Samoa',
        CX: 'Christmas Island',
        CC: 'Cocos (Keeling) Islands',
        FJ: 'Fiji',
        TK: 'Tokelau',
        TO: 'Tonga',
        TV: 'Tuvalu',
        NR: 'Nauru',
        NC: 'New Caledonia',
        NU: 'Niue',
        NF: 'Norfolk Island',
        MP: 'Northern Mariana Islands',
        PW: 'Palau',
        VA: 'Holy See (Vatican City State)',
        MK: 'Macedonia, the former Yugoslav Republic of',
        MT: 'Malta',
        MC: 'Monaco',
        PL: 'Poland',
        RO: 'Romania',
        SM: 'San Marino',
        AL: 'Albania',
        LV: 'Latvia',
        LI: 'Liechtenstein',
        LT: 'Lithuania',
        LU: 'Luxembourg',
        BE: 'Belgium',
        BA: 'Bosnia and Herzegovina',
        BG: 'Bulgaria',
        HR: 'Croatia',
        CZ: 'Czech Republic',
        DK: 'Denmark',
        EE: 'Estonia',
        FO: 'Faroe Islands',
        FI: 'Finland',
        GG: 'Guernsey',
        IM: 'Isle of Man',
        JE: 'Jersey',
        DE: 'Germany',
        GI: 'Gibraltar',
        GL: 'Greenland',
        SK: 'Slovakia',
        SI: 'Slovenia',
        SJ: 'Svalbard and Jan Mayen',
        SE: 'Sweden',
        CH: 'Switzerland',
        AD: 'Andorra',
        AT: 'Austria',
        HU: 'Hungary',
        IS: 'Iceland',
        NL: 'Netherlands',
        NO: 'Norway',
        IE: 'Ireland',
        AX: 'Åland Islands',
        ME: 'Montenegro',
        GY: 'Guyana',
        FK: 'Falkland Islands (Malvinas)',
        GF: 'French Guiana',
        SR: 'Suriname',
        UY: 'Uruguay',
        PY: 'Paraguay',
        PE: 'Peru',
        VG: 'Virgin Islands, British',
        VI: 'Virgin Islands, U.S.',
        GP: 'Guadeloupe',
        HT: 'Haiti',
        MQ: 'Martinique',
        MS: 'Montserrat',
        KN: 'Saint Kitts and Nevis',
        LC: 'Saint Lucia',
        VC: 'Saint Vincent and the Grenadines',
        BB: 'Barbados',
        BM: 'Bermuda',
        KY: 'Cayman Islands',
        CU: 'Cuba',
        DM: 'Dominica',
        DO: 'Dominican Republic',
        GD: 'Grenada',
        TT: 'Trinidad and Tobago',
        TC: 'Turks and Caicos Islands',
        AI: 'Anguilla',
        AG: 'Antigua and Barbuda',
        AW: 'Aruba',
        BS: 'Bahamas',
        JM: 'Jamaica',
        EH: 'Western Sahara',
        DZ: 'Algeria',
        TN: 'Tunisia',
        MA: 'Morocco',
        ZM: 'Zambia',
        ZW: 'Zimbabwe',
        GN: 'Guinea',
        LY: 'Libya',
        GW: 'Guinea-Bissau',
        ML: 'Mali',
        MR: 'Mauritania',
        YT: 'Mayotte',
        RW: 'Rwanda',
        RE: 'Réunion',
        SN: 'Senegal',
        SL: 'Sierra Leone',
        LS: 'Lesotho',
        LR: 'Liberia',
        MG: 'Madagascar',
        MW: 'Malawi',
        BJ: 'Benin',
        BW: 'Botswana',
        BF: 'Burkina Faso',
        BI: 'Burundi',
        CM: 'Cameroon',
        CV: 'Cape Verde',
        CF: 'Central African Republic',
        TD: 'Chad',
        KM: 'Comoros',
        CG: 'Congo',
        CD: 'Congo, The Democratic Republic of the',
        CI: 'Côte d\'Ivoire',
        DJ: 'Djibouti',
        ER: 'Eritrea',
        ET: 'Ethiopia',
        GA: 'Gabon',
        GM: 'Gambia',
        GH: 'Ghana',
        SO: 'Somalia',
        SD: 'Sudan',
        SZ: 'Swaziland',
        TZ: 'Tanzania, United Republic of',
        TG: 'Togo',
        UG: 'Uganda',
        MZ: 'Mozambique',
        NE: 'Niger',
        NG: 'Nigeria',
        KE: 'Kenya',
        GT: 'Guatemala',
        BZ: 'Belize',
        SV: 'El Salvador',
        PA: 'Panama',
        HM: 'Heard Island and McDonald Islands',
        BV: 'Bouvet Island',
        AQ: 'Antarctica',
        MD: 'Moldova',
        BY: 'Belarus',
        MN: 'Mongolia',
        MO: 'Macao',
        HK: 'Hong Kong',
        KP: 'Korea, Democratic People\'s Republic of',
        KR: 'Korea, Republic of',
        PM: 'Saint Pierre and Miquelon',
        MF: 'Saint Martin (French part)',
        BL: 'Saint Barthélemy',
        AS: 'American Samoa',
        CK: 'Cook Islands',
        PF: 'French Polynesia',
        SB: 'Solomon Islands',
        UM: 'United States Minor Outlying Islands',
        AU: 'Australia',
        NZ: 'New Zealand',
        PG: 'Papua New Guinea',
        KI: 'Kiribati',
        PT: 'Portugal',
        FR: 'France',
        GR: 'Greece',
        ES: 'Spain',
        GB: 'United Kingdom',
        IT: 'Italy',
        RS: 'Serbia',
        BR: 'Brazil',
        CL: 'Chile',
        CO: 'Colombia',
        EC: 'Ecuador',
        AR: 'Argentina',
        PR: 'Puerto Rico',
        AN: 'Netherlands Antilles',
        EG: 'Egypt',
        MU: 'Mauritius',
        ST: 'Sao Tomé and Principe',
        SC: 'Seychelles',
        GQ: 'Equatorial Guinea',
        ZA: 'South Africa',
        AO: 'Angola',
        NA: 'Namibia',
        MX: 'Mexico',
        CR: 'Costa Rica',
        HN: 'Honduras',
        NI: 'Nicaragua',
        GS: 'South Georgia and the South Sandwich Islands',
        RU: 'Russian Federation',
        UA: 'Ukraine',
        CN: 'China',
        TW: 'Taiwan, Province of China',
        JP: 'Japan',
        CA: 'Canada',
        US: 'United States',
        BO: 'Bolivia, Plurinational States of',
        SH: 'Saint Helena, Ascension and Tristan da Cunha',
        CW: 'Curaçao',
        SX: 'Sint Maarten (Dutch part)',
        BQ: 'Bonaire, Sint Eustatius and Saba',
        SS: 'South Sudan',
        TF: 'French Southern Territories',
        FM: 'Micronesia, Federated States of ',
        VE: 'Venezuela, Bolivarian Republic of'
    }[isocode];
});

var vm = new Vue({
    el: '#app',
    data() {
        return {
            show: false,
            title: "IUCN Red List Visualization",
            subtitle: "A proj4 visulizes the species facing a risk of extinction and their stories.",
            species: [],
            s: '',
            list: [],
            iso_map: {
                "AF": 4,
                "AX": 248,
                "AL": 8,
                "DZ": 12,
                "AS": 16,
                "AD": 20,
                "AO": 24,
                "AI": 660,
                "AQ": 10,
                "AG": 28,
                "AR": 32,
                "AM": 51,
                "AW": 533,
                "AU": 36,
                "AT": 40,
                "AZ": 31,
                "BS": 44,
                "BH": 48,
                "BD": 50,
                "BB": 52,
                "BY": 112,
                "BE": 56,
                "BZ": 84,
                "BJ": 204,
                "BM": 60,
                "BT": 64,
                "BO": 68,
                "BQ": 535,
                "BA": 70,
                "BW": 72,
                "BV": 74,
                "BR": 76,
                "IO": 86,
                "BN": 96,
                "BG": 100,
                "BF": 854,
                "BI": 108,
                "CV": 132,
                "KH": 116,
                "CM": 120,
                "CA": 124,
                "KY": 136,
                "CF": 140,
                "TD": 148,
                "CL": 152,
                "CN": 156,
                "CX": 162,
                "CC": 166,
                "CO": 170,
                "KM": 174,
                "CG": 178,
                "CD": 180,
                "CK": 184,
                "CR": 188,
                "CI": 384,
                "HR": 191,
                "CU": 192,
                "CW": 531,
                "CY": 196,
                "CZ": 203,
                "DK": 208,
                "DJ": 262,
                "DM": 212,
                "DO": 214,
                "EC": 218,
                "EG": 818,
                "SV": 222,
                "GQ": 226,
                "ER": 232,
                "EE": 233,
                "ET": 231,
                "FK": 238,
                "FO": 234,
                "FJ": 242,
                "FI": 246,
                "FR": 250,
                "GF": 254,
                "PF": 258,
                "TF": 260,
                "GA": 266,
                "GM": 270,
                "GE": 268,
                "DE": 276,
                "GH": 288,
                "GI": 292,
                "GR": 300,
                "GL": 304,
                "GD": 308,
                "GP": 312,
                "GU": 316,
                "GT": 320,
                "GG": 831,
                "GN": 324,
                "GW": 624,
                "GY": 328,
                "HT": 332,
                "HM": 334,
                "VA": 336,
                "HN": 340,
                "HK": 344,
                "HU": 348,
                "IS": 352,
                "IN": 356,
                "ID": 360,
                "IR": 364,
                "IQ": 368,
                "IE": 372,
                "IM": 833,
                "IL": 376,
                "IT": 380,
                "JM": 388,
                "JP": 392,
                "JE": 832,
                "JO": 400,
                "KZ": 398,
                "KE": 404,
                "KI": 296,
                "KP": 408,
                "KR": 410,
                "KW": 414,
                "KG": 417,
                "LA": 418,
                "LV": 428,
                "LB": 422,
                "LS": 426,
                "LR": 430,
                "LY": 434,
                "LI": 438,
                "LT": 440,
                "LU": 442,
                "MO": 446,
                "MK": 807,
                "MG": 450,
                "MW": 454,
                "MY": 458,
                "MV": 462,
                "ML": 466,
                "MT": 470,
                "MH": 584,
                "MQ": 474,
                "MR": 478,
                "MU": 480,
                "YT": 175,
                "MX": 484,
                "FM": 583,
                "MD": 498,
                "MC": 492,
                "MN": 496,
                "ME": 499,
                "MS": 500,
                "MA": 504,
                "MZ": 508,
                "MM": 104,
                "NA": 516,
                "NR": 520,
                "NP": 524,
                "NL": 528,
                "NC": 540,
                "NZ": 554,
                "NI": 558,
                "NE": 562,
                "NG": 566,
                "NU": 570,
                "NF": 574,
                "MP": 580,
                "NO": 578,
                "OM": 512,
                "PK": 586,
                "PW": 585,
                "PS": 275,
                "PA": 591,
                "PG": 598,
                "PY": 600,
                "PE": 604,
                "PH": 608,
                "PN": 612,
                "PL": 616,
                "PT": 620,
                "PR": 630,
                "QA": 634,
                "RE": 638,
                "RO": 642,
                "RU": 643,
                "RW": 646,
                "BL": 652,
                "SH": 654,
                "KN": 659,
                "LC": 662,
                "MF": 663,
                "PM": 666,
                "VC": 670,
                "WS": 882,
                "SM": 674,
                "ST": 678,
                "SA": 682,
                "SN": 686,
                "RS": 688,
                "SC": 690,
                "SL": 694,
                "SG": 702,
                "SX": 534,
                "SK": 703,
                "SI": 705,
                "SB": 90,
                "SO": 706,
                "ZA": 710,
                "GS": 239,
                "SS": 728,
                "ES": 724,
                "LK": 144,
                "SD": 729,
                "SR": 740,
                "SJ": 744,
                "SZ": 748,
                "SE": 752,
                "CH": 756,
                "SY": 760,
                "TW": 158,
                "TJ": 762,
                "TZ": 834,
                "TH": 764,
                "TL": 626,
                "TG": 768,
                "TK": 772,
                "TO": 776,
                "TT": 780,
                "TN": 788,
                "TR": 792,
                "TM": 795,
                "TC": 796,
                "TV": 798,
                "UG": 800,
                "UA": 804,
                "AE": 784,
                "GB": 826,
                "US": 840,
                "UM": 581,
                "UY": 858,
                "UZ": 860,
                "VU": 548,
                "VE": 862,
                "VN": 704,
                "VG": 92,
                "VI": 850,
                "WF": 876,
                "EH": 732,
                "YE": 887,
                "ZM": 894,
                "ZW": 716
            }
        }
    },

    computed: {
        wiki_specie_name: function(){
            return ("" + this.s.name).replace(/\s/g, '_');
        },
        red_list_binomial: function(){
            return ("" + this.s.name).replace(/\s/g, "%20");
        },
        wiki_status: function(){
            let status_hash = { EX:"Extinction", EW:"Extinct_in_the_wild", CR:"Critically_endangered", EN:"Critically_endangered", VU:"Vulnerable_species", NT:"Near-threatened_species", LC:"Least_concern", DD:"Data_deficient", NE:"Not_evaluated"};
            return status_hash[this.s.status];
        }
    },

    methods: {
        title_beforeEnter: function (el) {
            el.style.opacity = 0
        },
        title_enter: function (el, done) {
            d3.select(el)
                .transition()
                .delay(function () {
                    return Math.random() * 2000
                })
                .attrs({"class": "fadeTitle"})
                .transition()
                .delay(3000)
                .select(function () {
                    return this.parentNode
                })
                .text(this.title)
        },

        subtitle_beforeEnter: function (el) {
            el.style.opacity = 0 // interesting!
        },
        subtitle_enter: function (el, done) {
            d3.select(el)
                .style("display", function () {
                    return this.innerHTML === ' ' ? 'inline' : "inline-block"
                })
                .filter(function (d) {
                    return this.innerHTML !== ' '
                })
                .transition()
                .duration(1500)
                .delay(function () {
                    return Math.random() * 1000
                })
                .ease(function (t) {
                    return t * (2 - t)
                })
                .tween("transform", function () {
                    function random(min, max) {
                        return Math.random() * (max - min) + min
                    }

                    var t3 = d3.interpolateArray([random(-350, 350), random(-350, 350), random(-350, 350)], [0, 0, 0]),
                        s = d3.interpolateNumber(0, 1),
                        style = this.style;
                    return function (t) {
                        style.opacity = s(t);
                        style.transform = "translate3d(" + t3(t)[0] + "px, " + t3(t)[1] + "px, " + t3(t)[2] + "px) scale(" + s(t) + ")";
                    };
                })
                .transition()
                .delay(3000)
                .select(function () {
                    return this.parentNode
                })
                .text(this.subtitle)
        },
        proj: function () {
            var width = 600,
                height = 600;
            return d3.geoOrthographic()
                .scale(height / 2.0)
                .translate([width / 2, height / 2])
                .clipAngle(180)
                .rotate([0, 0, 23.44])
        },
        path: function (proj) {
            return d3.geoPath().projection(proj);
        },
        globeGenerater: function (countries) {
            var width = 600,
                height = 600,
                _this3 = this,

                projection = _this3.proj(),

                path = _this3.path(projection),

                globe = d3.select("#globe")
                    .append("svg")
                    .attrs({
                        "preserveAspectRatio": "xMidYMin meet",
                        "viewBox": "0 0 600 600",
                        "width": width,
                        "height": height
                    }),

                backCountry = globe.selectAll(".show")
                    .data(countries)
                    .enter()
                    .append("path")
                    .transition()
                    .delay((d, i) => {
                        return i * 15
                    })
                    .attrs({"class": "show", "d": path})
                    .transition()
                    .delay(300)
                    .attr("class", "back-country");

            globe.append("circle")
                .attrs({"class": "world-outline", "cx": width / 2, "cy": height / 2, "r": projection.scale()});

            projection.clipAngle(90);

            var country = globe.selectAll(".show")
                    .data(countries)
                    .enter()
                    .append("path")
                    .transition()
                    .delay((d, i) => {
                        return i * 15
                    })
                    .attrs({"class": "show", "d": path})
                    .transition()
                    .delay(300)
                    .attr("class", "country")
                    .transition()
                    .delay(5000)
                    .on("end", step),

                species_codes = d3.shuffle(_this3.species);
            _this3.list = species_codes.slice(0, 2);
            let iso_map = this.iso_map;

//                setTimeout(step, 5000);

            function step() {
                function indexOfCountries(specie, countries) {
                    for (var i = 0, len = countries.length; i < len; i++) {
                        if (countries[i].id === iso_map[specie.isocode]) {
                            return i
                        }
                    }
                    return 0;
                }

                var i = Math.floor(Math.random() * species_codes.length);

                _this3.list.push(species_codes[i]);

                _this3.s = _this3.list.shift();

                var index = indexOfCountries(_this3.s, countries);

                setTimeout(() => {
                    _this3.show = false;
                }, 6000);

                _this3.show = true;

                globe.selectAll(".country")
                    .transition()
                    .style("fill", function (d, i) {
                        return index === i ? "#c33" : "#53646d"
                    });

                d3.transition()
                    .delay(100)
                    .duration(1000)
                    .tween("rotate", function () {
                        var point = d3.geoCentroid(countries[index]);
                        var rotate = d3.interpolateArray(projection.rotate(), [-point[0] + 22, -point[1] + 38, 23.44]);
                        return function (t) {
                            projection.rotate(rotate(t)).clipAngle(180);
                            d3.selectAll(".back-country").attr("d", path);
                            projection.rotate(rotate(t)).clipAngle(90);
                            d3.selectAll(".country").attr("d", path);
                        };
                    })
                    .transition()
                    .delay(4800)
                    .on("end", step);
            }
        }
    },
    beforeCreate: function () {
        var _this2 = this;

        function getSpecies() {
            return axios.get('amazing-species.json').then((res)=>{
                return res.data;
            })
        }

        function getWorld() {
            return axios.get('world-110m.json').then((res)=>{
                let world = res.data;
                return topojson.feature(world, world.objects.countries).features;
            })
        }

        axios.all([getSpecies(), getWorld()])
            .then(axios.spread(function (species, world) {
                _this2.species = species;
                _this2.globeGenerater(world);
            }));
    }
})