const type = window.location.hash.substring(1);

export function get_website() {
    const match = type.match(/\$\((.*?)\)/);
    if (match) {
        return match[1];
    }

    return null;
}

export function get_favicon() {
    const match = type.match(/&\(\[(.*?)\]\)/);
    if (match) {
        return match[1];
    }

    return null;
}