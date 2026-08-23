export function get_website() {
    const hash = window.location.hash.substring(1);

    const match = hash.match(
        /&\((https|http)\)_\$\((.*?)\)_%\((.*?)\)_\*\((true|false)\)_RAW\((true|false)\)_TX\((.*?)\)_ENDTX/
    );

    if (!match) {
        return null;
    }

    const protocolo = match[1];
    const nome = match[2];
    const extensao = match[3];
    const mostrarSite = match[4] === "true";
    const itsraw = match[5] === "true";
    const tx = decodeURIComponent(match[6]);

    return {
        url: `${protocolo}://${nome}${extensao}`,
        mostrarSite,
        itsraw,
        tx
    };
}