export function create(https, favicon, pre, suf) {
    try {
        if (!https || typeof https !== "string") {
            return [false, "URL do site inválida."];
        }

        if (!https.startsWith("https://")) {
            https = "https://" + https;
        }

        if (!https.endsWith(".com")) {
            https = https + ".com";
        }

        if (favicon && !favicon.startsWith("https://")) {
            favicon = "https://" + favicon;
        }

        const url = new URL("index.html", window.location.href).href;

        const urlnova = url + "#" + pre + "$(" + https + ")" + "&([" + favicon + "])" + suf + "[][]";

        return [true, urlnova];
    } catch (err) {
        return [false, err.message];
    }
}