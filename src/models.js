/**
 * Characteristics of the plotter
 *
 * @typedef {object} PlotterCharacteristics
 * @property {string} brand - Name of the manufacturer of the device.
 * @property {number} buffer - Size of the device's buffer in bytes (characters).
 * @property {string[]} instructions - An array of all the 2-letter HPGL instruction codes
 * supported by the device.
 * @property {string} model - Model of the device. The library attempts to retrieve that
 * information from the device itself.
 * @property {Object} papers - Supported paper formats
 * @property {string[]} papers.list - Array of all paper formats supported by the device.
 * @property {number} papers.~format~ - Information about a specific paper format. Substitute
 * `~format~` with the actual format from the `papers.list` array: **A3**, **A4**, **A**, **B**,
 * **C**, etc.
 * @property {number} papers.~format~.long - The length of the long side of the plottable are.
 * @property {number} papers.~format~.short - The length of the short side of the plottable are.
 * @property {number} papers.~format~.psCode - The paper size (**PS**) code for that paper (not
 * @property {number} papers.~format~.margins - The margins for that paper.
 * @property {number} papers.~format~.margins.landscape - Margins in **landscape** orientation.
 * @property {number} papers.~format~.margins.landscape.top - Top margin.
 * @property {number} papers.~format~.margins.landscape.right - Right margin.
 * @property {number} papers.~format~.margins.landscape.bottom - Bottom margin.
 * @property {number} papers.~format~.margins.landscape.left - Left margin.
 * @property {number} papers.~format~.margins.portrait - Margins in **portrait** orientation.
 * @property {number} papers.~format~.margins.portrait.top - Top margin.
 * @property {number} papers.~format~.margins.portrait.right - Right margin.
 * @property {number} papers.~format~.margins.portrait.bottom - Bottom margin.
 * @property {number} papers.~format~.margins.portrait.left - Left margin.
 * necessary on most devices).
 */

/** @type {PlotterCharacteristics} */

