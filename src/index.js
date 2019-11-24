const SerialPort = require("serialport");
const Models = require("./models");

async function main() {

    const port = initialise()
    port.write("++ver\r");

}

if (require.main === module) {
    main().catch((error) => {
        console.error(`Error encountered:`, {error})
        process.exit(1)
    })
}

function initialise() {
    const plotter = Models["7475A"]
    console.log(`My plotter is a ${plotter.brand} ${plotter.model}.`)

    const port = new SerialPort("/dev/tty.usbserial-PXEN1JVQ", {
        autoOpen: false,
        baudRate: 9600,
        stopBits: 1,
        parity: "none",
        dataBits: 8,
        xoff: false,
        xon: false,
        rtscts: false,
        timeout: 10
    })

    port.on("open", () => {
        console.log(`Opened connection.`)
    })

    port.on("data", (data) => {
        console.log(`Data: ${data}`)
    })

    port.on("close", () => {
        console.log(`Closing connection.`)
    })

    port.open()
    return port
}
