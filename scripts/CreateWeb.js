export function create(host, website, pre, suf, ext, mostrarSite, tx, itsraw, waitTx) {
    try {
        if (!website || typeof website !== "string") {
            return [false, "Digite o nome do site."];
        }

        if (!ext || typeof ext !== "string") {
            return [false, "Digite uma extensão."];
        }

        website = website.trim().replace(/\s/g, "");
        ext = ext.trim();
        tx = typeof tx === "string" ? tx.trim() : "";

        website = website.replace(/^https?:\/\//i, "");

        if (!ext.startsWith(".")) {
            ext = "." + ext;
        }

        if (!/^[a-zA-Z0-9-]+$/.test(website)) {
            return [false, "Digite apenas o nome do site. Exemplo: roblox"];
        }

        //if (!/^\.[a-zA-Z0-9-]+(?:\/[a-zA-Z0-9._~!$&'()*+,;=:@%-]+)*$/.test(ext)) {
        //    return [false, "Extensão inválida. Exemplo: .com ou .com/sla"];
        //}

        if (host !== "https://" && host !== "http://") {
            return [false, "Host inválido."];
        }

        const protocolo = host.replace("://", "");

        const url = new URL("index.html", window.location.href).href;

        const urlnova =
            url +
            "#" +
            encodeURIComponent(pre) +
            "&(" + protocolo + ")" +
            "_$(" + encodeURIComponent(website) + ")" +
            "_%(" + encodeURIComponent(ext) + ")" +
            "_*(" + mostrarSite + ")" +
            "_RAW(" + itsraw + ")" +
            "_WAIT(" + waitTx + ")" +
            "_TX(" + encodeURIComponent(tx) + ")" +
            "_ENDTX" +
            encodeURIComponent(suf);

        return [true, urlnova];

    } catch (err) {
        return [false, err.message];
    }
}