const MODELS = {
    "GENERIC": {
        brand: "Unknown",
        model: "GENERIC",
        buffer: 60,
        papers: {
            list: ["A", "B", "A4", "A3"],
            A4: {long: 10870, short: 7600},
            A3: {long: 15970, short: 10870},
            A: {long: 10170, short: 7840},
            B: {long: 16450, short: 10170}
        },
        resolution: {
            x: 40,
            y: 40
        },
        instructions: [
            "AA", "AP", "AR", "AS", "BF", "BL", "CA", "CI", "CM", "CP", "CS", "CT", "CV", "DC", "DF",
            "DI", "DL", "DP", "DR", "DS", "DT", "EA", "EP", "ER", "ES", "EW", "FP", "FS", "FT", "GC",
            "GM", "IM", "IN", "IP", "IV", "IW", "KY", "LB", "LO", "LT", "NR", "OA", "OC", "OD", "OE",
            "OF", "OG", "OH", "OI", "OK", "OL", "OO", "OP", "OS", "OT", "OW", "PA", "PB", "PD", "PG",
            "PM", "PR", "PT", "PU", "RA", "RO", "RP", "RR", "SA", "SC", "SI", "SL", "SM", "SP", "SR",
            "SS", "TL", "UC", "UF", "VS", "WD", "WG", "XT", "YT"
        ]
    },

    /**
     * Characteristics for the **HP 7440A** plotter. This model is also known as the *Color Pro
     * Graphics* Plotter. It is an ANSI A and ISO A4 plotter with an 8-pen carousel. Note that the
     * paper size cannot be changed programmatically. It has to be changed by flipping a hardware
     * switch on the back of the device.
     *
     * **Important**: this model can be fitted with an optional *Graphics Enhancement Cartridge* which
     * bumps its buffer memory to 1024 (instead of 60) bytes. The cartridge also adds support for
     * various plotting instructions which are not supported by default. For example, without the
     * cartridge, this model cannot draw rectangles, circles or arcs, it cannot set the pen thickness,
     * etc.
     *
     * @type {PlotterCharacteristics}
     */
    "7440A": {
        brand: "HP",
        model: "7440A",
        buffer: 60,
        papers: {
            list: ["A", "A4"],
            A4: { // 210x297
                long: 10880,
                short: 7640,
                margins: {
                    portrait: {top: 440, right: 400, bottom: 560, left: 360}, // plotting range x: 10900 (272.5mm)
                    landscape: {top: 360, right: 420, bottom: 400, left: 560} // plotting range y: 7650 (191.25mm)
                },
                scalingPoints: {
                    p1: {x: 250, y: 279},
                    p2: {x: 10250, y: 7479}
                }
            },
            A: {
                long: 10280,
                short: 7640,
                margins: {
                    portrait: {top: 240, right: 360, bottom: 640, left: 640}, // plotting range x : 10300 (257.5mm)
                    landscape: {top: 640, right: 240, bottom: 360, left: 640} // plotting range y : 7650 (191.25mm)
                },
                scalingPoints: {
                    p1: {x: 250, y: 279},
                    p2: {x: 10250, y: 7479}
                }
            },
        },
        resolution: {x: 40, y: 40},
        instructions: [
            "CA", "CP", "CS", "DC", "DF", "DI", "DP", "DR", "IM", "IN", "IP", "IW", "LB", "LT", "OA",
            "OC", "OD", "OE", "OF", "OH", "OI", "OO", "OP", "OS", "OW", "PA", "PD", "PR", "PU", "RO",
            "SA", "SC", "SI", "SL", "SM", "SP", "SR", "SS", "TL", "UC", "VS", "XT", "YT"
        ]
    },

    /**
     * Characteristics for the **HP 7470A** plotter.
     *
     * @type {PlotterCharacteristics}
     */
    "7470A": {
        brand: "HP",
        model: "7470A",
        buffer: 255,
        papers: {
            list: ["A", "A4"],
            A4: {long: 10900, short: 7650},
            A: {long: 10300, short: 7650} // labeled as "US" on this model
        },
        resolution: {
            x: 40,
            y: 40
        },
        instructions: [
            "AA", "AR", "CA", "CI", "CP", "CS", "DC", "DF", "DI", "DP", "DR", "DT", "IM", "IN", "IP",
            "IW", "LB", "LT", "OA", "OC", "OD", "OE", "OF", "OI", "OO", "OP", "OS", "OW", "PA", "PD",
            "PR", "PU", "SA", "SC", "SI", "SL", "SM", "SP", "SR", "SS", "TL", "UC", "VS", "XT", "YT"
        ]
    },

    /**
     * Characteristics for the **HP 7475A** plotter. It is a A/A4 and B/A3 size plotter with a 6-pen
     * carousel.
     *
     * @type {PlotterCharacteristics}
     */
    "7475A": {
        brand: "HP",
        model: "7475A",
        buffer: 1024,
        papers: {
            list: ["A", "B", "A4", "A3"],
            A: {
                long: 10365,
                short: 7962,
                psCode: 4,
                margins: {
                    landscape: {top: 562, right: 463, bottom: 112, left: 348},
                    portrait: {top: 348, right: 562, bottom: 463, left: 112}
                },
                scalingPoints: {
                    p1: {x: 250, y: 596},
                    p2: {x: 10250, y: 7796}
                }
            },
            B: {
                long: 16640,
                short: 10365,
                psCode: 0,
                margins: {
                    landscape: {top: 463, right: 112, bottom: 348, left: 562},
                    portrait: {top: 112, right: 348, bottom: 562, left: 463}
                },
                scalingPoints: {
                    p1: {x: 522, y: 259},
                    p2: {x: 15722, y: 10259}
                }
            },
            A4: {
                long: 11040,
                short: 7721,
                psCode: 4,
                margins: {
                    landscape: {},
                    portrait: {}
                },
                scalingPoints: {
                    p1: {x: 603, y: 521},
                    p2: {x: 10603, y: 7721}
                }
            },
            A3: {
                long: 16158,
                short: 11040,
                psCode: 0,
                margins: {
                    landscape: {},
                    portrait: {}
                },
                scalingPoints: {
                    p1: {x: 170, y: 602},
                    p2: {x: 15370, y: 10602}
                }
            }
        },
        resolution: {
            x: 40,
            y: 40
        },
        instructions: [
            "AA", "AR", "CA", "CI", "CP", "CS", "DC", "DF", "DI", "DP", "DR", "DT", "EA", "ER", "EW",
            "FT", "IM", "IN", "IP", "IW", "LB", "LT", "OA", "OC", "OD", "OE", "OF", "OH", "OI", "OO",
            "OP", "OS", "OW", "PA", "PD", "PR", "PS", "PT", "PU", "RA", "RO", "RR", "SA", "SC", "SI",
            "SL", "SM", "SP", "SR", "SS", "TL", "UC", "VS", "WG", "XT", "YT"
        ]
    },

    /**
     * Characteristics for the **HP 7550A** plotter.
     *
     * @type {PlotterCharacteristics}
     */
    "7550A": {
        brand: "HP",
        model: "7550A",
        buffer: 12800,
        papers: {
            list: ["A", "B", "A4", "A3"],
            A4: {long: 10870, short: 7600},
            A3: {long: 15970, short: 10870},
            A: {long: 10170, short: 7840},
            B: {long: 16450, short: 10170}
        },
        resolution: {
            x: 40,
            y: 40
        },
        instructions: [
            "AA", "AP", "AR", "AS", "BF", "BL", "CA", "CI", "CM", "CP", "CS", "CT", "CV", "DC", "DF",
            "DI", "DL", "DP", "DR", "DS", "DT", "EA", "EP", "ER", "ES", "EW", "FP", "FS", "FT", "GC",
            "GM", "IM", "IN", "IP", "IV", "IW", "KY", "LB", "LO", "LT", "NR", "OA", "OC", "OD", "OE",
            "OF", "OG", "OH", "OI", "OK", "OL", "OO", "OP", "OS", "OT", "OW", "PA", "PB", "PD", "PG",
            "PM", "PR", "PT", "PU", "RA", "RO", "RP", "RR", "SA", "SC", "SI", "SL", "SM", "SP", "SR",
            "SS", "TL", "UC", "UF", "VS", "WD", "WG", "XT", "YT"
        ]
    },

    // "7550B": {},
    // "7550Plus": {},

    // LARGE:


    /**
     * Characteristics for the **HP 7580A** plotter.
     *
     * @type {PlotterCharacteristics}
     *
     */

    // * A and A4 sizes are loaded with the longer axis horizontal.
    // * All other sizes have long axis vertical.
    // * LES MARGES SONT À LA PAGE 43 DU MANUEL. ÇA PERMETTRA DE CALCULER LES GROSSEURS
    // * LA PAGE 53 DIT COMMENT CHARGER LE PAPIER (DANS QUEL SENS)
    "7580A": {
        brand: "HP",
        model: "7580A",
        buffer: 1024,
        // papers: {
        //   list: ["A", "B", "C", "D", "A4", "A3", "A2", "A1"],
        //   A: {long: 10170, short: 7840},
        //   B: {long: 16450, short: 10170},
        //   C: {long: ?, short: ?},
        //   D: {long: ?, short: ?},
        //   A4: {long: 10870, short: 7600},
        //   A3: {long: 15970, short: 10870},
        //   A2: {long: ?, short: ?},
        //   A1: {long: ?, short: ?}
        // },
        resolution: {
            x: 40,
            y: 40
        },
        instructions: [
            "AA", "AP", "AR", "AS", "BL", "CA", "CC", "CI", "CM", "CP", "CS", "CT", "DC", "DF", "DI",
            "DL", "DP", "DR", "DS", "DT", "EA", "EP", "ER", "ES", "EW", "FP", "FS", "FT", "GP", "IM",
            "IN", "IP", "IV", "IW", "LB", "LO", "LT", "NR", "OA", "OC", "OD", "OE", "OF", "OH", "OI",
            "OL", "OO", "OP", "OS", "OT", "OW", "PA", "PB", "PD", "PM", "PR", "PT", "PU", "RA", "RO",
            "RR", "SA", "SC", "SG", "SI", "SL", "SM", "SP", "SR", "SS", "TL", "UC", "UF", "VS", "WG",
            "XT", "YT"
        ]
    },

    /**
     * Characteristics for the **HP 7585A** plotter.
     *
     * @type {PlotterCharacteristics}
     *
     */
    // * A, C, A4, and A2 sizes are loaded with the longer axis horizontal.
    // * All other sizes have long axis vertical.
    "7585A": {
        brand: "HP",
        model: "7585A",
        buffer: 1024,
        // papers: {
        //   list: ["A", "B", "C", "D", "E", "A4", "A3", "A2", "A1", "A0"],
        //   A: {long: 10170, short: 7840},
        //   B: {long: 16450, short: 10170},
        //   C: {long: ?, short: ?},
        //   D: {long: ?, short: ?},
        //   E: {long: ?, short: ?},
        //   A4: {long: 10870, short: 7600},
        //   A3: {long: 15970, short: 10870},
        //   A2: {long: ?, short: ?},
        //   A1: {long: ?, short: ?}
        //   A0: {long: ?, short: ?}
        // },
        resolution: {
            x: 40,
            y: 40
        },
        instructions: [
            "AA", "AP", "AR", "AS", "BL", "CA", "CC", "CI", "CM", "CP", "CS", "CT", "DC", "DF", "DI",
            "DL", "DP", "DR", "DS", "DT", "EA", "EP", "ER", "ES", "EW", "FP", "FS", "FT", "GP", "IM",
            "IN", "IP", "IV", "IW", "LB", "LO", "LT", "NR", "OA", "OC", "OD", "OE", "OF", "OH", "OI",
            "OL", "OO", "OP", "OS", "OT", "OW", "PA", "PB", "PD", "PM", "PR", "PT", "PU", "RA", "RO",
            "RR", "SA", "SC", "SG", "SI", "SL", "SM", "SP", "SR", "SS", "TL", "UC", "UF", "VS", "WG",
            "XT", "YT"
        ]
    },

    // "7585B": {},

    /**
     * Characteristics for the **HP 7586B** plotter.
     *
     * @type {PlotterCharacteristics}
     */
    "7586B": {
        brand: "HP",
        model: "7586B",
        buffer: 1024,
        // papers: {
        //   list: ["A", "B", "C", "D", "E", "A4", "A3", "A2", "A1", "A0"],
        //   A: {long: 10170, short: 7840},
        //   B: {long: 16450, short: 10170},
        //   C: {long: ?, short: ?},
        //   D: {long: ?, short: ?},
        //   E: {long: ?, short: ?},
        //   A4: {long: 10870, short: 7600},
        //   A3: {long: 15970, short: 10870},
        //   A2: {long: ?, short: ?},
        //   A1: {long: ?, short: ?}
        //   A0: {long: ?, short: ?}
        // },
        resolution: {
            x: 40,
            y: 40
        },
        instructions: [
            "AA", "AF", "AH", "AP", "AR", "AS", "BL", "CA", "CC", "CI", "CM", "CP", "CS", "CT", "DC",
            "DF", "DI", "DL", "DP", "DR", "DS", "DT", "EA", "EC", "EP", "ER", "ES", "EW", "FP", "FR",
            "FS", "FT", "GP", "IM", "IN", "IP", "IV", "IW", "LB", "LO", "LT", "NR", "OA", "OC", "OD",
            "OE", "OF", "OH", "OI", "OL", "OO", "OP", "OS", "OT", "OW", "PA", "PB", "PD", "PG", "PM",
            "PR", "PT", "PU", "RA", "RO", "RR", "SA", "SC", "SG", "SI", "SL", "SM", "SP", "SR", "SS",
            "TL", "UC", "UF", "VS", "WG", "XT", "YT"
        ]
    }
};

module.exports = MODELS;
